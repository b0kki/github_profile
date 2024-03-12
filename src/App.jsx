import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

//visibilidade do formulario
function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [username, setusername] = useState('');

  return (
    // deve estar dentro de um container ou de fragmentos </>
    <>
      {/* onBlur exige que termine de digitar e saia do campo */}
      <input type="text" onBlur={(e) => setusername(e.target.value)} />


      {/* executa o resto da pagina apenas quando o username for true // for digitado corretamente  */}
      {username.length > 4 && (
        <>
          <Perfil username={username} />
          <ReposList username={username} />
        </>
      )}


      {/* && == true */}
      {formularioVisivel && (<Formulario />)}

      {/*botao que altera a visibilidade do formulario */}
      {/* quando estiver invisivel (!visivel), set para Visivel */}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
