export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*html*/`
<style>
  :host{
    width: 100%;
    height: 100%;
    display: grid;
    --grid-template-rows: 75px 1fr 30px;
    --grid-template-columns: 200px 320px 1fr 150px;
 
    grid-template-rows: var(--grid-template-rows);
    grid-template-columns: var(--grid-template-columns);
    --header-girid-row   : 1/2;
    --header-girid-column: 1/3;
    --menu-girid-row     : 1/2;
    --menu-girid-column  : 3/-1;
    --pin-girid-row      : 1/2;
    --pin-girid-column   : 4/5;
    --aside-girid-row    : 2/3;
    --aside-girid-column : 1/2;
    --main-girid-row     : 2/3;
    --main-girid-column  : 2/-1;
    --footer-girid-row   : 3/4;
    --footer-girid-column: 1/-1;
  }
  ::slotted([name=header]) {
    grid-row   : var(--header-girid-row);
    grid-column: var(--header-girid-column);
  }
  ::slotted([name=menu]) {
    grid-row   : var(--menu-girid-row);
    grid-column: var(--menu-girid-column);
  }
  ::slotted([name=pin]) {
    grid-row   : var(--pin-girid-row);
    grid-column: var(--pin-girid-column);
  }
  ::slotted([name=aside]) {
    grid-row   : var(--aside-girid-row);
    grid-column: var(--aside-girid-column);
  }
  ::slotted([name=main]) {
    grid-row   : var(--main-girid-row);
    grid-column: var(--main-girid-column);
  }
  ::slotted([name=footer]) {
    grid-row   : var(--footer-girid-row);
    grid-column: var(--footer-girid-column);
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
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
