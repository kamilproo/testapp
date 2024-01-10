import React from 'react';
import {AddTodo} from "./components/AddTodo";
import {TodoList} from "./components/TodoList";
import {Provider} from "react-redux";
import {store} from "./redux/store";


function App() {
  return (
      <>
          <Provider store={store}>
              <AddTodo></AddTodo>
              <TodoList></TodoList>
          </Provider>

      </>

  );
}

export default App;
