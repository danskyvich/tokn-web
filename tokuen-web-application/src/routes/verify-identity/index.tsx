import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import Face6Icon from '@mui/icons-material/Face6';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FilledButton from '../../components/filled-button';

export const Route = createFileRoute('/verify-identity/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <Header
      img='./../../../../favicon.png'
      text='TOKUEN'
      textColor=''
      />

      <section className='flex flex-1 flex-col w-full h-full px-[20%] py-5'>
        <div className='flex flex-1 flex-col pb-5'>
          <p className='flex flex-1 text-4xl font-semibold'>Let's verify your identity.</p>
          <p className='flex flex-1 text-(--subheader)'>Verify your identity with just one (1) government-issued card.</p>
        </div>

        {/** Info cards */}
        <div className='flex flex-1 w-full h-fit gap-5'>
          <div className='flex flex-1 flex-col w-[50%] h-full gap-5 border-black border-2 bg-black text-white p-10 rounded-2xl shadow-xl items-center text-center text-xl justify-center'>
            <Face6Icon sx={{fontSize: '7rem'}}/>
            <p className='w-[80%]'>Take a selfie without any facial accessories and objects that could block the way.</p>
          </div>
          <div className='flex flex-1 flex-col w-[50%] h-full border-black border-2 p-10 rounded-2xl shadow-xl items-center text-center text-xl justify-center gap-5'>
            <CreditCardIcon sx={{fontSize: '7rem'}}/>
            <p className='w-[80%]'>Only one (1) government-issued identification card is required to complete the verification process.</p>
          </div>
      </div>

      <a href='' className='hover:underline py-5 text-xl font-semibold'>See all allowed identification cards</a>

      <span className='flex-auto h-full'/>

      <FilledButton
        buttonText='Verify your identity'
        url=''
        effects='black-button-outlined'
        textSize=''
      />
    </section>
  </div>
}
