import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
    state = {
        isChecked: false,
    };

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => ({
            isChecked: !isChecked,
        }));

        handleCheckboxChange(label);
    };

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <div className="radio">
                <label>
                    <input
                        name="foo"
                        type="radio"
                        value={label}
                        onChange={this.toggleCheckboxChange}
                    />

                    <p>{label}</p>
                </label>
            </div>
        );
    }
}

export default Checkbox;
