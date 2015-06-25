import { Component } from 'react';
import SingleSelectListItem from './SingleSelectListItem';
import InfiniteList from './InfiniteList';

export default class SingleSelectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        };

        this.state.items = this.selectableItems();
    }

    selectableItems() {
        return this.props.items.map((item) => {
            return {
                source: item,
                onSelect: this.onSelect.bind(this),
                selected: (item === this.state.selectedItem)
            };
        });
    }

    onSelect(item) {
        this.setState({
            selectedItem: item
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
