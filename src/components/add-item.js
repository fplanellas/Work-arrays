import { LitElement, html, css } from 'lit-element';
import 'dile-input/dile-input';

export class AddItem extends LitElement {

    static get properties() {
        return {
            value: { type: String }
        };
    }

    constructor() {
        super();
        this.value = '';
    }

    render() {
        return html`
            <dile-input
                label="New element"
                value="${this.value}"
                placeholder="Add element & press enter"
                @enter-pressed="${this.createItem}"
                @input="${(e) => this.value = e.target.value}"
            ></dile-input>
        `;
    }

    createItem(e) {
        this.dispatchEvent(new CustomEvent('element-added', {
            detail: e.target.value ? e.target.value : 'item'
        }));
        this.value = '';
    }
}
customElements.define('add-item', AddItem);