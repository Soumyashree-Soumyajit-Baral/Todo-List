import logo from './logo.svg';
import './App.css';
import React , { useState } from "react"

function App() {
  const [input, setInput]=useState("")
  const [list, setList]=useState([]);
	const handleList=(e)=>{
    if(!input){

    }else{
      setList([...list, input]);
     setInput("")
    }
		
	}
  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  const deleteItem=(id)=>{
    const updateItems=list.filter((ele,idx)=>{
      return idx!==id;
    })
    setList(updateItems)
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
		    <input type="text" placeholder='Add task' id="task" value={input} onChange={handleInput} ></input>
		    <button id="btn" onClick={handleList}>Add</button>
		</div>
    <div>
      
        {list.map((k,i)=>{
          
            return <div className='flex' key={i}>
              <li>{k}</li>
              <button className='d' onClick={()=>deleteItem(i)}>Delete</button>
          </div>
        })}
      
    </div>
    </div>
  );
}

export default App;
