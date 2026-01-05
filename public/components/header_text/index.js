export const TAG_NAME ="my-" + (import.meta.url.replace(/^[a-z]+:\/\/[^/]+\/|\/[^/]*$/gi, "").replace(/\//g, "-") || "origin")

const createHTML = () => /*html*/`
<style>
  :host{
    background: ghostwhite;
    display: flex;
    align-items: center;
  }
  h1 {
    padding: 0 30px;
    margin: 0px;
  }
</style>
<h1><slot></slot></h1>
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
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
