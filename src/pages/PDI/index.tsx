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

import Navbar from 'components/Layout/Navbar';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Unidades from './Unidades';
import { selectUnidade } from 'state/PDI';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
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
    teste: {
      overflowX: 'hidden',
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
    <Box maxWidth="100vw" maxHeight="100vh" className={classes.teste}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar title="Processamento Digital de Imagens">
            <FormControl className={classes.formControl}>
              <Typography
                variant="body2"
                style={{ color: 'white', marginRight: 5 }}
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
                <MenuItem value={2}>3</MenuItem>
              </Select>
            </FormControl>
          </Navbar>
        </Grid>
        <Grid item xs={12}>
          <Unidades />
        </Grid>
        {/* <Grid item xs={2}>
          <Leftboard options={['teste1', 'teste2', 'teste3', 'teste4']} />
        </Grid> */}
      </Grid>
    </Box>
  );
});

export default PDI;
