import React from 'react'
import home from "../src/assets/home2.svg"
import bulb from "../src/assets/bulb.png"
import speaker from "../src/assets/speaker.png"
import refresh from "../src/assets/arrow.png"
import previous from "../src/assets/left-chevron.png"
import next from "../src/assets/right-chevron.png"
import fullscreen from "../src/assets/full-screen.png"
import add from "../src/assets/add.png"
import logo from "../src/assets/hyggex logo.png"
function Dashboard() {
  return (
    <div className='flex flex-col  mt-4'>
        <div className='flex gap-2 items-center text-xs md:text-base'>
            <img src={home} className='h-5 w-5 '/>
            <button className=''>&gt; Flashcard</button>
            <button className=''>&gt; Mathematics</button>
            <button className='font-bold text-blue-e-600'> &gt; Relation and Function</button>
        </div>
        <div className='text-blue-e-600 md:text-4xl font-bold mt-8'>Relations and Functions (Mathematics)</div>
        <div className='md:w-full flex flex-col  items-center mt-8 '>
                   <div className='flex md:w-1/3 w-full justify-evenly mb-4'> 
                   <button className='text-blue-900 border-b-2 border-blue-900 font-bold px-2 py-1'>Study</button>
                   <button className='px-2 py-1 hover:border-b-2 border-blue-900'>Quiz</button>
                   <button className='px-2 py-1 hover:border-b-2 border-blue-900'>Test</button>
                   <button className="px-2 py-1 hover:border-b-2 border-blue-900">Game</button>
                   <button className='px-2 py-1 hover:border-b-2 border-blue-900'>Others</button>
                   </div>
                   <div className='h-64 md:w-1/3 w-full m-2 md:m-0 bg-blue-e-600 rounded-3xl p-4'>
                   <div className='w-full flex justify-between items-center '><img src={bulb} className='h-6 w-6 '/>
                   <img src={speaker} className='h-6 w-6 '/></div> 
                     <div className=' flex justify-center mt-16'><span className='text-white text-2xl tracking-widest font-medium'>9+6+7x-2x-3</span></div>
                   </div>
                   <div className='flex justify-between w-full md:w-1/3 p-4 items-center'>
                    <div><img src={refresh} className='h-8 w-8' /></div>
                   <div className='p-2 flex gap-7'>
                   <img src={previous} className='h-8 w-8' />
                   <div className='text-lg text-blue-e-600 font-medium'>01/10</div>
                   <img src={next} className='h-8 w-8' />
                   </div>
                   <div className=''>
                   <img src={fullscreen} className='h-6 w-6' /></div></div>
        </div>
        <div className='md:w-full flex justify-between items-center'>
        <div className="flex items-center gap-1">
       <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-1 rounded-full'> <img src={logo} className="w-8 h-8 rounded-full"/></div>
        <div className='flex flex-col mt-1'><span className='text-xs'>Published By</span><span className="md:text-lg text-blue-e-600 font-bold">HyggeX</span></div>
      </div>
      <div className='flex items-center gap-1'>
      <img src={add} className="w-8 h-8  "/>
        <span className="md:text-2xl text-blue-e-600 font-bold">Create Flashcard</span>
      </div>
        </div>
        <div className='flex flex-col mt-20 gap-6  mb-10'>
            <div className='md:text-3xl font-bold text-blue-e-600'>FAQ</div>
            <div className=' flex flex-col gap-4 text-xs md:text-base'>
                <div className=''>
                    <select className='border-2 md:w-1/2 w-full p-2 rounded-lg border-blue-e-600 outline-none'>
                        <option className='rounded-lg p-2'>Can education flashcards can be used for all age group</option>
                    </select>
                </div>
                <div >
                <select className='border-2 md:w-1/2 w-full p-2 rounded-lg border-blue-e-600 outline-none'>
                        <option>How do education flashcards work?</option>
                    </select>
                </div>
                <div>
                <select className='border-2 md:w-1/2 w-full p-2 rounded-lg border-blue-e-600 outline-none'>
                        <option>Can education flashcards can be used for test preparation</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard