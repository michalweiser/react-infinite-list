import React from 'react';
import SimpleSelectList, { SimpleSelectListItem } from '../SimpleSelectList';

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
    <SimpleSelectList
        items={items}
        height={150}
        itemHeight={20}
        listItemClass={SimpleSelectListItem}
    />,
    document.getElementById('app')
);
