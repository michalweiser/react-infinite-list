import { Component } from 'react';

export default class SearchField extends Component {
    onChange(ev) {
        this.props.onChange && this.props.onChange(ev.target.value);
    }

    onKeyPress(ev) {
        if (ev.key === "Escape") {
            this.props.onClear && this.props.onClear();
        } else if (ev.key === "Enter") {
            this.props.onSubmit && this.props.onSubmit(ev.target.value);
        }
    }

    render() {
        return (
            <input
                className="input-text searchfield"
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyPress.bind(this)}
                value={this.props.value}
                />
        );
    }
}

SearchField.displayName = 'SearchField';

SearchField.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.function,
    onClear: React.PropTypes.function,
    onSubmit: React.PropTypes.function
};
