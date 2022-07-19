import './App.css'

import React from 'react'

// Componentes Básicos
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

// Componentes com Repetição
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

// Componentes Condicionais
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

// Componentes com Comunicação
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

// Componentes Controlados
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

// Componentes Mega Sena
import Mega from './components/mega/Mega'

// Layout
import Card from './components/layout/Card'

export default () => (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#13 - Mega Sena">
          <Mega />
        </Card>

        <Card titulo="#12 - Contador">
          <Contador numeroInicial={100} passoInicial={2}/>
        </Card>

        <Card titulo="#11 - Componente Controlado">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="aliceblue">
          <ParOuImpar num={1}/>
          <UsuarioInfo usuario={{nome: "João"}} />
          <UsuarioInfo usuario={{idade: 19}} />
          <UsuarioInfo usuario={{nome: 'Zacarias', idade: 19}} />
        </Card>

        <Card titulo="#07 - Tabela de Produtos" color="yellow">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - Repetição" color="#54BAB9">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos">
          <Familia sobrenome="Oliveira">
            <FamiliaMembro nome="Juca" />
            <FamiliaMembro nome="Jonas" />
            <FamiliaMembro nome="Marcos" />
          </Familia>
        </Card>

        <Card titulo="#04 - Valor Aleatório" color="#FBCB0A">
          <Aleatorio min={50} max={55}/>
        </Card>

        <Card titulo="#03 - Fragmento" color="#590696">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Componente com Parâmetros" color="#C70A80">
          <ComParametro 
            titulo="Segundo Componente"
            subtitulo="Agora com parâmetros 😎"
            />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#37E2D5">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  )