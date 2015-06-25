import React from 'react';
import SearchableList from '../SearchableList';
import InfiniteList from '../InfiniteList';
import InfiniteListItem from '../InfiniteListItem';
import SingleSelectList from '../SingleSelectList';
import SingleSelectListItem from '../SingleSelectListItem';
import MultiSelectList from '../MultiSelectList';
import MultiSelectListItem from '../MultiSelectListItem';

require('./styles/app.scss');

var items = [];
for (var i = 0; i < 500; i++) {
    items.push({
        id: i,
        title: 'item #' + i
    });
}

React.render(
    <div className='examples'>
        <div className='list-example'>
            <div>Infinite List</div>
            <InfiniteList
                items={items}
                height={150}
                itemHeight={20}
            />
        </div>
        <div className='list-example'>
            <div>Single Select List</div>
            <SingleSelectList
                items={items}
                height={150}
                itemHeight={20}
                listItemClass={SingleSelectListItem}
            />
        </div>
        <div className='list-example'>
            <div>Multi Select List</div>
            <MultiSelectList
                items={items}
                height={150}
                itemHeight={20}
                listItemClass={MultiSelectListItem}
            />
        </div>
        <div className='list-example'>
            <div>Searchable Infinite List</div>
            <SearchableList
                listClass={InfiniteList}
                items={items}
                height={150}
                itemHeight={20}
                listItemClass={InfiniteListItem}
            />
        </div>
        <div className='list-example'>
            <div>Searchable Single Select List</div>
            <SearchableList
                listClass={SingleSelectList}
                items={items}
                height={150}
                itemHeight={20}
                listItemClass={SingleSelectListItem}
            />
        </div>
        <div className='list-example'>
            <div>Searchable Multi Select List</div>
            <SearchableList
                listClass={MultiSelectList}
                items={items}
                height={150}
                itemHeight={20}
                listItemClass={MultiSelectListItem}
            />
        </div>
    </div>,
    document.getElementById('app')
);
