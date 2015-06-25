import React from 'react';
import MultiSelectList, { MultiSelectListItem } from '../MultiSelectList';

//var SimpleSelectList = require('../SimpleSelectList.jsx');

require('./styles/app.scss');

var items = [];
for (var i = 0; i < 500; i++) {
    items.push({
        id: i,
        title: 'item #' + i
    });
}

const InfiniteListItem = class extends React.Component {
    render() {
        return (
            <div className="infinite-list-item">{this.props.title}</div>
        );
    }
};

React.render(
    <MultiSelectList
        items={items}
        height={150}
        itemHeight={20}
        listItemClass={MultiSelectListItem}
    />,
    document.getElementById('app')
);
