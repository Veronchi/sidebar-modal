import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  return (
    <>
      <main>
        <Home />
        <button className='btn'>show modal</button>
      </main>
      <div className='modal-overlay'>
        <Modal />
      </div>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
    </>
  )
}

export default App
