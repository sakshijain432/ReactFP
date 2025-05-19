import { useState } from 'react'
import Counter from './Component/Counter'
import Likes from './Component/Likes'
import ShowPass from './Component/showPass';
import LiveGreet from './Component/LiveGreet';
import LiveMail from './Component/LiveMail';
import MiniCart from './Component/MiniCart';







function App() {
  

  return (
    <>
      <Counter />
      <Likes />
      <ShowPass/>
      <LiveGreet/>
      <LiveMail/>
      <MiniCart/>
    </>
  )
}

export default App
