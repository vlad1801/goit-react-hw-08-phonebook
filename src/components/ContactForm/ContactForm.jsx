import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsOperetions';
import { useForm } from 'react-hook-form';
import { FormStyle } from './ContactForm.styled';
import { Container } from 'components/App.styled';
import { notifySuccess } from 'utils/notify';

const schema = yup.object({
  name: yup.string().min(4).max(16).required(),
  number: yup.string().min(6).max(11).required(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { items } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const existingContact = items.find(({ name }) => name === data.name);
    if (existingContact) {
      console.warn(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContact(data))
      .unwrap()
      .then(() => notifySuccess(`Contact "${data.name}" added successfully`));

    reset();
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Contact name</span>
          <input type="text" placeholder="Jacob Mercer" {...register('name', { required: true })} />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          <span>Number</span>
          <input type="text" placeholder="761-23-96" {...register('number')} />
          <span>{errors.number?.message}</span>
        </label>
        <button type="submit">Add</button>
      </FormStyle>
    </Container>
  );
}
