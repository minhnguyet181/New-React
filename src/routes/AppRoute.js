import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Homepage';
import UserList from '../components/UserList';
import UserForm from '../components/Userform';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserList} />
        <Route path="/add-user" component={UserForm} />
        <Route path="/edit-user/:id" component={UserForm} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
