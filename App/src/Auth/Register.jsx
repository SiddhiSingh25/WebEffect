import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
const Register = () => {
    // const [username, setUsername] = useState("");

    // const submitControl = ()=>{

    // }
    return (
        <div className='h-auto w-full mt-20 flex items-center justify-center'>
            <form  method='post' className='h-[28rem] w-[32vw] full rounded-3xl border-2 border-[#8b3dff] border-solid p-10 flex items-center justify-between flex-col relative'>
                <h1 className="text-[#8b3dff] font-bold text-3xl text-center ">Register</h1>
                <div className='w-[100%]'>
                    <div className='flex py-[0.7rem] px-5 w-full rounded-full border-2 bg-transparent mt-4 font-semibold border-[#8b3dff] border-solid outline-none hover:border-[#8b3dff] text-gray-800'>
                        <input
                            type="text"
                            required
                            autoComplete="new-password" 
                            className=" p-0 bg-transparent h-full w-full outline-none focus:outline-none focus:ring-0 border border-transparent focus:border-transparent hover:border-transparent placeholder:text-gray-500 text-gray-800"
                            placeholder="Username"
                        />
                        <FaUserAlt className='w-5 h-5 text-gray-500' />
                    </div>
                    <div className='flex py-[0.7rem] px-5 w-full rounded-full border-2 bg-transparent mt-4 font-semibold border-[#8b3dff] border-solid outline-none hover:border-[#8b3dff] '>
                        <input
                            type="text"
                            required
                            autoComplete="new-password" 
                            className="p-0 bg-transparent h-full w-full outline-none focus:outline-none focus:ring-0 border border-transparent focus:border-transparent hover:border-transparent placeholder:text-gray-500 text-gray-800"
                            placeholder="Username"
                        />

                        <MdEmail className='w-5 h-5 text-gray-500' />
                    </div>
                    <div className='flex py-[0.7rem] px-5 w-full rounded-full border-2 bg-transparent mt-4 text-gray-500 font-semibold border-[#8b3dff] border-solid outline-none hover:border-[#8b3dff] '>
                        <input type="password" required className='p-0 focus:bg-transparent bg-transparent h-full w-full focus:outline-none outline-none focus:ring-0 focus:border-transparent hover:border-transparent border-none placeholder:text-gray-500' placeholder='Password' />
                        <RiLockPasswordFill className='w-5 h-5 text-gray-500' />
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <input type="submit" className='px-6 py-[0.4rem] mt-4 rounded-full border-2 bg-[#8b3dff] outline-none text-gray-50 font-semibold border-none ' value="Submit" />
                    <p className='text-gray-500 mt-2 text-sm'>Don't have an Account? <a href="#" className='text-[#8b3dff] font-semibold'>Register</a></p>
                </div>
            </form>
        </div>
    )
}
export default Register
