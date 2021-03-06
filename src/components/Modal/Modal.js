/** @format */

import React, { useState, useContext } from 'react';
import {
  Modal,
  Button,
  Input,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { AuthContext } from '../../Firebase/authContext';
import { getModalStyle, useStyles } from './Styles';

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  //context
  const {
    setPassword,
    setEmail,
    setUserame,
    username,
    email,
    password,
    signup,
    demoSignin,
    signin,
    signout,
    user,
    setOpenSignin,
    openSignin,
  } = useContext(AuthContext);

  //signup functionality
  // const [openSignin, setOpenSignin] = useState(false);
  const [open, setOpen] = useState(false);
  //modal open/close
  const handleOpen = () => {
    setOpen(true);
  };

  const signupbody = (
    <div style={modalStyle} className={classes.paper}>
      <img
        className={classes.img}
        src='https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-ebf8a.appspot.com/o/logo%2Finstalogo.png?alt=media&token=7f38c3b4-6a80-4088-8c27-87779ddd2bbb'
        alt='instagram logo'
      />
      <form
        className={classes.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input
            id='name'
            name='name'
            autoComplete='off'
            autoFocus
            value={username}
            onChange={(e) => setUserame(e.target.value)}
          />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='email'>
            Email Address
          </InputLabel>
          <Input
            id='email'
            name='email'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='password'>
            Password
          </InputLabel>
          <Input
            name='password'
            type='password'
            id='password'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <div className={classes.box}>
          <Button
            className={classes.button}
            variant='outlined'
            color='primary'
            onClick={signup}
          >
            Sign up
          </Button>
          <Button
            className={classes.button}
            variant='outlined'
            color='primary'
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );

  const signinbody = (
    <div style={modalStyle} className={classes.paper}>
      <img
        className={classes.img}
        src='https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-ebf8a.appspot.com/o/logo%2Finstalogo.png?alt=media&token=7f38c3b4-6a80-4088-8c27-87779ddd2bbb'
        alt='instagram logo'
      />
      <form
        className={classes.form}
        onSubmit={(e) => e.preventDefault() && false}
      >
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='email'>
            Email Address
          </InputLabel>
          <Input
            id='email'
            name='email'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='password'>
            Password
          </InputLabel>
          <Input
            name='password'
            type='password'
            id='password'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <div className={classes.box}>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={demoSignin}
          >
            Demo Sign in
          </Button>
          <Button
            className={classes.button}
            variant='outlined'
            color='primary'
            onClick={signin}
          >
            Sign in
          </Button>
          <Button
            className={classes.button}
            variant='outlined'
            color='primary'
            onClick={() => setOpenSignin(false)}
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      {user ? (
        <Button
          variant='contained'
          color='primary'
          onClick={signout}
        >
          Sign out
        </Button>
      ) : (
        <div className={classes.login}>
          <Button
            className={classes.logbutton}
            variant='contained'
            color='primary'
            onClick={() => setOpenSignin(true)}
          >
            Log in
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleOpen}
          >
            Sign Up
          </Button>
        </div>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {signupbody}
      </Modal>
      <Modal
        open={openSignin}
        onClose={() => setOpenSignin(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {signinbody}
      </Modal>
    </div>
  );
}

// const [username, setUserame] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [user, setUser] = useState(null);

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged(
//     (authUser) => {
//       if (authUser) {
//         //user has loged in
//         console.log('user:', authUser);
//         setUser(authUser);
//       } else {
//         //user has loged out
//         setUser(null);
//       }
//     }
//   );

//   return () => {
//     //perform cleanup before refire useeffect
//     unsubscribe();
//   };
// }, [user, username]);

// const signup = (e) => {
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((authUser) => {
//       return authUser.user.updateProfile({
//         displayName: username,
//       });
//     })
//     .catch((error) => alert(error.message));
// };

// const signout = (e) => {
//   auth.signOut();
// };

// const signin = (e) => {
//   auth
//     .signInWithEmailAndPassword(email, password)
//     .catch((error) => alert(error.message));

//   setOpenSignin(false);
// };

// const demoSignin = (e) => {
//   auth
//     .signInWithEmailAndPassword(
//       'demosignup@gmail.com',
//       'abc123'
//     )
//     .catch((error) => alert(error.message));

//   setOpenSignin(false);
// };
