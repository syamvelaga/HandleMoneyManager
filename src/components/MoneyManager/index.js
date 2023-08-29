import {Component} from 'react'
// import {v4} from 'uuid'

import {v4 as uuidv4} from 'uuid'

// import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    amountInput: '',
    title: '',
    optionEvent: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onChangeAmountInput = event => {
    // console.log(event.target.value)

    const inputValue = event.target.value

    this.setState({
      amountInput: inputValue,
    })
  }

  HandleOption = event => {
    this.setState({optionEvent: event.target.value})
  }

  handleTitle = event => {
    const input = event.target.value

    this.setState({
      title: input,
    })
  }

  onAddEvent = event => {
    event.preventDefault()

    const {amountInput, optionEvent, title} = this.state

    const newObject = {id: uuidv4(), title, amountInput, optionEvent}

    this.setState(prev => ({
      transactionList: [...prev.transactionList, newObject],
      amountInput: '',
      optionEvent: transactionTypeOptions[0].optionId,
      title: '',
    }))
  }

  //   removeList = id => {
  //     console.log(id)
  //   }

  getIncomeValue = () => {
    const {transactionList} = this.state

    const incomeList = transactionList.filter(
      transaction => transaction.optionEvent === 'INCOME',
    )

    const totalIncome = incomeList.reduce(
      (sum, amount) => sum + parseInt(amount.amountInput),
      0,
    )

    return totalIncome
  }

  getExpense = () => {
    const {transactionList} = this.state
    // console.log(transactionList)

    const expenseList = transactionList.filter(
      transaction => transaction.optionEvent === 'EXPENSES',
    )

    const expense = expenseList.reduce(
      (sum, amount) => sum + parseInt(amount.amountInput),
      0,
    )

    return expense
  }

  render() {
    const {amountInput, optionEvent, title, transactionList} = this.state

    const incomeValue = this.getIncomeValue()

    const expenseValue = this.getExpense()

    const totalValue = incomeValue - expenseValue

    // const removeEvent = this.removeList()

    console.log(transactionList)

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="header-content">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            incomeValue={incomeValue}
            totalValue={totalValue}
            expenseValue={expenseValue}
            optionEvent={optionEvent}
            amountInput={amountInput}
          />
          <div className="transaction-details">
            <form onSubmit={this.onAddEvent} className="transaction-form">
              <h1 className="transaction-header">Add Transaction</h1>
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.handleTitle}
                type="text"
                id="title"
                className="input"
                placeholder="TITLE"
              />
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />
              <label className="input-label" htmlFor="select">
                TYPE
              </label>
              <select
                onChange={this.HandleOption}
                id="select"
                className="input"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transactions-table-container">
                <div className="transactions-table">
                  <div className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </div>
                  <div>
                    <ul className="history-main">
                      {transactionList.map(each => (
                        <TransactionItem
                          //   removeList={removeList}
                          key={each.id}
                          each={each}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
