import { Container, DivStyle } from 'components/App.styled';
import { RiContactsBook2Line } from 'react-icons/ri';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <h1 className="title">
        Welcome to you PhoneBook
        <RiContactsBook2Line />
      </h1>
    </Container>
  );
};

export default HomePage;
