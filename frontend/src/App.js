import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  /**
   * useState retorna um array com 2 posições
   * 
   * 1. Variável com o seu valor inicial
   * 2. Função para atualizarmos esse valor
   */
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []); // Segundo parametro com array vazio quer dizer que ele só vai executar uma vez ao inicializar
  

  async function handleAddProject() {
    const response = await api.post('projects',   {   
      title: `Novo Projeto ${Date.now()}`,
      owner: "Kelvis Borges"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }  

  return (
    <>
      <Header title="Projects" />
      

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;