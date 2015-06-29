import { Component } from 'react';
import {
    includes,
    remove
} from 'lodash';
import MultiSelectListItem from './MultiSelectListItem';
import InfiniteList from './InfiniteList';

export default class MultiSelectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: []
        };
    }

    onSelect(item) {
        let items = this.state.selectedItems.slice();

        if (this.isSelected(item)) {
            remove(items, item);
        } else {
            items.push(item);
        }

        this.setState({
            selectedItems: items
        });
    }

    onOnly(item) {
        this.setState({
            selectedItems: [item]
        });
    }

    isSelected(item) {
        return includes(this.state.selectedItems, item);
    }

    selectableItems() {
        return this.props.items.map((item) => {
            return {
                source: item,
                onSelect: this.onSelect.bind(this),
                onOnly: this.onOnly.bind(this),
                selected: this.isSelected(item)
            };
        });
    }

    render() {
        return (
            <InfiniteList
                {...this.props}
                items={this.selectableItems()}
                listItemClass={MultiSelectListItem}
                />
        );
    }
}

MultiSelectList.displayName = 'MultiSelectList';

MultiSelectList.propTypes = {
    items: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired,
    itemHeight: React.PropTypes.number.isRequired,
    listItemClass: React.PropTypes.instanceOf(MultiSelectListItem)
};
