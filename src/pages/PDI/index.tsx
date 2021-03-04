import React from 'react';
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react';
import { Home } from '@material-ui/icons';

import Navbar from 'components/Layout/Navbar';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Unidades from './Unidades';
import { selectUnidade } from 'state/PDI';
import Nav from 'state/NavigationState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      padding: 40,
    },
    formControl: {
      margin: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    select: {
      backgroundColor: 'white',
    },
    item: {
      color: 'white',
      marginRight: 20,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);
const PDI = observer(() => {
  const classes = useStyles();
  const [unidade, setUnidade] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUnidade(event.target.value as number);
    selectUnidade.setcurrentUnit(event.target.value as number);
  };
  return (
    <Box maxWidth="100vw" maxHeight="100vh" minWidth="800px" minHeight="400px">
      <Grid container>
        <Grid item xs={11}>
          <Navbar title="Processamento Digital de Imagens">
            <Box display="flex" flexDirection="row" alignItems="center">
              <Home onClick={() => Nav.goTo('/')} className={classes.item} />
              <FormControl className={classes.formControl}>
                <Typography
                  variant="body2"
                  style={{ color: 'white', marginRight: 5, marginBottom: 0 }}
                >
                  Unidade
                </Typography>
                <Select
                  value={unidade}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.select}
                >
                  <MenuItem value={0}>1</MenuItem>
                  <MenuItem value={1}>2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Navbar>
        </Grid>
        <Grid item xs={12} className={classes.box}>
          <Unidades />
        </Grid>
      </Grid>
    </Box>
  );
});

export default PDI;
