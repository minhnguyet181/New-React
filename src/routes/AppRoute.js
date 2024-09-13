import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import UserList from '../components/UserList';
import UserForm from '../components/Userform';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserList} />
        <Route path="/add-user" component={UserForm} />
        <Route path="/edit-user/:id" component={UserForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
