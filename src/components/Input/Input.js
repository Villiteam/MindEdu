import React from 'react';
import './input.scss';

const Input = (props) => {
  return (
    <div className='input'>
      <label>{props.label}{props.required ? <span>*</span> : null}</label>
      <input
        onChange={props.onChange ? (e) => props.onChange(e) : null}
        value={props.value ? props.value : undefined}
        placeholder={props.placeholder ? props.placeholder : undefined}
      />
    </div>
  )
}

export default Input;