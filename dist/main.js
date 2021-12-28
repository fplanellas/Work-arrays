(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,t,i){"use strict";i.r(t);var s=i(0);customElements.define("do-item",class extends s.a{static get styles(){return s.b`
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
        `}static get properties(){return{task:{type:Object}}}render(){return s.c`           
            <li>
                ${this.task.name}
                <span  @click="${this.removeItem}">                  
                    ${this.getIcon()}
                </span>               
            </li>           
        `}getIcon(){return s.c`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        `}removeItem(){this.dispatchEvent(new CustomEvent("element-removed",{bubbles:!0,composed:!0,detail:this.task.id}))}});customElements.define("do-list",class extends s.a{static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[]}render(){return s.c`
         <ul>
        ${this.items.map(e=>s.c`<do-item .task=${e}></do-item>`)}
        </ul>
        `}});i(1);customElements.define("add-item",class extends s.a{static get properties(){return{value:{type:String}}}constructor(){super(),this.value=""}render(){return s.c`
            <dile-input
                label="New element"
                value="${this.value}"
                placeholder="Add element & press enter"
                @enter-pressed="${this.createItem}"
                @input="${e=>this.value=e.target.value}"
            ></dile-input>
        `}createItem(e){this.dispatchEvent(new CustomEvent("element-added",{detail:e.target.value?e.target.value:"item"})),this.value=""}});customElements.define("work-array",class extends s.a{static get styles(){return s.b`
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
        `}static get properties(){return{itemsAdded:{type:Array},arrayItemsb:{type:Array}}}constructor(){super(),this.itemsAdded=[{name:"item 1",id:"0"},{name:"item 2",id:"1"},{name:"item 3",id:"2"}],this.arrayItemsb=[{name:"Array-b item 1",id:"10"},{name:"Array-b item 2",id:"11"},{name:"Array-b item 3",id:"12"}]}render(){return s.c`
            <h1>Work Arrays</h1>
            <add-item @element-added="${this.addElement}"></add-item>
            <do-list id="listado" @element-removed="${this.removeElement}" .items="${this.itemsAdded}"></do-list>
            <hr>
            <button @click="${this.removeLastElement}">Remove last element</button>
            <button @click="${this.addElementsAtBegin}">Add elements from array b at begin</button>
        `}addElement(e){let t=e.detail;this.itemsAdded=[...this.itemsAdded,{name:t,id:this.itemsAdded.length}]}removeElement(e){let t=this.itemsAdded.findIndex(t=>t.id===e.detail);this.itemsAdded.splice(t,1),this.updateList()}removeLastElement(){this.itemsAdded.splice(-1,1),this.updateList()}updateList(){this.shadowRoot.getElementById("listado").requestUpdate()}addElementsAtBegin(e){this.itemsAdded=this.arrayItemsb.concat(this.itemsAdded),this.updateList()}})}},[[2,1,2]]]);