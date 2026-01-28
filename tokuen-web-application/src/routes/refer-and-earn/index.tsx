import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

{/**Material UI components */}
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { PurpleContainer } from '../../components/purple-container';

export const Route = createFileRoute('/refer-and-earn/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page justify-center items-center'>
    <Header
      text='TOKUEN'
      img={'./../../../favicon.png'}
      textColor='black'
    />

    {/**Content */}
    <section className='flex flex-1 flex-col h-full w-[50%] py-15 gap-5'>

      <span className='flex-auto h-full'/>

      {/**Svg image here */}
      <div className='flex flex-1 h-[40dvh] w-full'>

      </div>

      {/**Code and text */}
      <div className='flex flex-1 flex-col h-fit w-full bg-stone-200 rounded-3xl shadow-xl'>
        <p className='flex flex-1 py-5 justify-center font-bold text-3xl'>Refer to your friends and get a cash prize of Php 50.</p>
        <p className='flex flex-1 text-center text-(--subheader) text-xl w-[60%] self-center'>Share this code with a friend and after they install, both of you will receive a ₱50 cash reward! Cash rewards will be credited 
          directly into your account.</p>

          {/**Code */}
        <div className='flex flex-[0 1 auto] flex-row w-[70%] h-fit bg-linear-to-r from-violet-600 to-fuchsia-700 self-center items-center justify-center my-6 py-5 rounded-2xl shadow-2xl'>
          <p className='text-white text-4xl font-semibold'>BANFF</p> {/**Code is unique per user */}
          <div className=''>
            <IconButton
              children={<ContentCopyIcon sx={{fontSize: '3rem', color: 'white'}}/>}
            />
          </div>
        </div>
      </div>

      <PurpleContainer>
          <>
            <div className='flex flex-1 flex-col w-fit h-full items-center text-center leading-4 gap-1'>
              <ContentCopyIcon sx={{fontSize: '3rem'}}/>
              <p>Copy Link</p>
            </div>
            <div className='flex flex-1 flex-col w-fit h-full items-center text-center leading-4 gap-1'>
              <CheckCircleOutlineIcon sx={{fontSize: '3rem'}}/>
              <p>Friend registered <br/>successfully</p>
            </div>
            <div className='flex flex-1 flex-col w-fit h-full items-center text-center leading-4 gap-1'>
              <AttachMoneyIcon sx={{fontSize: '3rem'}}/>
              <p className='justify-self-start'>Earn cash rewards</p>
            </div>
          </>
         </PurpleContainer>

         <span className='flex-1 h-full'/>
    </section>
  </div>
}
