import { Component } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/Cart/CartView'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          {/** Rupa opcional para filtrar por categoria. Llamando al mismo componente en el cual se agrega useParam() */}
          <Route path='/Category/:category' element={<ItemListContainer/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<CartView/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
