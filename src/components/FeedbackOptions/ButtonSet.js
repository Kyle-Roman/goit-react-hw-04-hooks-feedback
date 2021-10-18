import React from "react";
import s from './ButtonSet.module.css';
import PropTypes from 'prop-types';

export default function ButtonSet({options, onClick}) {
    return <div>
        {options.map(option => (
      <button
        key={option}
        type="button"
        className={s.button}        
        onClick={() => {onClick(option)}}
        >{option}
      </button>
    ))}
    </div>
}

ButtonSet.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};