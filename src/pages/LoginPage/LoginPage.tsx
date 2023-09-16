import './LoginPage.scss';
import 'react-tabs/style/react-tabs.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import React, { useState } from 'react';
interface ModalLoginProps {
  onClose: () => void;
}
interface LoginFormInput {
  username: string;
  password: string;
}
interface RegistrationFormInput {
  username: string;
  email: string;
  password: string;
}

export const LoginPage: React.FC<ModalLoginProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="modal">
      <div id="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <Tabs>
          <TabList>
            <Tab>Вход</Tab>
            <Tab>Регистрация</Tab>
          </TabList>

          <TabPanel>
            <p>Введите ваш логин и пароль для входа</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="username">Логин:</label>
                <input type="text" {...register('username', { required: true })} />
                {errors.username && <span>Обязательное поле</span>}
              </div>
              <div>
                <label htmlFor="password">Пароль:</label>
                <input type="password" {...register('password', { required: true })} />
                {errors.password && <span>Обязательное поле</span>}
              </div>
              <button type="submit" className="btn">
                Войти
              </button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
