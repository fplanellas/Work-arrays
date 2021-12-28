import { LitElement, html, css } from 'lit-element';

export class DoItem extends LitElement {

    static get styles() {
        return css`
            :host {
                display: inline-block;
                margin: 15px 15px 10px 0;
                padding: 5px 10px;
                border:1px solid #4ae;
                border-radius: 10px;
                font-family: sans-serif;
                width: auto;
            }
            li {
                display: flex;
                align-items: center;              
            }
            span {    
                display: flex;
                align-items: center;
                margin-left: 15px;    
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
            path[fill="none"], .checked path[fill="none"] {
                fill: transparent;
            }
            path {
                fill: red;
            }
        `;
    }

    static get properties() {
        return {
            task: { type: Object }
        };
    }

    render() {
        return html`           
            <li>
                ${ this.task.name }
                <span  @click="${this.removeItem}">                  
                    ${ this.getIcon() }
                </span>               
            </li>           
        `;
    }

    getIcon(){
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        `;
    }

    removeItem() {
        this.dispatchEvent(new CustomEvent('element-removed', {
            bubbles: true,
            composed: true,
            detail: this.task.id
        }));
    }

}
customElements.define('do-item', DoItem);