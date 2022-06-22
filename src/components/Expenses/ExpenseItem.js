import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

let ExpenseItem = props => {
  // let [title, setTitle] = useState(props.title);

  /*let clickHandler = () => {
    setTitle('Updated!');

  };*/

  return (
      <li>
          <Card className="expense-item">
              <ExpenseDate date={props.date} />
              <div className="expense-item__description">
                  <h2>{props.title}</h2>
                  <div className="expense-item__price">${props.amount}</div>
              </div>
          </Card>
      </li>

  );
};

export default ExpenseItem;

//<button onClick={clickHandler}>Change title</button>
