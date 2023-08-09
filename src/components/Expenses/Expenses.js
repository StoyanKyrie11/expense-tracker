import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'

import './Expenses.css'
import { expenses } from '../../data/data';

const Expenses = () => {
    return (
        <Card className='expenses'>
            {expenses.map(({ id, title, amount, date }) => (
                <ExpenseItem key={id} title={title} amount={amount} date={date} />
            ))}
        </Card>
    )
}

export default Expenses
