import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'components/LeftBoard';

interface U2 {
  hidden?: boolean;
}

const U2: React.FC<U2> = observer(({ hidden }) => {
  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography>Unidade 2</Typography>
          <Typography variant="subtitle2">Parte ainda em construção</Typography>
        </Grid>
        <Grid item xs={2}>
          <Leftboard
            options={[
              'capítulo 2.1',
              'capítulo 2.2',
              'capítulo 2.3',
              'capítulo 2.4',
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default U2;
