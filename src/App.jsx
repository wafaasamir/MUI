import { useState } from 'react'
import Chat from './components/Chat'
import LoginForm from './components/LoginForm'
import ProductCard from './components/ProductCard'
import LanguageSelectForm from './components/LanguageSelectForm'




function App() {


  return (
    <>
      <Chat />
      <LoginForm />
      <ProductCard />
      <LanguageSelectForm/>
    
    </>
  )
}

export default App
