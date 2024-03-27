import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Page from '../../components/Page/Page';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import LinkRoute from '../../components/LinkRoute/LinkRoute';
import { useHistory, Redirect } from 'react-router-dom';
const authService = require('../../services/auth');

const SignUp = ({ isAuth, setAlert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  if(isAuth === true) {
    return (
      <Redirect to="/"/>
    )
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password,
    }
    try {
      const res = await authService.signUp(newUser);
      console.log('result ', res);
      if (res.success) {
        history.push(`${res.redirectURL}`);
      }
    } catch (error) {
      console.error("Request failed:", error);
      // Handle the error here, e.g., set an error message in your component state.
      setAlert({ message: 'Signup failed. Please try again.', type: 'error' });
    }
  }

  return (
    <Page>
      <div className={styles['signup-container']}>
        <form className={styles['signup-form']}>
          <h1>Sign Up</h1>
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
            <LinkRoute to={`/login`}>
              <span>Already have an account. Login Now.</span>
            </LinkRoute>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default SignUp;
