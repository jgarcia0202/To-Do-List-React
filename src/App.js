import React, { useState, useEffect  } from "react";
//Importing components
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  //Stated
  const[inputText,setInputText] = useState('')
  const[todos, setTodos] = useState([])
  const[status, setStatus] = useState('all')
  const[filteredTodos, setFilteredTodos] = useState([])
  //Use Effect
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler()
  }, [todos, status])
  //Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed !== true))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  };
// Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      console.log(todoLocal)
      setTodos(todoLocal)
    }
  }


  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      <Form 
      setStatus={setStatus} 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      />
      

      
    </div>
  );
}

export default App;











{/*
      <input ref={todoNameRef} type="text" className="new-task"/>
      <button onClick={handleAddToDo}>Add To Do</button>
      <h2>{Todos.length} left to complete! </h2>
      <List todos={todos} />
      
      const [todos, setTodos] = useState([Todos])
  const todoNameRef = useRef()
  console.log(todos)

  function handleAddToDo(e){
    const task = todoNameRef.current.value
    if(task == '') return
    setTodos(todos => {
      return [...[todos[0]], {id: task, task:task, checked:false}]
    })
    todoNameRef.current.value=null
  }
  function handleToggle(){
    
  }
, useRef, useEffect
*/}