import { Component } from 'react';

export default class SearchField extends Component {
    onChange(ev) {
        this.props.onChange(ev.target.value);
    }

    render() {
        return (
            <input
                className="search-field"
                onChange={this.onChange.bind(this)}
                value={this.props.value}
                />
        );
    }
}

SearchField.displayName = 'SearchField';
