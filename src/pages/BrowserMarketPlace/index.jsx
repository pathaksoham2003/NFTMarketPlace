import React from 'react'
import BrowseInfo from './BrowseInfo'
import BrowseTabs from './BrowseTabs'

const BrowserMarketPlace = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
        <BrowseInfo/>
        <BrowseTabs/>
    </div>
  )
}

export default BrowserMarketPlace