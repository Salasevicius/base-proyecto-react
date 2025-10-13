import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main>
      <h1>Hola a todos desde la página de Ayuda del Chat</h1>
      <p className="text-info">Volver a <Link to="/chat"><strong>Chat</strong></Link></p>
    </main>
  )
}

export default Help