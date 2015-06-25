import { Component } from 'react';
import cx from 'classnames';

export default class SingleSelectListItem extends Component {
    handleSelect() {
        this.props.onSelect(this.props.source);
    }

    getClassnames() {
        return cx({
            'simple-select-list-item': true,
            'select-list-item': true,
            'selected': this.props.selected
        });
    }

    render() {
        return (
            <div
                className={this.getClassnames()}
                onClick={this.handleSelect.bind(this)}>
            {this.props.source.title}
            </div>
        );
    }
}

SingleSelectListItem.displayName = 'SingleSelectListItem';
