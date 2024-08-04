import { useState } from "react";
import usePages from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import NFTProfile from "./pages/NFTProfile";
import BrowserMarketPlace from "./pages/BrowserMarketPlace";
function App() {
  const { Home, Rankings, ArtistProfile, SignUp, ConnectWallet, NotFound } =
    usePages();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/connectWallet" element={<ConnectWallet />} />
          <Route path="/nft/:id" element={<NFTProfile/>}/>
          <Route path="/artist/:id" element={<ArtistProfile/>}/>
          {/* <Route path="profile" element={
        <ProtectedRouter><Profile/></ProtectedRouter>
        }/> */}
        <Route path="/browse" element={<BrowserMarketPlace/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
