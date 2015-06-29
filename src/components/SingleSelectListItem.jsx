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
            'infinite-list-item': true,
            'is-selected': this.props.selected
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

SingleSelectListItem.propTypes = {
    source: React.PropTypes.object.isRequired,
    selected: React.PropTypes.bool.isRequired,
    onSelect: React.PropTypes.func.isRequired
};
