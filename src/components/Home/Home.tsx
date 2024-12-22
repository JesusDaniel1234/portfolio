import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { fonts } from "../../constants/constants";
import "./Home.css";

export default function Home() {
  const codeString = `class Engineer {
	constructor() {
	  this.name = "Jesús Daniel";
	  this.lastName = "Sánchez Alarcón";
	  this.age = 23;
    }
	
	showInformation() {
	  return \`My name is \${this.name} \${this.lastName}. 
		I'm \${this.age} years old.\`;
    }
	}`;
  const [fontFamily, setFontFamily] = useState("'Arial', sans-serif");

  useEffect(() => {
    let fontIndex = 0;
    const interval = setInterval(() => {
      setFontFamily(fonts[fontIndex]);
      fontIndex = (fontIndex + 1) % fonts.length; // Ciclar entre las fuentes
    }, 300);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);
  return (
    <div className="home-container">
      <h1>
        <p>Hi my name is </p>
        <div className="font-change-container">
          <samp style={{ fontFamily: fontFamily }}>Jesús Daniel</samp>
        </div>
        <p>,I´m 23 years old.</p>
      </h1>
      <div style={{ fontSize: 20 }}>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers
          style={anOldHope}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
