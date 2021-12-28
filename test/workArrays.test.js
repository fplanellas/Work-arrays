import { WorkArray } from '../src/work-array';
import {fixture, html, expect} from '@open-wc/testing';

describe('WorkArray', () => {

    it('array has by default 3 elements', async () => {
        const el = await fixture(html`<work-array></work-array>`);
        let initialElement = el.itemsAdded.length;
        expect(initialElement).to.be.equal(3);
    });

    it('array has 1 element more and naming after addElement', async () => {//addElement
        const el = await fixture(html`<work-array></work-array>`);
        let initialElement = el.itemsAdded.length;  
        el.detail = 'item'; 
        el.addElement(el.detail);
        let elementAdded = el.itemsAdded.length;
        let nameAdded = el.detail;
        expect(initialElement +1).to.be.equal(elementAdded);
        expect(nameAdded).to.be.equal(el.detail);
    });

    it('item is deleted when clicking delete icon and check findIndex', async () => {//removeElement
        const el = await fixture(html`<work-array></work-array>`);
        el.detail = 1; //simulate clicking on the second element
        el.removeElement(el.detail);
        let elementRemoved = el.detail;
        expect(el.detail).to.be.equal(elementRemoved);
    });

    it('expect number sent in "detail" is the same as the array id', async () => {//findIndex
        const el = await fixture(html`<work-array></work-array>`);
        el.itemsAdded = [ { name: 'item 1', id: 0 }, { name: 'item 2',id: 1 },{name: 'item 3',id: 2 }];
        el.detail = 1; 
        el.removeElement(el.detail);
        let getIndex = el.itemsAdded[1].id;
        expect(el.detail).to.be.equal(getIndex);
    });

    it('last item is deleted', async () => {//removeLastElement
        const el = await fixture(html`<work-array></work-array>`);
        el.itemsAdded = [ { name: 'item 1', id: 0 }, { name: 'item 2',id: 1 },{name: 'item 3',id: 2 }];
        let lastItemRemoved = [ { name: 'item 1', id: 0 }, { name: 'item 2',id: 1 }];
        el.removeLastElement();
        expect(el.itemsAdded).to.deep.equal(lastItemRemoved);
    });

    it('when addElementsAtBegin expect put items from arrayItemsb at begin of  itemsAdded', async () => {//addElementsAtBegin
        const el = await fixture(html`<work-array></work-array>`);
        el.itemsAdded = [ { name: 'item 1', id: 0 }, { name: 'item 2',id: 1 }];
        el.arrayItemsb = [{name: 'Array-b item 1',id: 3},{name: 'Array-b item 2',id: 4}];
        el.addElementsAtBegin();
        expect(el.itemsAdded).to.deep.equal([{name: 'Array-b item 1',id: 3},{name: 'Array-b item 2',id: 4}, {name: 'item 1', id: 0}, {name: 'item 2',id: 1}]);
    });
});