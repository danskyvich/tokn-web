import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import LoanContainer from '../../components/loan-container'

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

        <section className='flex flex-1 flex-col min-w-[50%] h-auto px-[20%] py-5 flex-wrap'>
            <p className='flex flex-1 text-4xl font-semibold w-full'>Your loans</p>

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
        </section>
    </div>
}
