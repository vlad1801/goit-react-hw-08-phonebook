import { Container } from 'components/App.styled';
import { RiContactsBook2Line } from 'react-icons/ri';
import React from 'react';

const HomePage = () => {
  return (
    <Container>
      <h1 className="title">
        Welcome to your PhoneBook
        <RiContactsBook2Line />
      </h1>
    </Container>
  );
};

export default HomePage;
