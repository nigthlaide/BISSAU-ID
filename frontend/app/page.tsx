import React from 'react'
import './globals.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[#0A2540]/70 p-10 text-center ">
          <h1 className="text-5xl font-bold text-blue-600 ">Bissau ID</h1>
          <p className="text-lg text-white-600 ">Plataforma que une pessoas e oportunidades, conectando talentos e empresas. <br /> Centralizando todos os serviços públicos em um único lugar.</p>
        </div>
      </main>
    </>
  )
}
