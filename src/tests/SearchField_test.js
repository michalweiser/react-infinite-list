import React from 'react/addons';

import SearchField from '../components/SearchField.jsx';

let {
    renderIntoDocument,
    findRenderedDOMComponentWithTag,
    Simulate: {
        click,
        change,
        keyDown
    }
} = React.addons.TestUtils;

describe('SearchField', function() {
    var onChangeStub, onClearStub, onSubmitStub;
    var EMPTY_STRING = '';

    function renderSearchField(options = {}) {
        let searchField = renderIntoDocument(
            <SearchField
                value=''
                onChange={options.onChange}
                onClear={options.onClear}
                onSubmit={options.onSubmit}
            />
        );

        let searchFieldElement = findRenderedDOMComponentWithTag(searchField, 'input');

        return { searchField, searchFieldElement };
    }

    beforeEach(function() {
        onChangeStub = sinon.stub();
        onClearStub = sinon.stub();
        onSubmitStub = sinon.stub();
    });

    describe('With configured callbacks', function() {
        var searchFieldElement;

        beforeEach(function() {
            let renderedSearchField = renderSearchField({
                onChange: onChangeStub,
                onClear: onClearStub,
                onSubmit: onSubmitStub
            });

            searchFieldElement = renderedSearchField.searchFieldElement;
        });

        it('should call onChange when value changed', function() {
            const changedText = 'New text';
            change(searchFieldElement, {
                target: {
                    value: changedText
                }
            });

            expect(onChangeStub.calledWith(changedText)).to.be(true);
        });

        it('should call onSubmit when enter pressed', function() {
            keyDown(searchFieldElement, {
                key: 'Enter'
            });

            expect(onSubmitStub.calledWith(EMPTY_STRING)).to.be(true);
        });

        it('should call onClear when escape pressed', function() {
            keyDown(searchFieldElement, {
                key: 'Escape'
            });

            expect(onClearStub.calledOnce).to.be(true);
        });
    });

    it('should render correctly if on* functions not provided', function() {
        let { searchField, searchFieldElement } = renderSearchField();

        keyDown(searchFieldElement, {
            key: 'Enter'
        });

        keyDown(searchFieldElement, {
            key: 'Escape'
        });

        change(searchFieldElement, {
            target: {
                value: 'New text'
            }
        });

    });
});
