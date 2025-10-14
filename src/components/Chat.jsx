import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext.jsx";
import logo from "../assets/images/logo.png"
import avatar from "../assets/images/avatar.jpeg"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [selectedUserName, setSelectedUserName] = useState(""); // controla el usuario seleccionado en el popup

  const { theme, setTheme } = useTheme();

  // 1. Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers } = useChat()

  // 2. Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  // 3. Manejo del input
  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  // 4. Cuando enviamos el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // ✅ Actualizamos el estado de manera INMUTABLE
    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers) // esto dispara el useEffect del contexto que guarda en localStorage

    setMsg("")
  }
  const handleLogout = () => {
    localStorage.removeItem("IsLoggedIn")
    navigate("/")
  }

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      {
        showPopup === true && (
          <section className="cont-popup">
            <div className="popup">
              <h2>Configuración del Chat</h2>

              {/* Selector de Tema Claro/Oscuro */}
              <div className="theme-options">
                <p>Tema actual: <strong>{theme === "light" ? "Claro" : "Oscuro"}</strong></p>
                <div className="theme-buttons">
                  <button className="btn-light" onClick={() => setTheme("light")}>☀️ Claro</button>
                  <button className="btn-dark" onClick={() => setTheme("dark")}>🌙 Oscuro</button>
                </div>
              </div>

              {/* Selector de usuario para historial de imágenes */}
              <div className="image-history">
                <label>Historial de Imágenes enviadas</label>
                <select
                  value={selectedUserName}
                  onChange={(e) => setSelectedUserName(e.target.value)}>
                  <option value="">Seleccionar usuario...</option>
                  <option value="Juan">Juan Perez</option>
                  <option value="Marita">Marita Rodriguez</option>
                  <option value="Luka">Luka Nicolas Piaggi</option>
                  <option value="Lucas">Lucas Hernan Figueroa</option>
                </select>
              </div>

              {/* Popup con imágenes del usuario seleccionado */}
              {selectedUserName && (
                <div className="image-popup">
                  <h3>{selectedUserName} - Imágenes enviadas</h3>
                  <div className="image-list">
                    {selectedUserName === "Juan" && (
                      <>
                        <img width={100} src={logo} alt="Juan Logo de Whatsapp" />
                        <img width={100} src={avatar} alt="Juan Avatar Image" />
                      </>
                    )}
                    {selectedUserName === "Marita" && (
                      <>
                        <img width={100} src={avatar} alt="Marita Avatar Image" />
                      </>
                    )}
                    {selectedUserName === "Luka" && (
                      <>
                        <img width={100} src={avatar} alt="Luka Avatar Image" />
                        <img width={100} src={logo} alt="Luka Logo Whatsapp" />
                      </>
                    )}
                    {selectedUserName === "Lucas" && (
                      <>
                        <img width={100} src={avatar} alt="Lucas Avatar Image" />
                      </>
                    )}
                  </div>
                </div>
              )}
              <button className="btn-close" onClick={handleClosePopup}>Cerrar</button>
            </div>
          </section>
        )
      }

      <div className={`chat ${theme}`}>
        <header className="chat-header">
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
            </div>
          </div>

          <div className="chat-actions">
            <button title="Settings" onClick={handleShowPopup}>⚙️</button>
            <Link to="/help" title="Help">❓</Link>
            <button onClick={handleLogout}>Cerrar sesión 🚪</button>
          </div>
        </header>

        <section className="chat-messages">
          {user.messages.map((message) => (
            <div className="message" key={message.id}>
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </section>

        <footer className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter text here..."
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  )
}