import { Component } from 'react';
import cx from 'classnames';

export default class MultiSelectListItem extends Component {
    handleSelect() {
        this.props.onSelect(this.props.source);
    }

    handleOnly(ev) {
        ev.stopPropagation();
        this.props.onOnly(this.props.source);
    }

    getClassnames() {
        return cx({
            'multi-select-list-item': true,
            'select-list-item': true,
            'infinite-list-item': true,
            'is-selected': this.props.selected
        });
    }

    selectOnlyThisOne() {
        return this.handleOnly ? (
            <span
                className="multi-select-list-item-only"
                onClick={this.handleOnly.bind(this)}>
                only
            </span>
        ) : false;
    }

    render() {
        return (
            <div
                className={this.getClassnames()}
                onClick={this.handleSelect.bind(this)}>
            {this.props.source.title}
            {this.selectOnlyThisOne()}
            </div>
        );
    }
}

MultiSelectListItem.displayName = 'MultiSelectListItem';

MultiSelectListItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onOnly: React.PropTypes.func
};
