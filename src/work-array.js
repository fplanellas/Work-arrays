import { LitElement, html, css } from 'lit-element';
import './components/do-item';
import './components/do-list';
import './components/add-item';



export class WorkArray extends LitElement {

    static get styles() {
        return css`
            :host{
                display: block;
            }

            button {
                border:1px solid red;
                border-radius:5px;
                background: #fff;
                padding:5px 10px;
                cursor: pointer;
                margin-top:10px;
            }
            button:hover{
                background: #eee;
                box-shadow: 2px 2px #ccc;
            }
        `;
    }

    static get properties() {
        return {
            itemsAdded: { type: Array },
            arrayItemsb: { type: Array }
        };
    }

    constructor() {
        super();
        this.itemsAdded = [
            {
                name: 'item 1',
                id: '0'
            },
            {
                name: 'item 2',
                id: '1'
            },
            {
                name: 'item 3',
                id: '2'
            }
        ];
        this.arrayItemsb = [
            {
                name: 'Array-b item 1',
                id: '10'
            },
            {
                name: 'Array-b item 2',
                id: '11'
            },
            {
                name: 'Array-b item 3',
                id: '12'
            }
        ]
    }

    render() {
        return html`
            <h1>Work Arrays</h1>
            <add-item @element-added="${this.addElement}"></add-item>
            <do-list id="listado" @element-removed="${this.removeElement}" .items="${this.itemsAdded}"></do-list>
            <hr>
            <button @click="${this.removeLastElement}">Remove last element</button>
            <button @click="${this.addElementsAtBegin}">Add elements from array b at begin</button>
        `;
    }

    
    addElement(e) { 
        let nameAdded = e.detail;   
        this.itemsAdded = [           
            ...this.itemsAdded,{
                name: nameAdded,
                id: this.itemsAdded.length
            }
        ]       
    }

    removeElement(e) {
        let indexArray = this.itemsAdded.findIndex((item) => {
            return item.id === e.detail
        });
        this.itemsAdded.splice(indexArray,1); 
        this.updateList();  
    }

    removeLastElement() {
        this.itemsAdded.splice(-1, 1);  
        this.updateList();
    }

    updateList() {        
        this.shadowRoot.getElementById('listado').requestUpdate();
    }

    addElementsAtBegin(e) {
        this.itemsAdded = this.arrayItemsb.concat(this.itemsAdded);
        this.updateList();
    }
}
customElements.define('work-array', WorkArray);