import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navgiation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 font-medium uppercase bg-white border-b">
      <a className="uppercase">Typical Mitul</a>
      <ul className="flex gap-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

const Hero = () => {
  return (
    <div className="h-[85%] border border-black rounded">
      <div className="h-[90%] p-2">
        <div className="h-full rounded-sm bg-gray-300 border border-[#cbd6e0]"></div>
      </div>
      <h2 className="font-bold text-center text-7xl">CHASING LIFE</h2>
    </div>
  );
}


const Marquee = () => {
  return (
    <div className="flex items-center justify-center h-full py-1.5 uppercase rounded bg-yolk overflow-hidden">
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
      <span className='ml-2 whitespace-nowrap'>Available for work</span>
    </div>
  );
}

const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h3>About</h3>
        <p>lorem10</p>
        <button className='w-full px-4 py-2 text-left rounded bg-yolk'>Get to know me</button>
      </div>
      <div>
        <div className='w-full h-full bg-black rounded'></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-full">
      <div className="absolute w-full h-full">
        <div className="grid-container">
          <div className="!bg-transparent grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
      <div className="relative z-10">
        <Navgiation />
      </div>
      <div className="relative z-10 px-4 py-2">
        <Marquee />
      </div>
      <div className="relative z-10 h-full px-4">
        <Hero />
      </div>
      <div className="relative z-10 h-full px-4">
        <About />
      </div>
    </div>
  );
}
