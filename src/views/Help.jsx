import { Link } from "react-router-dom"
import "../assets/images/styles/help.css"

// Componente de ayuda del chat

const Help = () => {
  return (
    <main className="help-main">
      <header className="help-header">
        <h1>📖 Ayuda del Chat</h1>
        <p className="text-info">
          <h3>Volver a </h3><Link to="/chat"><strong><h2>Chat</h2></strong></Link>
        </p>
      </header>

      <section className="help-section">
        <h2>1️⃣ Funcionamiento general del Chat</h2>
        <p>
          Este chat permite enviar y recibir mensajes entre usuarios de manera instantánea.
          Puedes seleccionar un usuario desde la lista, escribir mensajes en el input inferior,
          y visualizar el historial completo en la sección de mensajes.
          Además, la configuración del chat permite cambiar entre tema claro y oscuro,
          adaptándose a tus preferencias visuales, y posibilita visualizar un historial de imágenes y fotografías que ha enviado cada usuario.
        </p>
      </section>

      <section className="help-section">
        <h2>2️⃣ Tecnologías utilizadas</h2>
        <ul>
          <li><strong>REACT</strong>: para construir la interfaz de usuario de manera modular.</li>
          <li><strong>REACT ROUTER</strong>: para la navegación entre páginas.</li>
          <li><strong>CONTEXT API</strong>: para manejar el estado global de usuarios y tema.</li>
          <li><strong>CSS MODERNO</strong>: para estilos responsivos y atractivos, incluyendo variables CSS y animaciones.</li>
          <li><strong>LOCALSTORAGE</strong>: para guardar la información de login y persistir configuraciones de tema.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>3️⃣ Posibles mejoras futuras</h2>
        <ul>
          <li>Agregar soporte para envío de imágenes y videos.</li>
          <li>Implementar notificaciones en tiempo real.</li>
          <li>Personalizar la apariencia del chat con más temas y colores y fondos agradables.</li>
          <li>Crear un sistema de búsqueda y filtrado de mensajes.</li>
          <li>Optimizar para múltiples dispositivos con diseño completamente responsivo.</li>
        </ul>
      </section>
    </main>
  )
}

export default Help
