import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Artist = () => {
  const [id,setID] = useState(0);
  return (
    <Link to={`/artist/${id}`} className='w-full bg-lightGrey items-center flex md:flex-col p-3 rounded-lg'>
        <div className='w-32 h-32 flex items-center justify-center overflow-hidden rounded-full'>
            <img className='w-full h-full object-fit' src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"/>
        </div>
        <div className='flex-col p-4'>
        <h2 className='text-white text-xl text-center font-bold'>Soham</h2>
        <h2 className='text-white text-center'>Total sales : 34.53 ETH</h2>
        </div>
        <div className=''>

        </div>
    </Link>
  )
}

export default Artist