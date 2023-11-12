import { FC } from 'react'
import img from '../assets/notFound.jpg'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
  return (
    <div className='flex min-h-screen bg-slate-900 font-roboto text-white justify-center flex-col gap-10'>
      <img src={img} alt='img' className='w-80'/>
      <Link to={'/'} className='bg-sky-500 px-6 py-2 hover:bg-sky-600'>Back</Link>
    </div>
  )
}

export default ErrorPage