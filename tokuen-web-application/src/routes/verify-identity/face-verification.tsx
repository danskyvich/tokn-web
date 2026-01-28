import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

export const Route = createFileRoute('/verify-identity/face-verification')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
        <Header
            img='./../../../../favicon.png'
            text='TOKUEN'
            textColor=''
        />

        {/**Face verification */}
        <section className='f;ex flex-1 flex-col bg-black w-full h-full'>

        </section>
    </div>
}
