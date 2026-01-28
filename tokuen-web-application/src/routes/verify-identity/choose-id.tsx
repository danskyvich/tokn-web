import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '../../components/header'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Route = createFileRoute('/verify-identity/choose-id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <Header
        img='./../../../../favicon.png'
        text='TOKUEN'
        textColor=''
      />

      <section className='flex flex-1 flex-col w-full px-[20%] py-5 h-full'>
        <p className='flex flex-1 text-black text-4xl font-semibold'>Identity verification</p>
        <p className='pb-5'>Select the ID card you want to use for this step.</p>

        {/**ID table */}
        <div className='flex flex-1 flex-col border-2 border-black rounded-xl'>
          <IDRow text='National ID (Card Type)'/>
          <IDRow text='National ID (PaperType) / Digital National ID'/>
          <IDRow text='Driver License'/>
          <IDRow text='UMID'/>
          <IDRow text='Postal ID'/>
          <IDRow text='Passport'/>
          <IDRow text='SSS ID'/>
          <IDRow text='PRC ID'/>
          <IDRow text='HDMF (Pag-ibig ID)'/>
        </div>
        <span className='flex-auto h-full'/>
      </section>
    </div>
}

interface Props {
  text : string,
}

const IDRow = ({text} : Props) => {
  return <Link to='/verify-identity/id-details' className='flex flex-2 px-[10%] py-2 border-b- black border-b-2 items-center hover:bg-stone-200'>
    <p>{text}</p>
    <span className='flex-1 w-full'/>
    <KeyboardArrowRightIcon sx={{fontSize: '3rem'}}/>
  </Link>
}