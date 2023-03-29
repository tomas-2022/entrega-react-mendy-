import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListcontainer';
import Forn from './componentes/Form/Forn';



function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting= {'Selecciona el producto que quieras'}/>
    <Forn title="Dejanos tus datos para ponernos en contacto"/>
    </div>
  );
}

export default App;
