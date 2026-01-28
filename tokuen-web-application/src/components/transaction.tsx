import { TransactionItem } from "./transaction-list";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';

{/**Components list */}



const Transaction = () => {
    return <div className='flex flex-1 flex-col w-full h-fit border-2 border-black rounded-xl shadow-2xl'>

        {/**Transaction header */}
        <div className='flex flex-1 w-full h-fit py-2 items-center '>
            <p className='flex-0 text-xl font-semibold p-5 items-center justify-center'>Transactions</p> 
            <KeyboardArrowRightIcon sx={{fontSize: '3rem'}}/>       
        </div>

        {/**Header labels */}
        <div className='flex flex-1 w-full h-fit py-2 border-b-2 border-black'>
            <p className='flex flex-1 justify-center font-semibold'>Type</p>
            <p className='flex flex-1 justify-center font-semibold'>Amount</p>
            <p className='flex flex-1 justify-center font-semibold'>Date</p>
        </div>

        <div className='flex flex-1 flex-col w-full h-fit p-3'>
            <TransactionItem
                icon={<CreditCardIcon sx={{fontSize: '2.5rem'}}/>}
                type='Loan payment'
                subtype='2nd payment'
                date='Nov 12, 2024'
                amount='Php 10,000.00'
            />
            <TransactionItem
                icon={<CreditCardIcon sx={{fontSize: '2.5rem'}}/>}
                type='Loan payment'
                subtype='2nd payment'
                date='Nov 12, 2024'
                amount='Php 10,000.00'
            />
            <TransactionItem
                icon={<CreditCardIcon sx={{fontSize: '2.5rem'}}/>}
                type='Loan payment'
                subtype='2nd payment'
                date='Nov 12, 2024'
                amount='Php 10,000.00'
            />
            <TransactionItem
                icon={<CreditCardIcon sx={{fontSize: '2.5rem'}}/>}
                type='Loan payment'
                subtype='2nd payment'
                date='Nov 12, 2024'
                amount='Php 10,000.00'
            />
            <TransactionItem
                icon={<CreditCardIcon sx={{fontSize: '2.5rem'}}/>}
                type='Loan payment'
                subtype='2nd payment'
                date='Nov 12, 2024'
                amount='Php 10,000.00'
            />
            <TransactionItem
                icon={<CreditCardIcon sx={{fontSize: '2.5rem'}}/>}
                type='Loan payment'
                subtype='2nd payment'
                date='Nov 12, 2024'
                amount='Php 10,000.00'
            />
        </div>
        
    </div>
}

export default Transaction;