import { clock, phone } from '../Datos/IconosSVG'
function Contacto( { numeros, correo, horario, direccion } ) {
  return(
    <div id='contacto'>
      <div id='agenda'>
        <h2>CONSULTAS</h2>
        <div>
        <div>
        <p>{`Agenda una consulta por whatsapp al número  ${numeros[0]} 
o mediante una llamada al ${numeros[1]}  
 nuestro correo: ${correo}`} 
        </p>
        <p>{`${horario[0]} a ${horario[1]}`}<br />{`${horario[2]}:00 a ${horario[3]}:00 hrs`}</p>
        </div>
        {phone}
        </div>
      </div>
      <div id='direccion'>
        <h2>DIRECCIÓN DEL CONSULTORIO</h2>
        <div>
        <div>
        <p>Visítanos para que seas atendido con la atención que te mereces en  
 Centro de Especialidades Médicas</p>
        
        <p>{direccion}</p>
        </div>
        {clock}
        </div>
      </div>
    </div>
  )
}

export default Contacto