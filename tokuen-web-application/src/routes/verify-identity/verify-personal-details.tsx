import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import FilledButton from '../../components/button'

export const Route = createFileRoute(
  '/verify-identity/verify-personal-details',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
      img='./../../../../favicon.png'
      text='TOKUEN'
      textColor=''
    />

    {/**Content changes based on chosen government id */}
    <section className='flex flex-1 flex-col w-full h-full px-[20%] py-5 gap-5'>
      <p className='flex flex-1 text-4xl font-semibold'>Verify your personal details</p>
      
      <div className='flex flex-1 flex-col w-full h-fit p-6 border-black border-2 rounded-xl gap-15'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-2'><p className='flex-1 text-2xl font-semibold'>Core Information</p></div>
          <div className='flex-1 font-semibold'><p>Full name</p></div>
          <div className='flex-1'><p>JUAN DELA CRUZ</p></div>
          <div className='flex-1 font-semibold'><p>Email address</p></div>
          <div className='flex-1'><p>juandelacruz@gmail.com</p></div>
          <div className='flex-1 font-semibold'><p>Date of birth (MM/DD/YYYY)</p></div>
          <div className='flex-1'><p>January 01, 2002</p></div>
          <div className='flex-1 font-semibold'><p>Phone number</p></div>
          <div className='flex-1'><p>(+63) 928 378 2089</p></div>
          <div className='flex-1 font-semibold'><p>Sex</p></div>
          <div className='flex-1'><p>Male</p></div>
          <div className='flex-1 font-semibold'><p>ID num</p></div>
          <div className='flex-1'><p>1234-5678-9101-1213</p></div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-2'><p className='flex-1 text-2xl font-semibold'>Other Information</p></div>
          <div className='flex-1 font-semibold'><p>Street address</p></div>
          <div className='flex-1'><p>112 Mahogany Street, Katipunan Avenue</p></div>
          <div className='flex-1 font-semibold'><p>City, State, and Country</p></div>
          <div className='flex-1'><p>Quezon City, Metro Manila, PH</p></div>
          <div className='flex-1 font-semibold'><p>Marital status</p></div>
          <div className='flex-1'><p>Single</p></div>
        </div>
      </div>

      <span className='flex-auto h-full'/>

      <FilledButton
        buttonText='Confirm'
        effects='black-button-outlined'
        textSize=''
        url='/verify-identity/identity-verified'
      />
    </section>
  </div>
}
