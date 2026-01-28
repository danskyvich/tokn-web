import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import FilledButton from '../../components/button'

export const Route = createFileRoute('/verify-identity/id-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
        img='./../../../../favicon.png'
        text='TOKUEN'
        textColor=''
    />

    <section className='flex flex-1 flex-col w-full h-fit px-[20%] py-5'>
        <p className='flex-1 text-4xl font-semibold'>ID Type</p>
        
        <div className='flex flex-1 flex-col w-full h-fit my-4'>
            <img src='./../../../../resources/national-id.png' alt='id-sample'/>
            <p className='flex-1 text-xs italic '>*Sample image only</p>
        </div>

        <div className='flex flex-1 flex-col bg-black text-white border-black border-2 rounded-xl'>
          <div className='grid grid-cols-10 gap-4 px-[5%] py-10'>
            <div className='flex-1 text-center text-black font-semibold px-[30%] '><p className='bg-white border-white rounded-[50%]'>1</p></div>
            <div className='col-span-9'><p >The Full Name, Birthdate, and Address must be visible and clear.</p ></div>
            <div className='flex-1 text-center text-black font-semibold px-[30%]'><p className='bg-white border-white rounded-[50%]'>2</p></div>
            <div className='col-span-9'><p>The photo should be an original copy and not a photocopy one.</p></div>
            <div className='flex-1 text-center text-black font-semibold px-[30%]'><p className='bg-white border-white rounded-[50%]'>3</p></div>
            <div className='col-span-9'><p>Make sure that the personal information on your ID is accurate.</p></div>
          </div>
        </div>

        <span className='flex-auto h-full'/>

        <FilledButton
          buttonText='Continue'
          effects='black-button-outlined'
          url='/verify-identity/front-id-verification'
          textSize=''
        />
    </section>
  </div>
}
