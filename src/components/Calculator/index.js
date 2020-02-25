import React, { Component } from 'react';
import Button from '../Button';
import classNames from 'classnames';
import Display from "../Display";
import styles from './Calculator.module.css';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      operand: null,
      operator: null,
      result: ''
    };
    this.bahavior = null;
  }

  setOperator = () => {

  };

  onEqualClickHandler = () => {

  };

  render () {
    return (

      <div className={styles.container}>
        <Display>RESULT</Display>
        <table className={styles.controls}>
          <tr>
            <td className={styles.operator}>+</td>
            <td className={styles.operator}>-</td>
            <td className={styles.operator}>x</td>
            <td className={styles.operator}>/</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td rowSpan={4} className={styles.equal}>=</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>

          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>6</td>
            <td>.</td>
            <td>C</td>
          </tr>
        </table>

      </div>


    );
  }

}

export default Calculator;