//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { Mensajes } from './components/Mensajes/Mensajes'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/productos/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
