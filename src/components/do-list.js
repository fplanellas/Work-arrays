import { LitElement, html } from 'lit-element';

export class DoList extends LitElement {

    static get properties() {
        return {
            items: { type: Array }
        };
    }
    
    constructor() {
        super();
        this.items = []
    }

    render() {
        return html`
         <ul>
        ${         
            this.items.map( item => html`<do-item .task=${item}></do-item>`)            
        }
        </ul>
        `;
    }

}
customElements.define('do-list', DoList);