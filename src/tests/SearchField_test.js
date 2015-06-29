import React from 'react/addons';

import SearchField from '../components/SearchField.jsx';

var TestUtils = React.addons.TestUtils;

describe('SearchField', function() {
    var onChangeStub, onClearStub, onSubmitStub;
    var EMPTY_STRING = '';

    beforeEach(function() {
        onChangeStub = sinon.stub();
        onClearStub = sinon.stub();
        onSubmitStub = sinon.stub();
    });

    it('should call onChange when value changed', function() {
        var searchField = TestUtils.renderIntoDocument(
            <SearchField
                value=""
                onChange={onChangeStub}
                onClear={onClearStub}
                onSubmit={onSubmitStub}
            />
        );

        var searchFieldElement = TestUtils.findRenderedDOMComponentWithTag(searchField, 'input');
        var changedText = 'New text';

        React.addons.TestUtils.Simulate.change(searchFieldElement, {
            target: {
                value: changedText
            }
        });

        expect(onChangeStub.calledWith(changedText)).to.be(true);
    });

    it('should call onSubmit when enter pressed', function() {
        var searchField = TestUtils.renderIntoDocument(
            <SearchField
                value=""
                onChange={onChangeStub}
                onClear={onClearStub}
                onSubmit={onSubmitStub}
            />
        );

        var searchFieldElement = TestUtils.findRenderedDOMComponentWithTag(searchField, 'input');

        React.addons.TestUtils.Simulate.keyDown(searchFieldElement, {
            key: 'Enter'
        });

        expect(onSubmitStub.calledWith(EMPTY_STRING)).to.be(true);
    });

    it('should call onClear when escape pressed', function() {
        var searchField = TestUtils.renderIntoDocument(
            <SearchField
                value=""
                onChange={onChangeStub}
                onClear={onClearStub}
                onSubmit={onSubmitStub}
            />
        );

        var searchFieldElement = TestUtils.findRenderedDOMComponentWithTag(searchField, 'input');

        React.addons.TestUtils.Simulate.keyDown(searchFieldElement, {
            key: 'Escape'
        });

        expect(onClearStub.calledOnce).to.be(true);
    });

    it('should render correctly if on* functions not provided', function() {
        var searchField = TestUtils.renderIntoDocument(
            <SearchField value=""/>
        );

        var searchFieldElement = TestUtils.findRenderedDOMComponentWithTag(searchField, 'input');

        React.addons.TestUtils.Simulate.keyDown(searchFieldElement, {
            key: 'Enter'
        });

        React.addons.TestUtils.Simulate.keyDown(searchFieldElement, {
            key: 'Escape'
        });

        React.addons.TestUtils.Simulate.change(searchFieldElement, {
            target: {
                value: 'New text'
            }
        });

    });
});
