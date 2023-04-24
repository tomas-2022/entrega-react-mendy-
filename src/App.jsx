import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListcontainer';
import Forn from './componentes/Form/Forn';
import Contador from './componentes/Contador/Contador';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
        <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
      </Routes>

      </BrowserRouter>

    
    <Contador stock ={10} inicial ={1}/>
    <ItemListContainer greeting= {'Selecciona el producto que quieras'}/>
    <ItemDetailContainer/>
    <Forn title="Dejanos tus datos para ponernos en contacto"/>
    
    </div>
  );
}

export default App;
