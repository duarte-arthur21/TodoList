import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import TodoList from './pages/todoList';
import TodoTasks from './pages/todoTasks';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/login" component={Login} />
      <Route path="/todolist" component={TodoList} />
      <Route path="/todotasks" component={TodoTasks} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
