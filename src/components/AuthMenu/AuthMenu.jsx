import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListStyle } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <ListStyle>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ListStyle>
  );
};

export default AuthMenu;