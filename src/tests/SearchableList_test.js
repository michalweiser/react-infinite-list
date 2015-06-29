import React from 'react/addons';

import SearchableList from '../components/SearchableList.jsx';
import InfiniteList from '../components/InfiniteList.jsx';

var TestUtils = React.addons.TestUtils;

describe('SearchableList', function() {
    var firstItem, secondItem, items, searchableList;
    var simulateSearch = function(element, text) {
        React.addons.TestUtils.Simulate.change(element, {
            target: {
                value: text
            }
        });
    };

    beforeEach(function() {
        firstItem = {
            title: 'First item'
        };
        secondItem = {
            title: 'Second item'
        };

        items = [firstItem, secondItem];
        searchableList = TestUtils.renderIntoDocument(
            <SearchableList
                items={items}
                height={100}
                itemHeight={10}
                listClass={InfiniteList}
            />
        );
    });

    it('Searchfield input should filter items correctly', function() {
        var searchFieldElement = TestUtils.findRenderedDOMComponentWithTag(searchableList, 'input');

        expect(searchableList.state.items).to.eql([firstItem, secondItem]);

        simulateSearch(searchFieldElement, 'First');
        expect(searchableList.state.items).to.eql([firstItem]);

        simulateSearch(searchFieldElement, '');
        expect(searchableList.state.items).to.eql([firstItem, secondItem]);
    });
});
