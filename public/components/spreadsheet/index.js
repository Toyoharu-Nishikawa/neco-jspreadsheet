import {CustomElem as NecoJspreadsheet} from "../../lib/dist/index.js"
import {collection} from "@/dataStore/collection.js"


export const TAG_NAME ="my-" + (import.meta.url.replace(/^[a-z]+:\/\/[^/]+\/|\/[^/]*$/gi, "").replace(/\//g, "-") || "origin")

export const CustomElem = class extends NecoJspreadsheet {
  constructor(){
    super()
  }
  connectedCallback(){
    super.connectedCallback()
    console.log("connected callback of", TAG_NAME)
    this.initialize()
  }
  initialize(){
    collection.subscribe(this.draw.bind(this))
  }
  draw(){
    const columns = [
      { title:'height', width:100,readOnly:true },
      { title:'weight', width:100 },
      { title:'BMI', width:100 },
    ]
    const data = [
      [1,2,3],
      [3,4,5],
    ]
    this.contents= {
      toolbar: true,
      worksheets:[
        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50,100],
        },
        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns}, 
      ]
    }
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))

