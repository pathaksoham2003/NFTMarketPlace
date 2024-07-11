import React from 'react'
import Home from './Home'
import Rankings from './Rankings'
import ConnectWallet from './ConnectWallet'
import ArtistProfile from './ArtistProfile'
import SignUp from './SignUp'
import NotFound from './NotFound'

const usePages = () => {
  return {Home,Rankings,ConnectWallet,ArtistProfile,SignUp,NotFound};
}

export default usePages