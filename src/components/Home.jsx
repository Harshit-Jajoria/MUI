import { Button, Typography } from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import styled from '@emotion/styled';

const Home = () => {
  const MyButton = styled(Button)({
    backgroundColor: 'green',
    color: 'red ',
    margin: 2,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
  });

  return (
    <>
      <Button startIcon={<SettingsIcon />} color="primary" variant="text">
        Text
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        Contained
      </Button>
      <Button variant="outlined" endIcon={<SettingsPhoneIcon />} size="large">
        Outlined
      </Button>
      <Typography variant="h1" component="h2">
        It is a h1 but using h2 style
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: 'green',
          color: 'red ',
          margin: 2,
          '&:hover': {
            backgroundColor: 'lightblue',
          },
        }}
      >
        Unique button with its own css
      </Button>

      <MyButton variant="outlined" size="small">
        My button{' '}
      </MyButton>
    </>
  );
};

export default Home;
