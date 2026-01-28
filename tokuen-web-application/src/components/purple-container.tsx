interface Props {
    children : React.ReactElement
}

export function PurpleContainer({children} : Props) {
    return <div className='flex flex-1 bg-linear-90 from-fuchsia-700 to-fuchsia-900 rounded-xl p-5 text-white'>
        {children}
    </div>
}