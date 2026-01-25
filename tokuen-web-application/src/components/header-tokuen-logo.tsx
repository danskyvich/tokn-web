import { Link } from "@tanstack/react-router"

interface Props {
    img: string,
    text: string,
    textColor: string,
    width: string,
}

const GenHeader = ({img, text, textColor, width} : Props) => {
    return <div className='flex flex-[0 1 auto] flex-row w-fit h-fit items-center'>
        <img src={img} alt='icon' className='flex-1  h-auto' style={{ width: width }}/>
        <Link to='/dashboard' className='flex-1 w-fit h-auto pl-2 font-extrabold text-3xl' style={{ color: textColor}}>{text}</Link>
    </div>
}

export default GenHeader;