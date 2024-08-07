import { useState } from "react";
import { v4 as uuid } from "uuid";

function TheTodoFile() {
  const [newTodoTitle, setNewTodoTitle] = useState<number>("");
  const handleCreateTodo = () => {
    const id = uuid();
    const todo: Todo = {
      id: id,
      title: newTodoTitle,
      completed: false,
    };
    updateTodos([...todos, todo]);
  };
  const [todos, updateTodos] = useState<Todo>([
    {
      id: uuid(),
      title: "Make a todo app",
      completed: false,
    },
    {
      id: uuid(),
      title: "Get it working",
      completed: false,
    },
    {
      id: uuid(),
      title: "Clean up the code",
      completed: false,
    },
  ]);

  // onDelete function
  const od = (title: string) => {
    updateTodos(todos.filter((todo) => todo.title !== title));
  };

  // onCheck function
  const oc = (id: string) => {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <h1>Todo App ✅</h1>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {/* WIP, will fix when done with the list */}
                    <input
                      onChange={(e) => setNewTodoTitle(e.target.value)}
                      type="text"
                      placeholder="Here's a placeholder"
                    />
                    <button
                      disabled={newTodoTitle.length > 1}
                      onClick={handleCreateTodo}
                    >
                      Add
                    </button>
                  </div>
                  <ul>
                    {/* I'm unsure what this line does here, be careful */}
                    {todos.map((todo, index) => (
                      <li
                        style={
                          todo.title
                            ? {
                                marginBottom: 20,
                                textDecoration: "line-through",
                              }
                            : { marginBottom: "20px" }
                        }
                        key={index}
                      >
                        <input
                          checked={todo.completed}
                          onChange={(e) => console.log(e)}
                          //   onChange={() => oc(todo.id)}
                          type="checkbox"
                        />
                        {todo.title}
                        <button
                          style={{ marginLeft: "12px" }}
                          onClick={() => od(todo.title)}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type Todo = {
  title: string;
  completed: boolean;
};

export default TheTodoFile;
