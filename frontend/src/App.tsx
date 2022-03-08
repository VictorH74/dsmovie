
// METODO QUE RETORNA UM CODIGO EM FORMATO 'jsx'

// 3 COMPONENTES DO "ReactRouter" DOM P/ CONFIGURAR AS ROTAS
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";


// 'jsx' PARECIDO COM HTML / PERMITE COLOCAR CODIGOS DO REACT
function App() {
  return (
    // "<BrowserRouter>" PARA INICIAR AS CONFIGS DAS ROTAS
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
