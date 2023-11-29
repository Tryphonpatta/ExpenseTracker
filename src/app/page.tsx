import Image from 'next/image'
import Totalspend from './component/Totalspend'
import Income from './component/Income'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex flex-col justify-center items-center '>
        <h1>Hello Nixzaga</h1>
        <div className='flex flex-col gap-3'>
          <Totalspend/>
          <Income/>
        </div>
      </div>
    </div>
  )
}
