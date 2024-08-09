import React from 'react'
import { User } from '../../../assets'
import { MagnifyingGlass } from '../../../icons'

const BrowseInfo = () => {
  return (
    <div className='max-w-[1240px] w-full p-[30px]'>
        <div className='w-full'>
            <h2 className='text-[28px] sm:text-[38px] md:text-[51px] text-white font-semibold mb-[8px]'>Browse Marketplace</h2>
            <p className='text-[16px] sm:text-[16px] md:text-[22px] text-white font-thin mb-[22px]'>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <div className='w-full flex p-4 border border-lightGrey rounded-xl '>
                <input placeholder='Search your favourite NFTs' className='w-full bg-transparent'/> <img className='w-6 h-6' src={MagnifyingGlass}/>
            </div>
        </div>
    </div>
  )
}

export default BrowseInfo