import { servicios, menu } from './assets/Datos/Datos'
import Nav from './assets/Componentes/Nav'
import Contacto from './assets/Componentes/Contacto'
import BotonWasap from './assets/Componentes/BotonWasap'
import Form from './assets/Componentes/Form'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [palabraClave, setPalabraClave] = useState('Otorrinolaringologo en monterrey')
  const [contactoWasap, setContactoWasap] = useState('51914315964')
  const [showModal, setShowModal] = useState(false)
  const [showNavColapsado, setShowNavColapsado] = useState(null)

  function abrirModal() {
    setShowModal(true)
    document.body.style.overflow='hidden'
  }

  function cerrarModal() {
    setShowModal(false)
    document.body.style.overflow='auto'
  }

  function abrirNav() {
    setShowNavColapsado(true)
  }

  function cerrarNav() {
    setShowNavColapsado(false)
  }

  useEffect(()=>{    
  
    let a = document.querySelector('.menu')
    document.addEventListener('scroll', (event)=>{
      if(getComputedStyle(a.querySelector('ul')).flexDirection==='column') { console.log('asdasd'); return }
      if(window.scrollY > 50) {
        a.style.opacity='0.9'
        a.style.height='4.1rem'

      } else {
        a.style.opacity='1'
        a.style.height='3.9rem'
      }
    })
  },[])

  return (
    <div id='contenedor'>
      <Nav menu={menu} className={'menu'} />
      <div className='collapse' onClick={showNavColapsado?cerrarNav:abrirNav}><p>☰</p></div>
      {showNavColapsado&&<Nav menu={menu} className={'menuColapsado'} />}
      <div className='imagen-portada'>
        <div id='inicio'>
          <h1 className='titulo'>{palabraClave}</h1>
            <p className='descripcion-servicios'>
            El <strong>Dr. Jorge Treviño Garza</strong> es un <strong>{palabraClave}</strong> que cuenta con especialidad en Cirugía Plástica Facial, es un médico que constantemente se actualiza con el  fin de mejorar sus servicios a los pacientes. 
            <br />Servicios del <strong>{palabraClave}</strong>:</p>
            <ul className='servicios'>
            {servicios.map((x,i)=><li key={i}>{x}</li>)}
            </ul>
        </div>  
        <img id="imagen-portada" src='https://confiasalud.pe/wp-content/uploads/2022/05/otorrino-1000x500.jpg' alt={`${palabraClave}`} />
      </div>
      <div className='atencion'>
        
        <h2>"Te mereces un alto nivel de atención por parte de un <strong>Otorrinolaringólogo</strong> de vanguardia, por lo que el Dr. Jorge Treviño Garza especialista en padecimiento de los oídos."
        </h2>
      </div>
      {/*Ingresar datos de contacto*/}
      <Contacto numeros={['8115448285' , '8183475220']} correo={'jorgetrega@gmail.com'} horario={['Lunes', 'Sábado', 9, 19]} direccion={'1er piso consultorio 126 Jose Benitez No 2704 Colonia obispado Monterrey NL CP 64060'} />            
      <div className='contenedorBoton'><button className='botones' onClick={abrirModal}>Agendar una Cita</button></div>
      <div className='conclusion'>
        <h3>El <strong>otorrinolaringólogo en Monterrey Jorge Treviño</strong> es ahora uno de los médicos más importantes en su campo gracias a su contribución a la investigación y la prevención.</h3>
      </div>
      <div id='wasap'>
        <p>Da clic en el botón de WhatsApp para contactarnos para saber más sobre el <span className='subrayadoNegro'>{`${palabraClave}`}</span>.
        </p>
        <BotonWasap contactoWasap={`https://wa.me/${contactoWasap}`}/>
      </div>
      {showModal && (
                  <div className="modelo">
                    <div className="modelo-content">
                      <Form id='form' onClick={cerrarModal} />
                    </div>
                  </div>
      )}
    </div>
  )
}

export default App
