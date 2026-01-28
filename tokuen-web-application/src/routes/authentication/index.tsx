import Button from "../../components/button.tsx"
import Stack from '@mui/material/Stack'
import { TextField, FormControl }  from '@mui/material'
import './auth-entry.css'
import { Link } from "@tanstack/react-router"

export default function AuthEntry() {
    return <>
        <div className='page justify-center items-center py-[10dvh] px-[20dvw]'>

            {/** Card */}
            <div className='card flex-row'>

                {/** Left - image */}
                <div className='flex flex-1 w-1/2 h-auto'>
                    <img src='resources/auth-slide-1.png' alt='front-slide-1' className='object-cover rounded-l-lg'/>
                </div>

                {/** Right - form */}
                <div className='flex flex-1 flex-col pr-18 pl-16 w-1/2 h-full'>
                    
                    {/**TOKUEN + logo*/}
                    <div className='flex flex-1 w-full h-fit justify-start items-end mb-4 mt-8'>
                        <div className='flex flex-[0 1 auto] flex-row w-fit h-fit items-center text-black'>
                            <img src='./../../../favicon.png' alt='icon' className='flex-1  h-auto w-12'/>
                            <p className='flex-1 w-fit h-auto pl-2 font-extrabold text-3xl'>TOKUEN</p>
                        </div>
                    </div>

                    {/**Header and Subheader */}
                    <div className='flex flex-0 flex-col w-full h-fit justify-end'>
                        <p className='flex-0 text-[2rem] font-semibold'>Log in to your account.</p>
                        <p className='flex-0 text-[1rem] font-light text-(--subheader) h-fit '>Enter your email and password.</p>
                    </div>

                    {/* Input fields */}
                    <div className='flex flex-1 flex-col w-full h-fit pt-8'>
                        <FormControl>
                            <Stack gap={2}>
                                <TextField 
                                    type='text'
                                    id="filled-basic" 
                                    label="Enter your email" 
                                    variant="outlined" 
                                    className='w-full'
                                    aria-invalid='false'
                                />
                                <TextField 
                                    type='password'
                                    id="filled-basic" 
                                    label="Enter your password" 
                                    variant="outlined" 
                                    className='w-full ml-4'
                                    aria-invalid='false'
                                />
                            </Stack>
                            <Link to="/authentication/forgot-password" className='flex-1 font-semibold text-x self-end cursor-pointer hover:underline'>Forgot Password?</Link>
                        </FormControl>
                    </div>

                    {/**Login and Register buttons */}
                    <div className='flex flex-1 flex-col h-fit mt-4 mb-2'>
                        <Stack spacing={2}>
                            <Button
                                buttonText={'Log in'}
                                url={'/authentication/verify-email/'}
                                textSize="text-[1rem]"
                                effects='purple-button-filled'
                            />
                        </Stack>
                        <p className='relative flex-1 self-center text-(--subheader) m-2'>or</p>
                        <Button
                            buttonText={'Register'}
                            url={'/authentication/registration/'}
                            textSize='text-[1rem]'
                            effects="black-button-outlined"
                        />
                    </div>

                    {/**Privacy Policy + Terms and Conditions */}
                    <div className='flex-1 flex-row w-full h-fit text-xs'>
                        <p className='justify-self-center'>
                            <Link to="/tokuen-info/privacy-policy" className='cursor-pointer hover:underline'>
                                Privacy Policy
                            </Link>
                            • 
                             <Link to="/tokuen-info/terms-and-conditions" className='cursor-pointer hover:underline'>
                                Terms and Conditions
                             </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}