interface Props {
    bgText : string,
    header : string,
    subtext : string,
    amount : string
}

const SimpleWalletContainer = ({bgText, header, subtext, amount} : Props) => {
    return <div className='flex flex-1 flex-col w-full h-fit bg-linear-90 text-white from-fuchsia-700 to-fuchsia-900 rounded-xl px-[5%] py-7'>
        {/**bg text */}
        <p className='fixed flex flex-1 text-[8rem] opacity-20 self-end justify-self-end'>{bgText}</p>
        <p className='flex flex-1 text-[1.5rem] pb-5'>{header}</p>
        <p className='flex- text-[1rem]'>{subtext}</p>
        <p className='flex-1 text-2xl font-semibold'>{amount}</p>
    </div>
}

export default SimpleWalletContainer;