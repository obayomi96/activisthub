import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({
  handleChange,
  type,
  name,
  value,
  placeholder,
  id,
  style,
  label,
  className
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        style={style}
        className={className}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
        label={label}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    outline: PropTypes.string,
  }),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  children: null,
  style: null,
  type: '',
  disabled: false,
  className: '',
  id: '',
};

export default Input;

