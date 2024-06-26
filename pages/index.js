import { data } from 'autoprefixer';
import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {

  return (
    <div className='head'>
      <Head>
        <title>Place-o-pedia</title>
        <meta name="description" content="Places Nearby" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <Navbar />
        <div
          className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover main">
          <style jsx>{`
                    .main{
                        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp'); 
                        height: 100vh;
                    }
                    .main2{
                        background-color: rgba(0, 0, 0, 0.75)
                    }
                `}</style>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed main2">
            <div className="flex justify-center items-center h-full">
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  The Place Where    <br /><span>You Find All the Places</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center button_box ">
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg flex-col" role="toolbar">
              <div className='text-white'>
                <Link href='/lodging' ><button type="button" className="rounded-l inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-lodging-hospitality-services-flaticons-lineal-color-flat-icons-2.png" />
                  Lodging</button></Link>
                <Link href='/banks' ><button type="button" className=" inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-bank-building-photo3ideastudio-lineal-color-photo3ideastudio.png" />
                  Banks</button></Link>
                  <Link href='/clubs' ><button type="button" className=" rounded-r inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/nolan/64/canvas-student.png" />
                  Clubs</button></Link>
                <Link href='/medical' ><button type="button" className=" inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/external-filled-outline-satawat-anukul/64/000000/external-medical-medical-filled-outline-filled-outline-satawat-anukul-39.png" />
                  Medical</button></Link>
              </div>
              <div className='w-full'>
                <Link href='/food' ><button type="button" className=" inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/doodle/48/000000/taco.png" />
                  Food</button></Link>
                <Link href='/attractions' ><button type="button" className=" inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/doodle/48/000000/theme-park.png" />
                  Attractions</button></Link>
                <Link href='/rentals' ><button type="button" className=" rounded-r inline-block mx-3 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase hover:scale-125 focus:bg-black-700 focus:outline-none focus:ring-0 active:bg-black-800 transition duration-150 ease-in-out">
                  <img src="https://img.icons8.com/color/48/000000/car-rental.png" />
                  Rentals</button></Link>
                
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
