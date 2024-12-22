import { useRef } from "react";
import "./Header.css";
import { fonts } from "../../constants/constants";
export default function Header() {
  const intervalRef = useRef<number | null>(null); // Para manejar el intervalo
  const handleFontChange = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = event.currentTarget; // Elemento <li>
    console.log(target);
    let fontIndex = 0; // Índice inicial de las fuentes

    // Iniciar un intervalo para cambiar la palabra entera con una nueva fuente cada segundo
    intervalRef.current = window.setInterval(() => {
      const fontFamily = fonts[fontIndex];
      target.style.fontFamily = fontFamily;
      fontIndex = fontIndex < fonts.length ? fontIndex + 1 : 0;
    }, 300);
  };

  const stopFontChange = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    // Detener el intervalo cuando el mouse salga
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Restaurar el texto original (opcional)
    const target = event.currentTarget;
    target.style.fontFamily = ""
  };

  return (
    <nav className="container">
      <ul className="nav-list">
        {["Home", "About Me", "Projects"].map((item) => (
          <li
            key={item}
            onMouseOver={(event) => handleFontChange(event)}
            onMouseOut={(event) => stopFontChange(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
