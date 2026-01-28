import type React from "react"

interface Props {
    icon : React.ReactNode,
    subtype : string,
    type : string,
    date : string,
    amount : string
}

export function TransactionItem({icon, subtype, type, date, amount} : Props) {
    return <div className='flex flex-1 w-full h-fit gap-2 px-3 items-center justify-center'>
        <div className='flex flex-1 w-full h-fit gap-4'>
            {icon}
            <div className='flex flex-1 flex-col w-full h-fit gap-1'>
                <p className='flex flex-1 text-xl font-semibold'>{type}</p>
                <p className='flex flex-1'>{subtype}</p>
            </div>
        </div>
        <p className='flex flex-1 text-xl'>{amount}</p>
        <p className='flex flex-1 text-xl'>{date}</p>
    </div>
}