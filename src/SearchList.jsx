import { Component } from 'react';
import InfiniteList from './InfiniteList';
import { startsWith } from 'lodash';

export default class SearchList extends Component {
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
        return (
            <div>
                <input
                    ref="searchInput"
                    className="search"
                    onChange={this.onSearchChange.bind(this)}
                    value={this.state.search}
                    />
                <InfiniteList
                    {...this.props}
                    items={this.state.items}
                    height={this.props.height}
                    itemHeight={this.props.itemHeight}
                    />
            </div>
        );
    }
}

SearchList.displayName = "SearchList";

SearchList.propTypes = {
    items: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired,
    itemHeight: React.PropTypes.number.isRequired
};
