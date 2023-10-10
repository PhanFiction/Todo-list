import React, { useState } from 'react';
import styles from './Login.module.css';
import Page from '../../components/Page/Page';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import LinkRoute from '../../components/LinkRoute/LinkRoute';
import { useHistory, Redirect } from 'react-router-dom';
const authService = require('../../services/auth');

const Login = ({ isAuth, setAuth, setAlert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  if(isAuth === true) {
    return (
      <Redirect to="/" />
    )
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = {
      username,
      password,
    }
    try{
      const res = await authService.login(userCredentials);
      if (res.success) {
        setAuth(true);
        history.push('/');
      }
    }catch(error){
      setAlert({ message: 'Login failed. Please try again.', type: 'error' });
    }
  }
  return (
    <Page>
        <div className={styles['login-container']}>
          <form className={styles['login-form']}>
            <h1>Login</h1>
            <div className={styles['form-item']}>
            <Label>
              <Input name={"username"} value={username} text="Username" required={true} noBorderOutline={true} handleChange={(e)=>{setUsername(e.target.value)}}>
                Username
              </Input>
            </Label>
          </div>
            <div className={styles['form-item']}>
              <Label>
                <Input name={"password"} value={password} text="Password" type="password" required={true} noBorderOutline={true} handleChange={(e)=>{setPassword(e.target.value)}}>
                  Password
                </Input>
              </Label>
            </div>
            <div className={styles['form-item']}>
              <Button handleClick={handleSubmit} noBorder={false}>
                Submit
              </Button>
              <LinkRoute to={`/signup`}>
                <span>Dont have an account. Sign Up Now.</span>
              </LinkRoute>
            </div>
          </form>
        </div>
    </Page>
  );
};

export default Login;
