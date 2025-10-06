# Consigna: Implementar Dark/Light Mode con Context en React

## Objetivo
Crear un proyecto en **React** desde cero que permita:
- Manejar un **tema global** (dark o light) usando **Context API**.
- Cambiar el tema en una vista.
- Mostrar el tema seleccionado en otra vista.
- Aplicar estilos diferentes según el tema.

---

## Requisitos

1. **Crear un proyecto React nuevo** con Vite o Create React App.  
   Ejemplo con Vite:
   ```bash
   npm create vite@latest dark-light-mode
   cd dark-light-mode
   npm install
   npm install react-router-dom
   ```

2. Configurar la estructura de carpetas:
   ```
   src/
   ├── ThemeContext.js
   ├── pages/
   │   ├── Home.jsx
   │   └── SelectedTheme.jsx
   ├── App.jsx
   ├── main.jsx
   └── index.css
   ```

3. **Contexto (`ThemeContext.js`)**
   - Crear un contexto que maneje el estado `theme` (con valores `"light"` o `"dark"`).
   - Incluir una función `toggleTheme` para alternar entre ambos temas.
   - Proveer estos valores a toda la aplicación.

4. **Enrutamiento (`main.jsx`)**
   - Configurar **React Router** con dos rutas:
     - `/` → Página principal (`Home`)
     - `/selected` → Página que muestra el tema seleccionado (`SelectedTheme`)
   - Envolver la aplicación con el `ThemeProvider` del contexto.
   - Incluir un menú de navegación con enlaces a ambas páginas.

5. **Página Home (`pages/Home.jsx`)**
   - Mostrar el tema actual (light/dark).
   - Incluir un botón que cambie el tema al hacer clic.

6. **Página SelectedTheme (`pages/SelectedTheme.jsx`)**
   - Mostrar en texto cuál es el tema actualmente seleccionado.
   - Aplicar estilos en base al contexto.

7. **Estilos (`index.css`)**
   - Definir clases `.light` y `.dark` que cambien colores de fondo y texto.
   - Asegurar transiciones suaves entre los temas.

---

## Resultado esperado
- Al iniciar, la app debe mostrarse en modo **light**.
- En la página **Home**, el usuario puede cambiar el tema con un botón.
- En la página **SelectedTheme**, se debe reflejar el tema actual seleccionado.
- El estado del tema debe mantenerse aunque se navegue entre páginas.

---

## Desafío adicional (opcional)
- Aplicar los estilos del tema también al menú de navegación.
- Agregar un tercer tema, por ejemplo `"blue"`, y permitir que el usuario rote entre los tres.
