import React from 'react';
import { 
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Link as MuiLink,
  Paper
} from '@mui/material';

const LoginForm = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Login
        </Typography>
        <Paper 
      elevation={3}
      sx={{
        width: 450,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
        >
          <Box component="form" noValidate sx={{ mt: 1,ml:2.5, width: '90%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{ mt: 1 }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            LOGIN
          </Button>
          
          <Box textAlign="center">
            <MuiLink href="#" variant="body2">
              Forgot password?
            </MuiLink>
          </Box>
        </Box>
      </Paper>
        
        
      </Box>
    </Container>
  );
};

export default LoginForm;