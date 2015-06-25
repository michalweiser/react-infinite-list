import { Component } from 'react';
import SingleSelectListItem from './SingleSelectListItem';
import InfiniteList from './InfiniteList';

export default class SingleSelectList extends Component {
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
            <InfiniteList
                {...this.props}
                items={this.selectableItems()}
                listItemClass={SingleSelectListItem}
                />
        );
    }
}

SingleSelectList.displayName = 'SingleSelectList';

SingleSelectList.propTypes = {
    items: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired,
    itemHeight: React.PropTypes.number.isRequired,
    listItemClass: React.PropTypes.instanceOf(SingleSelectListItem)
};
