import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '../../components/header'
import LoanContainer from '../../components/loan-container'
import AddIcon from '@mui/icons-material/Add';

export const Route = createFileRoute('/loans/loan-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
        <Header
            img='./../../../../favicon.png'
            text='TOKUEN'
            textColor=''
        />

        <section className='flex flex-1 flex-col min-w-[50%] h-auto px-[20%] py-5 flex-wrap gap-15'>

            {/**Header */}
            <p className='flex flex-1 text-4xl font-semibold w-full h-fit'>Your loans</p>

            {/**Loans */}
            <div className='flex flex-1 w-full h-fit gap-5'>
                <LoanContainer
                    url=''
                    amount='₱12,000.00'
                    emi='12-months EMI'
                    interest='1.25% interest rate'
                />
                <LoanContainer
                    url=''
                    amount='₱2,500.00'
                    emi='6-months EMI'
                    interest='1.25% interest rate'
                />
                <LoanContainer
                    url=''
                    amount='₱4,000.00'
                    emi='1-month EMI'
                    interest='1.25% interest rate'
                />
            </div>

            {/**Bill details and bill payment containers */}
            <div className='flex flex-1 w-full h-fit gap-5'>

                {/** Bill payment */}
                <div className='flex flex-1 flex-col w-full bg-black border-2 border-black rounded-xl p-5 text-white'>
                    <p className='flex-1 text-xl font-semibold'>Your bill details</p>
                    <div className='flex flex-1 w-full h-fit'>
                        <p className='flex-3'>Monthly total amount (Principal + interest)</p>
                        <p className='flex-1'>P31,524.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit'>
                        <p className='flex-3'>Accumulated Interest</p>
                        <p className='flex-1'>P31,524.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit'>
                        <p className='flex-3'>Platform fee</p>
                        <p className='flex-1'>P31,524.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit'>
                        <p className='flex-3'>Adjustments</p>
                        <p className='flex-1'>P31,524.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit font-semibold text-xl'>
                        <p className='flex-3'>Monthly due</p>
                        <p className='flex-1'>P31,524.00</p>
                    </div>
                </div>

                {/**Bill payment */}
                <div className='flex flex-1 flex-col w-[30%] border-black border-2 rounded-2xl'>
                    <div className='flex flex-1 flex-col p-5'>
                        <p className='flex-1 text-xl font-semibold'>Bill payment</p>
                        <p>Pay your bills on time to increase your credit limit. Make sure to configure your payment method before making a transaction.</p>
                        <br/>
                        <p>Late payments will incur a late payment fee. If concurrent monthly dues were not settled, your late payment fees will accumulate. </p>
                        
                    </div>

                    <span className='flex-auto h-full'/>
                    
                    <Link to='/pay-loan' className='flex flex-1 w-full h-fit gap-2 border-t-2 border-black px-5 py-2 justify-center items-center
                    hover:bg-stone-300 hover:rounded-b-xl active:text-white active:bg-black active:rounded-b-xl'>
                        <AddIcon sx={{fontSize: '3rem'}}/>
                        <p>Pay your monthly bill</p>
                    </Link>
                </div>
            </div>
        </section>

        <span className='flex-auto h-full'/>
    </div>
}
