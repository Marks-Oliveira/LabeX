import React from 'react';
import { Link } from "react-router-dom";

import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';

import PageTitle from '../../components/PageTitle';

const HomePage = () => {

  return (
    <>
      <PageTitle title={'LabeX'}/>
      <ButtonsContainer>
        <Link to={'/login'}>
          <Button variant={'outlined'} color={'secondary'} >Área do administrador</Button>
        </Link>
        <Link to={'/inscricao'}>
          <Button variant={'contained'} color={'primary'} >Quero me candidatar!</Button>
        </Link>
      </ButtonsContainer>
    </>
  );
}

export default HomePage;