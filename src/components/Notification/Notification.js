import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message = ''}) {
    return <p className={s.message}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};