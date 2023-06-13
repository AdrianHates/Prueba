function Form( { id, onClick }) {
  return(
    <form id={id} style={{width:'25rem', padding:'1rem 3rem', height: '37.5rem'}} className="form">
      <h1>Haga una reservación</h1>
      <input placeholder="Nombre *" required />
      <input placeholder="E-mail *" required />
      <input placeholder="teléfono *" required />
      <input placeholder="Fecha *" required />
      <textarea style={{ height:'10rem' }} placeholder="Mensaje" required />
      <button style={{ padding: '.7rem 0'}}>CONSULTE AHORA</button>
      <span className="close" onClick={onClick}>
                        Cerrar &times;
                      </span>
    </form>
  )
}

export default Form;