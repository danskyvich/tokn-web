import { Link } from '@tanstack/react-router'
import classnames from 'classnames'

interface Props {
    text: string,
    url: string,
    icon: React.ReactNode,
    textSize : string,
}

const DashboardButton = ({text, url, icon, textSize} : Props) => {
  
    const classStr = classnames(
        "flex flex-0 flex-row border-2 border-black rounded-3xl w-full h-fit py-3 pl-10 gap-4 cursor-pointer hover:bg-stone-300 active:border-black active:text-white font-semibold active:bg-black", textSize
    )
    return <Link to={url} className={classStr}>
        {icon}
        {text}
    </Link>
}

export default DashboardButton;