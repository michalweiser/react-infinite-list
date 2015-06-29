import React from 'react';

export default class InfiniteListItem extends React.Component {
    render() {
        return (
            <div className="infinite-list-item">{this.props.title}</div>
        );
    }
}

InfiniteListItem.propTypes = {
    title:  React.PropTypes.string.isRequired
};
