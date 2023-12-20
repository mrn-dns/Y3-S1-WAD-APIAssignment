import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { AuthContext } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Purple color
    },
  },
});

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarInfo, setSnackbarInfo] = useState({ open: false, severity: "success", message: "" });
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleSnackClose = () => {
    setSnackbarInfo({ ...snackbarInfo, open: false });
  };

  const handleSignIn = async () => {
    setSnackbarInfo({ ...snackbarInfo, open: true, severity: "info", message: "Logging in..." });
  
    try {
      setError('');
      setLoading(true);
  
      const isAuthenticated = await context.authenticate(username, password);
      console.log(isAuthenticated);
  
      if (isAuthenticated) {
        setSnackbarInfo({ open: true, severity: "success", message: "User Logged In!" });
        setTimeout(() => {
          navigate('/');
        }, 5000);
      } else {
        setError('Failed to sign in (username or password is incorrect!)');
        setSnackbarInfo({ open: true, severity: "error", message: "Failed to sign in!" });
      }
    } catch (err) {
      setError('Failed to sign in (username or password is incorrect!)');
      setSnackbarInfo({ open: true, severity: "error", message: "Failed to sign in!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackbarInfo.open}
          autoHideDuration={snackbarInfo.severity === "error" ? null : 6000}
          onClose={handleSnackClose}
        >
          <Alert onClose={handleSnackClose} severity={snackbarInfo.severity} sx={{ width: "100%" }}>
            {snackbarInfo.message}
          </Alert>
        </Snackbar>
      </>

      <Card sx={{ border: "2px solid #6200ea", backgroundColor: "#f0f0f0", padding: 3 }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <WavingHandIcon fontSize="large" color="primary" />
          </Box>
          <Box component="form" noValidate onSubmit={(e) => { e.preventDefault(); handleSignIn(); }} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="UserName"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button disabled={loading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/users/signup" variant="body2">
                  Don't have an account? Sign up !
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Card>
    </ThemeProvider>
  );
}



// import React, { useState, useContext } from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Card from "@mui/material/Card";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
// import WavingHandIcon from '@mui/icons-material/WavingHand';
// import { AuthContext } from '../contexts/authContext';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#6200ea', // Purple color
//     },
//   },
// });

// export default function Login() {
//   const context = useContext(AuthContext);

//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");

//     const login = () => {
//         context.authenticate(userName, password);
//     };

//     let location = useLocation();

//     // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
//     const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

//     if (context.isAuthenticated === true) {
//         return <Navigate to={from} />;
//     }

//     if (context.isAuthenticated === true) {
//       console.log('you did it')
//   }

//     return (
//         <>
//             <h2>Login page</h2>
//             <p>You must log in to view the protected pages </p>
//             <input id="username" placeholder="user name" onChange={e => {
//                 setUserName(e.target.value);
//             }}></input><br />
//             <input id="password" type="password" placeholder="password" onChange={e => {
//                 setPassword(e.target.value);
//             }}></input><br />
//             {/* Login web form  */}
//             <button onClick={login}>Log in</button>
//             <p>Not Registered?
//                 <Link to="/signup">Sign Up!</Link></p>
//         </>
//     );
// }