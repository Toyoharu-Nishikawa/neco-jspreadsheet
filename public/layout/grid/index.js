export const TAG_NAME ="my-" + (import.meta.url.replace(/^[a-z]+:\/\/[^/]+\/|\/[^/]*$/gi, "").replace(/\//g, "-") || "origin")

const createHTML = () => /*html*/ `
<style>
    :host {
        display: grid;
        --grid-template-rows: repeat(2, minmax(0, 1fr));
        --grid-template-columns: repeat(2, minmax(0, 1fr));
        --gap: 20px;
        --overflow: hidden;
        --padding: 20px;

        grid-template-rows: var(--grid-template-rows);
        grid-template-columns: var(--grid-template-columns);
        gap: var(--gap);
        padding: var(--padding);
        grid-column: 1/2;
        grid-row: 1/2;
    }

    ::slotted() {
        overflow: var(--overflow);
    }
</style>
<slot></slot>
`

export const CustomElem = class extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        console.log("connected callback of", TAG_NAME)
        const shadow = this.attachShadow({
            mode: 'open'
        })
        const HTML = createHTML()
        shadow.setHTMLUnsafe(HTML)
    }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(() => console.log("!!! defined !!!", TAG_NAME))