import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {
    /* We can execute basic JS expressions
        For Date objects --> we need to use toISOString() method
        Extract logic and create a helper constant, variable or method
        to handle that
        Components are split up into 2 separate ones - Expense date to handle the 
        time card and the rest of the content.
    */

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
