import './App.css';
import React, { useState } from 'react'
// import FirstComponent from './components/FirstComponent';
// import Props from './components/Props';
// import State from './components/State';
// import TraditionalStyles from './components/TraditionalStyles';
// import LineStyles from './components/LineStyles';
// import ModuleStyles from './components/ModuleStyles';
// import StylesWithStyled from './components/StylesWithStyled';
// import Refs from './components/Refs';
// import LifeCycleComponents from './components/LifeCycleComponents';
// import Hooks from './components/Hooks.jsx';
// import Forms from './components/Forms';
// import Events from './components/Events';
// import RenderConditional from './components/RenderConditional';
// import SpreadOperator from './components/SpreadOperator';
// import IteratingArrays from './components/IteratingArrays';
// import IterateKeys from './components/IterateKeys';
// import Parent from './components/IteratingComponents/Parent';
// import ComponentComunication1 from './components/ComponentComunication1';
// import ComponentComunication2 from './components/ComponentComunication2';
// import Fetch from './components/Fetch';
// import Axios from './components/Axios';
// import RouterParentComponent from './components/Routes/RouterParentComponent';
// import { useCount } from './components/Hooks/useCount';
import UserProvider from './components/Context/UserContext';
import UserList from './components/UserList';

function App() {

  // const [state, setState]=useState(false)

  // const changeState=()=>{
  //   setState(true)
  // }

  // const callingParentFromChild=()=>{
  //   console.log("Calling parent from child")
  // }

  // const callingBrother=()=>{
  //   setState(false)
  // }

  // const[counter]=useCount()

  return (
    <>
      {/* <FirstComponent/> Sending properties to child component */}
      {/* <Props name="John"/> Sending properties to child component */}
      {/* <State/> Changing properties with a button */}
      {/* <TraditionalStyles/> Applying basic css example */}
      {/* <LineStyles/> */}
      {/* <ModuleStyles/> */}
      {/* <StylesWithStyled/> */}
      {/* <Refs/> */}
      {/* <LifeCycleComponents/> */}
      {/* <Hooks/> */}
      {/* <Forms/> */}
      {/* <Events/> */}
      {/* <RenderConditional/> */}
      {/* <SpreadOperator/> */}
      {/* <IteratingArrays/> */}
      {/* <IterateKeys/> */}
      {/* <Parent/> */}
      {/* <Fetch/> */}
      {/* <Axios/> */}
      {/* <RouterParentComponent/> */}
      {/* <h1>Counter: {counter}</h1> */}
      <UserProvider>
        <UserList/>
      </UserProvider>
      
      {/* <ComponentComunication1 callBrother={callingBrother} changeState={state} callParent={callingParentFromChild}/>
      <ComponentComunication2 newState={state}/>
      <button onClick={changeState}>Click</button> */}
    </>
  );
}

export default App;
