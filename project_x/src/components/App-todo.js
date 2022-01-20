import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import Todo from "./Todo.js";
import "./Todo.css";

import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
  rel="stylesheet"
></link>;

function Apptodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo = (event) => {
    console.log("This is working");
    setTodos([...todos, input]);
    setInput(""); //clears up input bar after hitting enter
    console.log(todos);
  };

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  
    async function handleLogout() {
      setError("")
  
      try {
        logout()
        navigate('/login')
      } catch {
        setError("Failed to log out")
      }
    }

  return (
    <div>
      <nav>
        <div className="Logo">
          <a>Project X</a>
        </div>
        <div className="Name">
          {currentUser.email}
        </div>
        <ul className="nav-links">
          <a aria-current="page" href="#">
            Home
          </a>
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </ul>
      </nav>
      <div
        className="App"
        style={{
          backgroundImage: "url(/Blue_gradient.jpg)",
          position: "relative",
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          marginTop: "0",
        }}
      >
        <h3 className="Header">To-do List</h3>

        <div>
          <form>
            <Input
              className="InputTodos"
              sx={{ width: "40%", marginTop: 40 }}
              placeholder="To-dos"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              type="submit"
              disabled={!input}
              onClick={addTodo}
              variant="contained"
              sx={{
                backgroundColor: "#519259",
                "&:hover": {
                  backgroundColor: "#EEEEEE",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              ADD
            </Button>
          </form>
          <ul>
            {todos.map((todo) => (
              <Todo text={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Apptodo;
