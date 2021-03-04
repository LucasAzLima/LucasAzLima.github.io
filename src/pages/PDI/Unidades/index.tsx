import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { selectUnidade } from 'state/PDI';
import U1 from './U1';
import U2 from './U2';

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: '#0E4B82',
      marginLeft: 5,
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none',
        alignItens: 'center',
      },
    },
  })
);

const Unidades = observer(() => {
  const classes = useStyles();
  return (
    <Box marginTop="10vh" marginLeft="20px">
      <Typography variant="subtitle1">
        Todos os exercícios aqui apresentados, podem ser encontrados na
        <Link
          href="https://agostinhobritojr.github.io/tutorial/pdi/"
          target="_blank"
          className={classes.link}
        >
          página do professor Agostinho Brito
        </Link>
      </Typography>
      <Box marginTop="20px" marginBottom="20px">
        <Typography variant="subtitle1">Desenvolvido por:</Typography>
        <Typography style={{ marginLeft: 10 }}>
          Gabriel Ribeiro de Freitas
        </Typography>
        <Typography style={{ marginLeft: 10 }}>
          Lucas de Azevedo Lima
        </Typography>
      </Box>

      <U1 hidden={selectUnidade.currentUnit !== 0} />
      <U2 hidden={selectUnidade.currentUnit !== 1} />
    </Box>
  );
});

export default Unidades;
