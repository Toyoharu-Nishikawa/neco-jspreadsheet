import "/neco-cdn/neco-material/index.js"
import {collection} from "@/dataStore/collection.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*html*/`
<style>
  :host{
   padding: 20px; 
  }
</style>

<md-list>
  <md-list-item>
    <md-filled-tonal-button name="add-btn">
      <md-icon slot="icon">play_arrow</md-icon>add
    </md-filled-tonal-button>
  </md-list-item>
</md-list>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
    this.elements={}
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME)
    const shadow = this.attachShadow({mode: 'open'})
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
    this.shadow =  shadow
    this.initialize()
  }
  initialize(){
    this.setElements()
  }
  setElements(){
    const add = this.shadow.querySelector("[name=add-btn]")
    add.onclick=this.add.bind(this)
  }
  add(){
    collection.data.addCounter +=1
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))

