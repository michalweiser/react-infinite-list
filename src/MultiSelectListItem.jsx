import { Component } from 'react';
import cx from 'classnames';

export default class MultiSelectListItem extends Component {
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
            'select-list-item': true,
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

MultiSelectListItem.displayName = 'MultiSelectListItem';
