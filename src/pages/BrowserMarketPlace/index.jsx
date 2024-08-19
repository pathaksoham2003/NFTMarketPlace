import React, { useEffect, useState } from 'react'
import BrowseInfo from './BrowseInfo'
import BrowseTabs from './BrowseTabs'
import { useParams } from 'react-router-dom'
import { NFTData } from '../../constants'

const BrowserMarketPlace = () => {
  const {type} = useParams()
  const [data,setData] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(()=>{
    if (!type) {
      const collec = NFTData.filter(item => item.collection == 2)
      setData([NFTData,collec])
    }
  },[type])

  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
        <BrowseInfo/>
        <BrowseTabs tabIndex={tabIndex} setTabIndex={setTabIndex} data={data}/>
    </div>
  )
}

export default BrowserMarketPlace