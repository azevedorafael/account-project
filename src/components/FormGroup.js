import React from 'react';
import PropTypes from "prop-types";

const FormGroup = ({ id, name, label, type, defaultValue, required, placeholder, disabled, onChange, onBlur, value, maxlength }) => (
    <div className='form-group'>
        <label
            htmlFor={name}>
            {label}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            className='form-control'
            defaultValue={defaultValue}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            maxLength={maxlength}
            onChange={onChange}
        />
        <div class='invalid-feedback'></div>
    </div>
)

Text.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

export default FormGroup;