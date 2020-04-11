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
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response)
    })
  }, []); // Segundo parametro com array vazio quer dizer que ele só vai executar uma vez ao inicializar
  

  function handleAppProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
    
  }

  return (
    <>
      <Header title="Projects" />
      

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAppProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;