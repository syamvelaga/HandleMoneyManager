import './index.css'

const MoneyDetails = props => {
  const {totalValue, incomeValue, expenseValue} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p data-testid="balanceAmount" className="details-money">
            Rs {totalValue}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p data-testid="incomeAmount" className="details-money">
            Rs {incomeValue}
          </p>
        </div>
      </div>
      <div data-testid="delete" className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="details-money">
            Rs {expenseValue}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
