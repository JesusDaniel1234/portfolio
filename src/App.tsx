import "./App.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const codeString = `class Engineer() {
  let name: string = "Jesús Daniel";
  let lastName: string = "Sánchez Alarcón";
  let age: number = 23;

  function showInformation(): string {
    return \`My name is \${name} \${lastName}. I'm \${age} years old.\`;
  }
}`;
  return (
    <>
      <div>
        <SyntaxHighlighter language="python" showLineNumbers style={anOldHope}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default App;
