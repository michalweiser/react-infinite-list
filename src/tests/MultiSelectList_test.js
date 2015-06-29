import React from 'react/addons';

import MultiSelectList from '../components/MultiSelectList.jsx';

var TestUtils = React.addons.TestUtils;

describe('MultiSelectList', function() {
    var firstItem, secondItem;

    beforeEach(function() {
        firstItem = {
            title: 'First item'
        };
        secondItem = {
            title: 'Second item'
        };
    });

    describe('Selections', function() {
        var items, multiSelectList;

        beforeEach(function() {
            items = [firstItem, secondItem];
            multiSelectList = TestUtils.renderIntoDocument(
                <MultiSelectList
                    items={items}
                    height={100}
                    itemHeight={10}
                />
            );
        });

        it('List should maintain selection as items are clicked', function() {
            var listItems = TestUtils.scryRenderedDOMComponentsWithClass(multiSelectList, 'multi-select-list-item');

            React.addons.TestUtils.Simulate.click(listItems[0]);
            expect(multiSelectList.state.selectedItems).to.eql([firstItem]);
            React.addons.TestUtils.Simulate.click(listItems[1]);
            expect(multiSelectList.state.selectedItems).to.eql([firstItem, secondItem]);
        });

        it('should deselect previously selected item on second click', function() {
            var listItems = TestUtils.scryRenderedDOMComponentsWithClass(multiSelectList, 'multi-select-list-item');

            React.addons.TestUtils.Simulate.click(listItems[0]);
            expect(multiSelectList.state.selectedItems).to.eql([firstItem]);
            React.addons.TestUtils.Simulate.click(listItems[0]);
            expect(multiSelectList.state.selectedItems).to.eql([]);
        });

        it('should correctly handle "only" option', function() {
            var listItems = TestUtils.scryRenderedDOMComponentsWithClass(multiSelectList, 'multi-select-list-item');
            var listItemsOnlyLinks = TestUtils.scryRenderedDOMComponentsWithClass(multiSelectList, 'multi-select-list-item-only');

            React.addons.TestUtils.Simulate.click(listItems[0]);
            React.addons.TestUtils.Simulate.click(listItems[1]);
            expect(multiSelectList.state.selectedItems).to.eql([firstItem, secondItem]);

            React.addons.TestUtils.Simulate.click(listItemsOnlyLinks[0]);
            expect(multiSelectList.state.selectedItems).to.eql([firstItem]);
        });
    });
});
