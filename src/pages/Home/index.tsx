import React from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// import Navigation from 'state/NavigationState';
import Navbar from 'components/Layout/Navbar';
import Descripiton from './Description';
import Perfil from './Perfil';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      backgroundColor: '#747373',
      marginRight: 10,
      marginLeft: 10,
    },
    over: {
      overflowX: 'hidden',
    },
    item: {
      color: '#4b4949',
      marginBottom: 10,
      fontSize: '14px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

interface Rotas {
  nome: string;
  id: number;
  route: string;
}
const Disciplinas: Rotas[] = [
  { nome: 'Processamendo Digital de imagens', route: '/pdi', id: 0 },
];

const PDI = observer(() => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      maxWidth="100vw"
      maxHeight="100vh"
      minWidth="1000px"
      minHeight="400px"
      className={classes.over}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar title="Lucas de Azevedo Lima" />
        </Grid>
        <Grid item xs={3} style={{ marginTop: '10vh' }}>
          <Box display="flex" flexDirection="row">
            <Perfil />
            <Divider
              orientation="vertical"
              flexItem={true}
              className={classes.divider}
            />
          </Box>
        </Grid>
        <Grid item xs={6} style={{ marginTop: '10vh' }}>
          <Descripiton />
        </Grid>
        <Grid item xs={3} style={{ marginTop: '10vh' }}>
          <Box display="flex" flexDirection="row">
            <Divider
              orientation="vertical"
              flexItem={true}
              className={classes.divider}
            />
            <Box>
              <Typography variant="subtitle2">Disciplinas</Typography>

              {Disciplinas.map((item, id) => (
                <Typography
                  key={id}
                  className={classes.item}
                  onClick={() => history.push(item.route)}
                >
                  {item.nome}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export default PDI;
