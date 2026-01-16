interface ButtonProps {
    buttonText : string;
}

const FilledButton = ({buttonText} : ButtonProps) => {
    return <>
        <a 
            href="#"
            className='flex flex-0 w-full bg-(--filled-button) text-(--white) p-3 justify-center rounded-xl font-semibold hover:bg-(--filled-button-dark)'
        >
            <p className='text-semibold'>{buttonText}</p></a>
    </>
}

export default FilledButton;
