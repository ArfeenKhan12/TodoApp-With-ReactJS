import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""
    
  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
    
  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    
  }
  return (
    <>
    <h1 className="text-center font-[10px]">Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" className="bg-white p-2 border rounded align-center" placeholder="enter todo" ref={todoVal} />
      <button type="submit" className="btn bg-ghost mx-2 ">click</button>
    </form>
    <ul>
      {}
      {todo.map((item , index)=>{
        return <div key={index}  >
          <li className=" bg-white font-bold  my-4" >{item}</li>
          <button className="btn bg-red-600 mx-5 mt-2" onClick={()=> deleteTodo(index)}  >delete</button>
          <button className="btn bg-blue-700 mx-1 mt-2" onClick={()=> editTodo(index) }>edit</button>
          {}
        </div>
      })}
    </ul>
    
    </>
  )
}

export default App