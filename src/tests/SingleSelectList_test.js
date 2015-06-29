import React from 'react/addons';

import SingleSelectList from '../components/SingleSelectList.jsx';

var TestUtils = React.addons.TestUtils;

describe('SingleSelectList', function() {
    var onSelectStub, item;

    beforeEach(function() {
        onSelectStub = sinon.stub();
        item = {
            title: 'First item'
        };
    });

    it('should call onSelect when item clicked', function() {
        var items = [item];

        var singleSelectList = TestUtils.renderIntoDocument(
            <SingleSelectList
                items={items}
                height={100}
                itemHeight={10}
                onSelect={onSelectStub}
            />
        );

        var listItems = TestUtils.scryRenderedDOMComponentsWithClass(singleSelectList, 'simple-select-list-item');
        var firstItemElement = listItems[0];

        React.addons.TestUtils.Simulate.click(firstItemElement);
        expect(onSelectStub.calledWith(item)).to.be(true);
    });

});
