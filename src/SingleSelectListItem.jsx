import { Component } from 'react';
import cx from 'classnames';

export class SingleSelectListItem extends Component {
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

SingleSelectListItem.displayName = 'SingleSelectListItem';
