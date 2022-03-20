import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { useState, useEffect } from 'react';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    console.log("I'am adding this todo ", title, desc)
    if (todos.length === 0) {
      sno = 0;

    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const styles={ 
    header:{  
    backgroundImage: 'url("https://th.bing.com/th/id/R405ff89c073938b6751587312dbf7b0f?rik=loACGmlC8shMrg&riu=http%3a%2f%2fwww.cleanmama.net%2fwp-content%2fuploads%2f2013%2f01%2fsimple-to-do-list-pic1.png&ehk=EGXQXrkWlMtPF2X6ZgGj6gj9I3%2bdLqmcLy%2f%2bJnma3Oc%3d&risl=&pid=ImgRaw")',
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%' 
    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }
  

   }


  return (
    <div style={styles.header} >
      <div style={styles.content}>
        <Router>
          
          <Header title="My Todos list" searchbar={false} />
          
          <Switch>
              <Route exact path="/" render={()=>{
                return(<>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                </>)
              }}>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>     
          <Footer />
        </Router>
      </div>  
    </div>
  );
}

export default App;
