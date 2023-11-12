import React from 'react'
import { list } from '../services/detailAPI'
const Contact = () => {
  return (
    <div>
        <div className='text-center mt-5'>
            <h1 className='text-2xl font-bold'>CONTACT US</h1>
        </div>
        <div className='flex justify-center gap-32 mt-20'>
        {
            list.map((item)=>{
                return(
                <div className=''>
                <div className='flex justify-center'>
                    <img src={`${item.flag}`} alt="" />
                </div>
                <div className='pt-3'>
                    <span>{item.email}</span>
                </div>
                <div className='pt-1'>
                    <span>{item.address}</span>
                </div>
            </div>
            )})
        
        }
        </div>
    </div>
  )
}

export default Contact