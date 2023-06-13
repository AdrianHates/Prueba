function Nav( {menu, className} ) {

  function select(event) {
    const elemento = event.currentTarget
    event.currentTarget.parentElement.parentElement.querySelectorAll('li a').forEach(x => x.classList.remove('seleccionado'))
    elemento.classList.add('seleccionado')
  } 

  return(
    <nav className={className}>
      <div></div>
      <ul>
      {menu.map((x,i)=><li key={i}>
        <a onClick={select} href={`#${x.slice(0,1).toLowerCase()+x.slice(1)}`}>{x}</a>
      </li>)}
      </ul>
    </nav>
  )
}

export default Nav;