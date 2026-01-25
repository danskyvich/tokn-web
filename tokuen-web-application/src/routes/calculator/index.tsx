import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import { TextField } from '@mui/material'

export const Route = createFileRoute('/calculator/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
        <Header
            img='./../../../../favicon.png'
            text='TOKUEN'
            textColor=''
        />
        {/**Form */}
        <section className='flex flex-1 flex-col w-full h-full px-[20%] py-5 gap-5'>
            <p className='flex flex-1 text-4xl font-semibold'>Loan calculator</p>

            <div className='flex flex-1 flex-col w-full'>
                <p className='py-2'>Principal amount (amount to be loaned) in PHP</p>
                <TextField
                    placeholder='Enter the amount here...'
                />
            </div>
            <div className='flex flex-1 flex-col w-full'>
                <p className='py-2'>Interest rate (no %)</p>
                <TextField
                    placeholder='Enter the amount to be loaned (Principal amount) in PHP...'
                />
            </div>

            {/**Result boxes */}
            <div className='flex flex-1 w-full h-fit gap-5'>

                {/** Variables */}
                <div className='flex flex-1 flex-col w-[50%] h-full p-5 bg-black border-black border-2 rounded-xl shadow-xl text-white gap-5'>
                    <p className='flex flex-0 font-semibold text-2xl'>Variables</p>

                    <div className='flex flex-1 flex-col justify-center'>
                        <p className='font-semibold'>Adjusted amount</p>
                        <p>₱31,054</p>
                    </div>

                    <div className='flex flex-1 flex-col justify-center'>
                        <p className='font-semibold'>Interest rates</p>
                        <p>₱31,054</p>
                    </div>

                    <div className='flex flex-1 flex-col justify-center'>
                        <p className='font-semibold'>Payment</p>
                        <p>Installment or Month</p>
                    </div>
                </div>

                {/**EMI */}
                <div className='flex flex-1 flex-col w-[50%] h-full border-2 border-black bg-white text-black rounded-xl shadow-xl'>
                    <div className='flex flex-1 w-full h-fit p-5 items-center justify-center text-white font-semibold bg-black rounded-t-xl'>
                        <p>EMI results</p>
                    </div>

                    <div className='flex flex-1 w-full h-fit p-4 border-b'>
                        <p className='flex flex-1 w-[50%] justify-center font-semibold'>1 month</p>
                        <p className='flex flex-1 w-[50%] justify-center'>₱31,000.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit p-4 border-b'>
                        <p className='flex flex-1 w-[50%] justify-center font-semibold'>3 months</p>
                        <p className='flex flex-1 w-[50%] justify-center'>₱10,345.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit p-4 border-b'>
                        <p className='flex flex-1 w-[50%] justify-center font-semibold'>6 months</p>
                        <p className='flex flex-1 w-[50%] justify-center'>₱5,176.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit p-4 border-b'>
                        <p className='flex flex-1 w-[50%] justify-center font-semibold'>12 months</p>
                        <p className='flex flex-1 w-[50%] justify-center'>₱2,595.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit p-4 border-b'>
                        <p className='flex flex-1 w-[50%] justify-center font-semibold'>24 months</p>
                        <p className='flex flex-1 w-[50%] justify-center'>₱1,310.00</p>
                    </div>
                    <div className='flex flex-1 w-full h-fit p-4'>
                        <p className='flex flex-1 w-[50%] justify-center font-semibold'>36 months</p>
                        <p className='flex flex-1 w-[50%] justify-center'>₱912.00</p>
                    </div>
                </div>
            </div>

            <span className='flex-auto h-full'/>
        </section>
    </div>
}
