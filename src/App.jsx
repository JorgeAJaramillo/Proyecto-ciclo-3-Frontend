import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';

import HomeLosSprinters from './pages/HomeLosSprinters';
import GestionProductos from './pages/GestionProductos';
import GestionVentas from './pages/GestionVentas';
import GestionUsuarios from './pages/GestionUsuarios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export function App() {

  const classes = useStyles();

  const provider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email)
        console.log("estas logueado")
      } else {
        console.log("no logueado")
        setUser(null, setUser)
      }
    })
  }, [])

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("estoy logeado con google")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error en login errorCode:${errorCode}, msg:${errorMessage}`)
      });
  }

  const signOut = () => {
    firebase.auth().signOut();
  }

  return (
    <Router>
      <div className={classes.root}>
       
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
        </IconButton>
            <Typography variant="h6" className={classes.title}>
              Los Sprinters
            </Typography>
            {user ? (
              <>
                <Button component={Link} to="/" variant="contained" color="primary">Home</Button>
                {/*<Link to="/lossprinters">HomeLosSprinters</Link>*/}
                {/*<Button component={Link} to="/regproductos" variant="contained" color="primary">RegistroProductos</Button>*/}
                {/*<Link to="/regproductos">RegistroProductos</Link>*/}
                {/*<Button component={Link} to="/regventas" variant="contained" color="primary">RegistroVentas</Button>*/}
                {/*<Link to="/regventas">RegistroVentas</Link>*/}
                <Button component={Link} to="/gesproductos" variant="contained" color="primary">Gestión Productos</Button>
                {/*<Link to="/gesproductos">GestionProductos</Link>*/}
                <Button component={Link} to="/gesventas" variant="contained" color="primary">Gestión Ventas</Button>
                {/*<Link to="/gesventas">GestionVentas</Link>*/}
                <Button component={Link} to="/gesusuarios" variant="contained" color="primary">Gestión Usuarios</Button>
                {/*<Link to="/gesusuarios">GestionUsuarios</Link>*/}
                {user}
                <Button onClick={signOut} color="inherit">Logout</Button>
              </>
            ) :
              (
                <Button onClick={signInWithGoogle} color="inherit">Login</Button>

              )}
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            {/*<Route path="/regproductos">
              <RegistroProductos />
            </Route>*/}
            <Route exact path="/gesproductos">
              <GestionProductos />
            </Route>
            {/*<Route path="/regventas">
              <RegistroVentas />
            </Route>*/}
            <Route exact path="/gesventas">
              <GestionVentas />
            </Route>
            <Route exact path="/gesusuarios">
              <GestionUsuarios />
              </Route>
              <Route exact path="/">
              <HomeLosSprinters />
              </Route>
          </Switch>
        </Container>
      </div>
    </Router>

  )
}



