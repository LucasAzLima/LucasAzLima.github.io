import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'components/LeftBoard';

interface U1 {
  hidden?: boolean;
}

const U1: React.FC<U1> = observer(({ hidden }) => {
  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography>Unidade 1</Typography>
          <Typography variant="subtitle2">Parte ainda em construção</Typography>
        </Grid>
        <Grid item xs={2}>
          <Leftboard
            options={[
              'capítulo 1.1',
              'capítulo 1.2',
              'capítulo 1.3',
              'capítulo 1.4',
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default U1;
