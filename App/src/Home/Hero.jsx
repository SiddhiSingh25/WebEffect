import Typewriter from 'typewriter-effect';

export function Hero() {
    return (<>
        <header className="text-center py-20">
            <div className='flex items-center justify-center mb-2'>
                <div className='px-7 w-auto py-2 rounded-lg h-auto border-[0.01rem] border-solid border-gray-200 shadow-sm'>Created by
                    <span className="inline-block font-semibold dark:text-white ml-1 mr-1">
                       web effects
                    </span>
                    Team</div>
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
                Hey Developers, Discover <span class='text-blue-500'>Cool Effects</span>
                <div className='h-36'>
                    <Typewriter
                        options={{
                            strings: ["Built by the <span class='text-pink-500'>Web Effects</span> <br> community..!"],
                            autoStart: true, // Automatically start typing
                            loop: false, // No looping
                            deleteSpeed: Infinity, // Prevent erasing by setting delete speed to infinity
                            escapeHTML: false, // Allow HTML rendering in strings
                            cursor: "",
                        }}
                    />
                </div>
            </h1>
            <p className="text-gray-500 mb-8">
                Posted in Design | Published on 1 December, 2024 | By Siddhi Singh
            </p>
            <input hiii ia m 
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded px-4 py-2 w-1/2"
            />

            <div className="relative">
                <div className="absolute animate-pulse bg-gradient-to-br from-pink-200 to-pink-300 w-20 h-20 rounded-full blur-md top-[-16rem] left-3" ></div>
            </div>
            <div className="relative mt-10 ">
                <div className="absolute animate-pulse bg-gradient-to-br from-sky-200 ml-4 to-sky-300  w-20 h-20 rounded-full blur-md right-3 top-[-1rem]"></div>
            </div>
            <div className='flex items-center justify-center w-full'>
            <div className="moving-box h-12 whitespace-nowrap overflow-hidden w-[65%] mt-5 flex relative gap-5">
                <div className="blur-left h-[100%] w-[30%]"></div>
                <div className="move flex items-center gap-5 w-[100%] justify-between ml-5">
                    <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" className='h-6 object-contain object-center'/>
                    <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" className='h-6 object-contain object-center'/>
                    <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" className='h-6 object-contain object-center'/>
                    <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" className='h-6 object-contain object-center'/>
                </div>
                <div className="move flex items-center gap-5 w-[100%] justify-between move">
                    <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" className='h-6 object-contain object-center'/>
                    <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" className='h-6 object-contain object-center'/>
                    <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" className='h-6 object-contain object-center'/>
                    <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" className='h-6 object-contain object-center'/>
                </div>
                <div className="blur-right h-[100%] w-[30%]"></div>
            </div>
            </div>
           
        </header>
    </>)
}

