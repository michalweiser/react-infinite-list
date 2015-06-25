import { Component } from 'react';
import InfiniteList from './InfiniteList';
import cx from 'classnames';
import {
    includes,
    remove
} from 'lodash';

export class MultiSelectListItem extends Component {
    handleSelect() {
        this.props.item.onSelect(this.props.item);
    }

    handleOnly(ev) {
        ev.stopPropagation();
        this.props.item.onOnly(this.props.item);
    }

    getClassnames() {
        return cx({
            'multi-select-list-item': true,
            'selected': this.props.item.selected
        });
    }

    render() {
        return (
            <div
                className={this.getClassnames()}
                onClick={this.handleSelect.bind(this)}>
            {this.props.title}
            <span onClick={this.handleOnly.bind(this)}>only</span>
            </div>
        );
    }
}

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
            item.onSelect = this.onSelect.bind(this);
            item.onOnly = this.onOnly.bind(this);
            item.selected = this.isSelected(item);
            return item;
        });
    }

    render() {
        return (
            <InfiniteList
                {...this.props}
                items={this.selectableItems()}
                height={this.props.height}
                itemHeight={this.props.itemHeight}
                listItemClass={MultiSelectListItem}
                />
        );
    }
}

MultiSelectList.displayName = "MultiSelectList";

MultiSelectList.propTypes = {
    items: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired,
    itemHeight: React.PropTypes.number.isRequired,
    listItemClass: React.PropTypes.instanceOf(MultiSelectListItem)
};
