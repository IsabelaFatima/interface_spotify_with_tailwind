import { AiOutlineStepBackward, AiOutlineStepForward, AiOutlinePlaySquare, AiOutlineArrowRight  } from 'react-icons/ai';
import { BiHomeAlt, BiSolidDevices, BiLibrary } from 'react-icons/bi';
import { BsFillPauseFill, BsViewList, BsFillVolumeDownFill, BsArrowsAngleExpand, BsArrowDownCircle , BsPinAngleFill } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { FiSearch, FiChevronLeft, FiChevronRight , FiRepeat } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LuPictureInPicture2 } from 'react-icons/lu';
import { RxTriangleDown } from 'react-icons/rx';

import likedIcon from "./assets/LikedIcon.jpeg"
import mscIcon from "./assets/MscIcon.jpeg"
import artist from "./assets/Artist.jpeg"
import spotify from "./assets/Spotify.png"
import './App.css'
   

function App() {
  return (
    <>
      <div className='flex relative bg-black'>
        <aside className='w-1/4 h-screen bg-black text-white flex flex-col '>
          <div className='flex flex-col px-5 py-6 m-2 rounded-lg gap-6 bg-graySpotify-100 text-sm font-medium'>
            <span className="flex gap-4 opacity-75 transition-opacity	duration-500 ease-in-out cursor-pointer hover:opacity-100">
              <BiHomeAlt className='text-2xl' />
              <p className='text-base'>Home</p>
            </span>
            <span className='flex gap-4 opacity-75 transition-opacity	duration-500 ease-in-out cursor-pointer hover:opacity-100 '>
              <FiSearch className='text-2xl' />
              <p className='text-base'>Search</p>
            </span>
          </div>

          <div className='flex flex-col h-full text-sm text-zinc-400 py-8 px-5 gap-1 bg-graySpotify-100 rounded-lg mx-2'>
            <div className='flex justify-between relative'>
              <span className='flex text-base text-white opacity-75 font-semibold gap-2 transition-opacity duration-500 ease-in-out cursor-pointer hover:opacity-100 '><BiLibrary className='text-2xl' /> 
              <p>Your Library</p>
              </span>
              <span className='flex gap-2 justify-start items-center absolute right-0 bottom-0.5'>
                <span className='text-3xl text-white opacity-75 hover:opacity-100'> + </span>
                <span><AiOutlineArrowRight className='text-xl text-white opacity-75  mt-1 cursor-pointer hover:opacity-100' /></span>
              </span>
            </div>

            <div className='flex font-semibold text-white gap-2 my-4'>
              <span className='bg-graySpotify-200 py-2 px-3 rounded-2xl opacity-85 cursor-pointer hover:opacity-100'>Playlists</span>
              <span className='bg-graySpotify-200 py-2 px-3 rounded-2xl  opacity-85 cursor-pointer hover:opacity-100'>Artists</span>
            </div>


            <div className='flex justify-between mb-2'>
              <span><FiSearch className='text-lg cursor-pointer' /></span>
              <span className='flex text-white opacity-95 gap-1 cursor-pointer'>
                <p>Recents</p>
                <RxTriangleDown className='text-xl' />
              </span>
            </div>

            <div className='flex gap-3 cursor-pointer'>
              <span className='w-12'>
                <img src={likedIcon} className='rounded-lg contrast-150	' alt="" />
                </span>
              <span className='flex flex-col gap-2'>
                <p className='text-white font-semibold'>Liked Songs</p>
                <span className='flex gap-2'>
                  <BsPinAngleFill className='text-greenSpotify-100' />
                  <p>Playlist • 1 Music</p>
                </span>
              </span>
            </div>
          </div>


        </aside>


        <section className='w-full h-screen bg-graySpotify-100 text-white p-8 m-0.5 my-2 rounded-xl flex flex-col gap-3 overflow-y-scroll'>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <a href='/' className='w-8 h-8 bg-zinc-950 rounded-full flex justify-center items-center'><FiChevronLeft className='text-2xl' /></a>
              <a href='/' className='w-8 h-8 bg-zinc-950 rounded-full flex justify-center items-center'><FiChevronRight className='text-2xl opacity-30 cursor-not-allowed	' /></a>
            </span>

            <div className='flex gap-2'>
              <span className='flex justify-center items-center gap-2 bg-black px-4 py-2 rounded-3xl cursor-pointer hover:scale-105'>
                <BsArrowDownCircle className='font-bold' />
                <p className='text-sm font-bold'>Instalar Aplicativo</p>
              </span>
              <span>
                <img src={spotify} alt="" className='w-8 h-8 rounded-full' />
              </span>
            </div>

          </div>
          <span className='text-2xl'>Good Afternoon</span>
          <div className='flex gap-4'>
            <div className='w-1/3 h-22 bg-zinc-700 flex items-center text-extrabold cursor-pointer'>
              <img src={artist} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Eminem</span>
            </div>
            <div className='w-1/3 h-22 bg-zinc-700 flex items-center cursor-not-allowed	opacity-40'>
              <img src={spotify} alt="" className='w-1/4 h-full' />
              <span className='px-3'></span>
            </div>
            <div className='w-1/3 h-22 bg-zinc-700 flex items-center cursor-not-allowed	opacity-40'>
              <img src={spotify} alt="" className='w-1/4 h-full' />
              <span className='px-3'></span>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/3 h-22 bg-zinc-700 flex items-center cursor-not-allowed	opacity-40'>
              <img src={spotify} alt="" className='w-1/4 h-full' />
              <span className='px-3'></span>
            </div>
            <div className='w-1/3 h-22 bg-zinc-700 flex items-center cursor-not-allowed	opacity-40'>
              <img src={spotify} alt="" className='w-1/4 h-full' />
              <span className='px-3'></span>
            </div>
            <div className='w-1/3 h-22 bg-zinc-700 flex items-center cursor-not-allowed	opacity-40'>
              <img src={spotify} alt="" className='w-1/4 h-full' />
              <span className='px-3'></span>
            </div>
          </div>
          <span className='text-2xl font-semibold'>Your favorite artists</span>
          <div className='flex gap-4 pb-16'>
            <div className='w-48 bg-zinc-700 p-4 py-5 text-sm flex flex-col gap-2 rounded cursor-pointer'>
              <span className='flex justify-center'>
                <img src={artist} alt="" className='w-36 rounded-full' />
              </span>
              <div className='text-lg font-semibold'>Eminem</div>
              <span>Artist</span>
            </div>
          </div>
        </section>
      </div>


      <section className='flex bg-black w-full h-20 text-white absolute bottom-0'>
        <span className='w-1/3 flex items-center px-4 gap-4'>
          <img src={mscIcon} alt="" className='w-14 h-14 rounded' />
          <span className='text-sm'>
            <div className='font-semibold hover:underline'>MockingBird</div>
            <span className='text-xs hover:underline'>Eminem</span>
          </span>

          <span className='flex gap-3'>
            <IoMdHeartEmpty className='text-xl cursor-pointer opacity-80 hover:opacity-100'/>
           <LuPictureInPicture2 className='text-xl cursor-pointer opacity-80 hover:opacity-100'/>
          </span>
        </span>

        <div className='w-1/3 flex flex-col justify-center items-center gap-2'>
          <span className='flex gap-5 justify-center items-center'>
            <FaRandom className='text-base opacity-70 hover:opacity-100' />
            <AiOutlineStepBackward className='text-2xl opacity-70 hover:opacity-100' />
            <span className='bg-white rounded-full w-8 h-8 flex justify-center items-center hover:scale-105'>
              <BsFillPauseFill className='text-2xl font-bold text-black ' />
            </span>
            <AiOutlineStepForward className='text-2xl opacity-70 hover:opacity-100' />
            <FiRepeat className='text-base opacity-70 hover:opacity-100' />
          </span>
          <div className='flex gap-2 text-xs w-full items-center'>
            <span>0:00</span>
            <span className='w-full h-1 bg-zinc-400 rounded'></span>
            <span>4:10</span>
          </div>
        </div>

        <div className='flex justify-end items-center w-1/3 gap-3 px-4'>
          <AiOutlinePlaySquare className='text-lg opacity-70' />
          <BsViewList className='text-lg opacity-70' />
          <BiSolidDevices className='text-lg opacity-70' />
          <BsFillVolumeDownFill className='text-2xl opacity-70' />
          <span className='w-20 h-1 bg-zinc-400 rounded '></span>
          <BsArrowsAngleExpand className='text-base opacity-70 scale-95' />
        </div>

      </section>
    </>
  )
}

export default App
