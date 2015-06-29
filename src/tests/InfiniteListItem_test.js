import React from 'react/addons';

import InfiniteListItem from '../components/InfiniteListItem.jsx';

var TestUtils = React.addons.TestUtils;

describe('InfiniteListItem', function() {
    it('should render simple list item with title', function() {
        var listItem = TestUtils.renderIntoDocument(
            <InfiniteListItem title="custom value" />
        );

        var listItemElement = TestUtils.findRenderedDOMComponentWithTag(listItem, 'div');

        expect(listItemElement.getDOMNode().textContent).to.equal('custom value');
    });
});
