import { BiHomeAlt, BiLibrary, BiSolidDevices } from 'react-icons/bi';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { FaRandom } from 'react-icons/fa';
import { BsFillPauseFill, BsViewList, BsFillVolumeDownFill , BsArrowsAngleExpand} from 'react-icons/bs';
import { IoIosBrush } from 'react-icons/io';
import { AiOutlineStepBackward, AiOutlineStepForward, AiOutlinePlaySquare } from 'react-icons/ai';
import img from "./assets/img.jpg"
import './App.css'
//                   ,       

function App() {
  return (
    <>
      <div className='flex relative'>
        <aside className='w-1/5 h-screen bg-stone-950 text-white flex flex-col p-6 '>
          <span className='flex gap-2'>
            <div className='w-2.5 h-2.5 bg-red-700 rounded-full'></div>
            <div className='w-2.5 h-2.5 bg-yellow-500 rounded-full'></div>
            <div className='w-2.5 h-2.5 bg-green-700 rounded-full'></div>
          </span>
          <div className='flex flex-col py-8 gap-4 text-sm font-medium'>
            <span className="flex gap-2">
              <BiHomeAlt className='text-xl' />
              <p>Home</p>
            </span>
            <span className='flex gap-2'>
              <FiSearch className='text-xl' />
              <p>Search</p>
            </span>
            <span className='flex gap-2'>
              <BiLibrary className='text-xl' />
              <p>Your Library</p>
            </span>
          </div>

          <hr />

          <div className='flex flex-col text-sm text-zinc-400 py-8 gap-1'>
            <span>Hot Hits Brasil</span>
            <span>Aniver funk</span>
            <span>My Playlist #13</span>
            <span>Hot Hits Brasil</span>
          </div>
        </aside>
        <section className='w-4/5 h-screen bg-stone-900 text-white p-8 flex flex-col gap-3'>
          <div className='flex gap-8'>
            <a href='/' className='w-7 h-7 bg-zinc-950 rounded-full flex justify-center items-center'><FiChevronLeft /></a>
            <a href='/' className='w-7 h-7 bg-zinc-950 rounded-full flex justify-center items-center'><FiChevronRight /></a>
          </div>
          <span className='text-2xl font-semibold'>News</span>
          <div className='flex gap-4'>
            <div className='w-1/3 h-20 bg-zinc-700 flex items-center'>
              <img src={img} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Wasting Ligth</span>
            </div>
            <div className='w-1/3 h-20 bg-zinc-700 flex items-center'>
              <img src={img} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Wasting Ligth</span>
            </div>
            <div className='w-1/3 h-20 bg-zinc-700 flex items-center'>
              <img src={img} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Wasting Ligth</span>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/3 h-20 bg-zinc-700 flex items-center'>
              <img src={img} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Wasting Ligth</span>
            </div>
            <div className='w-1/3 h-20 bg-zinc-700 flex items-center'>
              <img src={img} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Wasting Ligth</span>
            </div>
            <div className='w-1/3 h-20 bg-zinc-700 flex items-center'>
              <img src={img} alt="" className='w-1/4 h-full' />
              <span className='px-3'>Wasting Ligth</span>
            </div>
          </div>
          <span className='text-2xl font-semibold'>More</span>
          <div className='flex gap-4'>
            <div className='w-44 bg-zinc-700 p-3 text-sm flex flex-col gap-2'>
              <span className='flex justify-center'>
                <img src={img} alt="" className='w-36' />
              </span>
              <div className='text-base font-semibold'>Daily Mix 1</div>
              <span>Wallows, COIN, girl in red and more</span>
            </div>
            <div className='w-44 bg-zinc-700 p-3 text-sm flex flex-col gap-2'>
              <span className='flex justify-center'>
                <img src={img} alt="" className='w-36' />
              </span>
              <div className='text-base font-semibold'>Daily Mix 1</div>
              <span>Wallows, COIN, girl in red and more</span>
            </div>
            <div className='w-44 bg-zinc-700 p-3 text-sm flex flex-col gap-2'>
              <span className='flex justify-center'>
                <img src={img} alt="" className='w-36' />
              </span>
              <div className='text-base font-semibold'>Daily Mix 1</div>
              <span>Wallows, COIN, girl in red and more</span>
            </div>
            <div className='w-44 bg-zinc-700 p-3 text-sm flex flex-col gap-2'>
              <span className='flex justify-center'>
                <img src={img} alt="" className='w-36' />
              </span>
              <div className='text-base font-semibold'>Daily Mix 1</div>
              <span>Wallows, COIN, girl in red and more</span>
            </div>
            <div className='w-44 bg-zinc-700 p-3 text-sm flex flex-col gap-2'>
              <span className='flex justify-center'>
                <img src={img} alt="" className='w-36' />
              </span>
              <div className='text-base font-semibold'>Daily Mix 1</div>
              <span>Wallows, COIN, girl in red and more</span>
            </div>

          </div>
        </section>
      </div>


      <section className='flex bg-black w-full h-24 text-white absolute bottom-0'>
        <span className='w-1/3 flex items-center px-4'>
          <img src={img} alt="" className='w-20 h-20 rounded' />
          <span className='text-sm px-2'>
            <div className='font-semibold'>Rope</div>
            <span className='text-xs'>Foo Fighters</span>
          </span>
        </span>

        <div className='w-1/3 flex flex-col justify-center items-center gap-4'>
          <span className='flex gap-7 justify-center items-center'>
            <FaRandom className='text-base opacity-70' />
            <AiOutlineStepBackward className='text-2xl opacity-70' />
            <span className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
              <BsFillPauseFill className='text-2xl font-bold text-black ' />
            </span>
            <AiOutlineStepForward className='text-2xl opacity-70' />
            <FiRepeat className='text-base opacity-70' />
          </span>
          <div className='flex gap-2 text-xs w-full items-center'>
            <span>0:00</span>
            <span className='w-full h-1 bg-zinc-400 rounded'></span>
            <span>4:19</span>
          </div>
        </div>

        <div className='flex justify-end items-center w-1/3 gap-4 px-4'>
          <AiOutlinePlaySquare className='text-lg opacity-70' />
          <IoIosBrush className='text-lg opacity-70 rotate-180' />
          <BsViewList className='text-lg opacity-70' />
          <BiSolidDevices className='text-lg opacity-70' />
          <BsFillVolumeDownFill className='text-2xl opacity-70' />
          <span className='w-20 h-1 bg-zinc-400 rounded '></span>
          <BsArrowsAngleExpand className='text-sm opacity-70' />
        </div>

      </section>
    </>
  )
}

export default App
