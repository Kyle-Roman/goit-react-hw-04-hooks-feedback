import React from "react";
import s from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function Stats({ onGood, onNeutral, onBad, onTotal, onPositivePercentage }) {
    const totalBtnClasses = [s.listItem, s.total]
    return <div>
      <ul className={s.stats}>
        <li className={s.listItem}>
          <p className={s.label}>Good {onGood}</p>
        </li>
        <li className={s.listItem}>
          <p className={s.label}>Neutral {onNeutral}</p>
        </li>
        <li className={s.listItem}>
          <p className={s.label}>Bad {onBad}</p>
        </li>
        <li className={s.listItem}>
          <p className={totalBtnClasses.join(' ')}>Total {onTotal}</p>
        </li>
        <li className={s.listItem}>
          <p className={s.label}>Positive feedback 
            <span className={s.percentage}> {onPositivePercentage}%</span>
          </p>
        </li>
      </ul>
    </div>
}

Stats.propTypes = {
  onGood: PropTypes.number,
  onNeutral: PropTypes.number,
  onBad: PropTypes.number,
  onTotal: PropTypes.number,
  onPositivePercentage: PropTypes.number,
};