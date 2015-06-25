import { Component } from 'react';
import InfiniteList from './InfiniteList';
import cx from 'classnames';

export class SimpleSelectListItem extends Component {
    handleSelect() {
        this.props.item.onSelect(this.props.item);
    }

    getClassnames() {
        return cx({
            'simple-select-list-item': true,
            'selected': this.props.item.selected
        });
    }

    render() {
        return (
            <div
                className={this.getClassnames()}
                onClick={this.handleSelect.bind(this)}>
            {this.props.title}
            </div>
        );
    }
}

SimpleSelectListItem.displayName = "SimpleSelectListItem";

export default class SimpleSelectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        };
    }

    onSelect(item) {
        this.setState({
            selectedItem: item
        });
    }

    selectableItems() {
        return this.props.items.map((item) => {
            item.onSelect = this.onSelect.bind(this);
            item.selected = (item === this.state.selectedItem);
            return item;
        });
    }

    render() {
        return (
            <div>
                <InfiniteList
                    {...this.props}
                    items={this.selectableItems()}
                    height={this.props.height}
                    itemHeight={this.props.itemHeight}
                    listItemClass={SimpleSelectListItem}
                    />
            </div>
        );
    }
}

SimpleSelectList.displayName = "SimpleSelectList";

SimpleSelectList.propTypes = {
    items: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired,
    itemHeight: React.PropTypes.number.isRequired,
    listItemClass: React.PropTypes.instanceOf(SimpleSelectListItem)
};
