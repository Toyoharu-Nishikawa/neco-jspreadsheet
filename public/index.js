/* layout */
import {TAG_NAME as page} from "./layout/page/index.js"
import {TAG_NAME as header} from "./layout/header/index.js"
import {TAG_NAME as menu} from "./layout/menu/index.js"
import {TAG_NAME as aside} from "./layout/aside/index.js"
import {TAG_NAME as main} from "./layout/main/index.js"
import {TAG_NAME as footer} from "./layout/footer/index.js"
import {TAG_NAME as grid} from "./layout/grid/index.js"

/* components */
import {TAG_NAME as header_text} from "./components/header_text/index.js"
import {TAG_NAME as aside_area} from "./components/aside_area/index.js"
import {TAG_NAME as spreadsheet} from "./components/spreadsheet/index.js"
//import {TAG_NAME as table1} from "./components/table1/index.js"
//import {TAG_NAME as cad1} from "./components/cad1/index.js"
//import {TAG_NAME as graph1} from "./components/graph1/index.js"
//import {TAG_NAME as table2} from "./components/table2/index.js"
import {TAG_NAME as footer_text} from "./components/footer_text/index.js"


export const TAG_NAME ="my-" + (import.meta.url.replace(/^[a-z]+:\/\/[^/]+\/|\/[^/]*$/gi, "").replace(/\//g, "-") || "origin")


const createHTML = () => /*html*/`
<${page}>
  <${header} name=header>
    <${header_text}>JSPREAD SHEET </${header_text}>
  </${header}>
  <${menu} name=menu>
  </${menu}>
  <${aside} name=aside>
    <${aside_area}></${aside_area}>
  </${aside}>
  <${main} name=main>
    <${spreadsheet}></${spreadsheet}>
  </${main}>
  <${footer} name=footer>
    <${footer_text}>version 0.0.1</${footer_text}>
  </${footer}>
</${page}>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME)
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
    this.initialize()
  }
  initialize(){
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>{
  console.log("!!! defined !!!",TAG_NAME)
//  console.clear()
})
