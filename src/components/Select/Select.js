import React, { useState } from 'react';
import './select.scss';

const Select = (props) => {


    const [showDropdown, setshowDropdown] = useState(false)

    const handleSelectOption = (item) => {
        if (props.onClickOption) {
            props.onClickOption(item)
            setshowDropdown(false)
        }
    }

    return (
        <div className='dropdown'>
            <p>{props.label}<span>{props.required ? '*' : ''}</span></p>
            <div className='dropdown-toggle' onClick={() => setshowDropdown(!showDropdown)}>
                {props.value.name}
            </div>

            <div className={`dropdown-menu ${showDropdown ? 'active' : ''}`}>
                {
                    props.option.map((item, index) => (
                        <div className='dropdown-menu__item' key={index}
                            onClick={() => handleSelectOption(item)}
                        >
                            {item.name}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Select