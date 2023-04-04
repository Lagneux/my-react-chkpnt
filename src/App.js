// Importation des fichiers nécessaires au fichier "App"
import './App.css';
import ReactDOM from "react-dom";
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

//Définition de l'Elément "App" comme "Elément root"
const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);

//Le corps de la page à afficher
function App() {
  return (
    <div className="App-header">
      <h1><b>Checkpoint de React JS</b></h1>
      <br />
      <ProfilePhoto />
      <FullName />
      <Address />
      <div>
        <div class="alert alert-info alert-dismissible d-flex align-items-center fade show">
          <i class="bi-info-circle-fill"></i>
          <strong class="mx-2">Info!</strong> Page chargée avec succès.
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        
      </div>
    </div>
  );
}

//Exportation du fichier "App" pour exécution dans React
export default App;
