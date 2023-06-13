import wasap from '../imgs/icone-logo-whatsapp-vert.png.png'

function BotonWasap( { contactoWasap } ) {
  return <a id='boton-wasap' href={contactoWasap} target='_blank' rel='noreferrer'>
          <img src={wasap} alt='wasap' />
         </a>
}

export default BotonWasap