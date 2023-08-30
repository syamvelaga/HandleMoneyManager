// Write your code here

// import {Component} from 'react'

import './index.css'

// import React from 'react'

export default function TransactionItem(props) {
  const {each, removeList} = props
  const {id, amountInput, title, optionEvent} = each

  //   console.log(each)

  const handlerDelete = () => {
    removeList(id, optionEvent)
  }

  return (
    <li className="historyContainer">
      <p className="transaction">{title}</p>
      <p className="transaction">Rs {amountInput}</p>
      <p className="transaction">
        {optionEvent === 'INCOME' ? 'Income' : 'Expenses'}
      </p>
      <button
        data-testid="delete"
        onClick={handlerDelete}
        type="button"
        className="delete-div"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
