import { Component } from 'react';
import InfiniteList from './InfiniteList';
import MultiSelectList from './MultiSelectList';
import SingleSelectList from './SingleSelectList';
import { startsWith } from 'lodash';

export default class SearchableList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsUnfiltered: props.items,
            items: props.items,
            searched: ''
        };
    }

    componentDidMount() {
       this.refs.searchInput.getDOMNode().focus();
    }

    onSearchChange(ev) {
        const searched = ev.target.value;

        const items = this.state.itemsUnfiltered.filter((item) => {
            return startsWith(item.title.toLowerCase(), searched.toLowerCase());
        })

        this.setState({
            items: items,
            searched: searched
        });
    }

    render() {
        const ListComponent = this.props.listClass;

        return (
            <div className="searchable-list">
                <input
                    ref="searchInput"
                    className="search"
                    onChange={this.onSearchChange.bind(this)}
                    value={this.state.search}
                    />
                <ListComponent
                    {...this.props}
                    items={this.state.items}
                    />
            </div>
        );
    }
}

SearchableList.displayName = "SearchableList";

SearchableList.propTypes = {
    items: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired,
    itemHeight: React.PropTypes.number.isRequired,
    listClass: React.PropTypes.oneOfType([
        React.PropTypes.instanceOf(InfiniteList),
        React.PropTypes.instanceOf(MultiSelectList),
        React.PropTypes.instanceOf(SingleSelectList)
    ]).isRequired
};
