interface ButtonProps{
    buttonText: string;
}

const OutlinedButton = ({buttonText} : ButtonProps) => {
    return <>
        <a
            href="#"
            className='flex flex-0 w-full bg-(--white) border-2 border-(--filled-button) rounded-xl p-3 justify-center text-(--filled-button) font-semibold'
        >{buttonText}</a>
    </>
}

export default OutlinedButton;