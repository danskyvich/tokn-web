import { Link } from '@tanstack/react-router'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Props {
    amount : string,
    emi : string,
    interest : string,
    url : string
}
const LoanContainer = ({amount, emi, interest, url} : Props) => {
    return <div className='flex flex-1 flex-col bg-linear-180 from-violet-800 
    to-fuchsia-900 text-white p-5 gap-3 rounded-2xl overflow-x-hidden'>
        <p className='flex-1 text-4xl font-bold'>{amount}</p>
        <p className='flex flex-1'>{emi}</p>
        <p className='flex flex-1'>{interest}</p>

        <Link className='flex flex-1 bg-black text-white border-2 border-black px-10 
        rounded-2xl h-fit w-fit font-semibold items-center cursor-pointer hover:bg-stone-800 hover:border-stone-800' 
        to={url}>
            View details
            <KeyboardArrowRightIcon sx={{fontSize: '3rem'}}/>
        </Link>

        <span className='flex-auto h-full'/>
    </div>
}

export default LoanContainer;