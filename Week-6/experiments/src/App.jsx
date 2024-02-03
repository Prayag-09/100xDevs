/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import  React ,{ useState } from "react"

function App() {

  return (
      <div>
        <HeaderReloaded />
          <Header name = "Static"></Header>
      </div>
  )
}

function HeaderReloaded() {
  const [name,setName] =useState("");
  function updateName(){
    setName(Math.random());
  }
  return (
    <>
      <button onClick={updateName}> Update the title</button>
    <Header name={name}></Header>
    </>
  )
}



const Header = React.memo(function Header(props){
  return (
    <div>
      My name is : {props.name}
    </div>
  )
});
export default App
