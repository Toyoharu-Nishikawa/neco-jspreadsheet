import jspreadsheet from 'jspreadsheet-ce/dist/index.js';
import jspreadsheetCSS from "jspreadsheet-ce/dist/jspreadsheet.css?inline"
import jspreadsheetThemesCSS from "jspreadsheet-ce/dist/jspreadsheet.themes.css?inline"
import jsutesCSS from "jsuites/dist/jsuites.css?inline"

export const TAG_NAME = "neco-jspreadsheet"
const createHTML = (params) => `
<style>

:host{
/*  height: 100%;
  width: 100%;
  */
  display:grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
}
#jspreadsheet{
  display:flex;
  flex-flow: column;
/*
  height: 100%;
  width: 100%;
*/
}
${jspreadsheetCSS}
${jspreadsheetThemesCSS}
${jsutesCSS}

</style>
<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
<div id="jspreadsheet"> </div>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback() {
    const data = [["","",""],["","",""],["","",""]]
    const columns = [
      {type:"text", title:"A"},
      {type:"text", title:"B"},
      {type:"text", title:"C"},
    ]

    const shadow = this.attachShadow({mode: 'open'})
    this.shadow=shadow

    const HTML = createHTML() 
    shadow.setHTMLUnsafe(HTML)

    const divElem = shadow.querySelector("#jspreadsheet")
    this.divElem = divElem

    const resizeObserver = new ResizeObserver((entries) => {
      const e = entries[0]
      const rect = e.target.getBoundingClientRect()
      const width  = rect.width
      const height = rect.height
      this.resize(width,height)
    })
    resizeObserver.observe(this.shadow.host)
 
    this.contents= {
      worksheets:[
        {
          tableOverflow:true,
          tableWidth:"auto",
          tableHeight:"auto",
          data,
          columns,
        },
      ]
    }
  }
  get contents(){
    return this._contents
  }
  set contents(contents){
    this.setContents(contents)
  }
  setContents(contents){
    if(this.jsp){
      this.divElem.innerHTML = ""
      this.jsp = null
    }
    const rect = this.shadow.host.getBoundingClientRect()
    const width  = rect.width
    const height = rect.height
    const self = this 
    const target = {
      root : this.shadow,
    }
    const mergedContents = Object.assign(target, contents)

    const jsp = jspreadsheet(this.divElem, mergedContents) 
    this.jsp=jsp
    this.shadow.host.onblur=(e)=>{
        jsp.forEach(v=>v.resetSelection())
    }
    this.resize(width, height) 
  }
  resize(width, height){
    if(!this.jsp)return

    const heightList = [...this.divElem.childNodes]
      .filter(v=>!v.classList.contains("jtabs-content"))
      .map(v=>{
        return v?.getBoundingClientRect().height
      })
    const sumOthersHeight = heightList.reduce((p,c)=> p+Math.min(c,40),0)

    this.jsp.forEach(v=>{
      const nodeList = [...v.element.childNodes] 
      const childHeightList = nodeList
      .filter(v=>!v.classList.contains("jss_content"))
      .map(v=>{
        return v?.getBoundingClientRect().height
      })
      const sumOthersChildHeight = childHeightList.reduce((p,c)=>p+c,0)
      const maxHeight = Math.max(0, height - sumOthersHeight - sumOthersChildHeight)
      v.content.style.maxWidth = width + "px"
      v.content.style.maxHeight = maxHeight + "px"
    })
  }
}

customElements.define(TAG_NAME, CustomElem)
