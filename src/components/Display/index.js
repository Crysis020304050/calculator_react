import React from 'react';
import styles from './Display.module.css';

function Display (props) {
    return <div className={styles.display}>{props.children}</div>
}

export default Display;