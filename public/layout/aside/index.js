export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*htlm*/`
<style>
  :host{
    border-right: 1px solid #DCDCDC;
    display: grid;
    grid-template-rows:    1fr;
    grid-template-columns: 1fr;
  }
</style>
<slot></slot>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME)
    const shadow = this.attachShadow({mode: 'open'})
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
