import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listes from './components/Listes';

function App() {

  const[tache, setTache]=useState("")
  const[description, setDescription]=useState("")
  const[tab, setTab]=useState([
    {tache: "Créer un todolist", description: "Utiliser reactjs pour le faire"},
    {tache: "Faire des testes", description: "Entrer pleine de valeur"},
    {tache: "Utiliser", description: "Ajouter un job étudiant pour samedi à 8h"}
  ])

  const tacheChange=(e)=>{
    setTache(e.target.value)
  }
  const descriptionChange=(e)=>{
    setDescription(e.target.value)
   
  }
  const save=(e)=>{
    e.preventDefault()
    if(tache!="" && description!=""){
      setTab([{tache, description}, ...tab])
      setTache("")
      setDescription("")
    }
  }
  return (
    <div className="container py-5">
      <div style={{textAlign: "center"}}>
        <h2 style={{color: "red"}}>Todolist</h2>
      </div>
      <form onSubmit={save}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input 
          type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Tâche à faire"
          value={tache}
          onChange={tacheChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3" 
          placeholder='Description'
          onChange={descriptionChange}
          value= {description}
          />
        </div>
        <button  className='btn btn-primary'>Enregister</button>
      </form>
      {tab.map((liste, index)=>(<Listes liste={liste} key={index}/>))}
    </div>
  );
}

export default App;
