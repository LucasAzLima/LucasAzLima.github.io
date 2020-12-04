import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'components/LeftBoard';

interface U3 {
  hidden?: boolean;
}

const U3: React.FC<U3> = observer(({ hidden }) => {
  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography>Unidade 3</Typography>
          <Typography variant="subtitle2">Parte ainda em construção</Typography>
        </Grid>
        <Grid item xs={2}>
          <Leftboard
            options={[
              'capítulo 3.1',
              'capítulo 3.2',
              'capítulo 3.3',
              'capítulo 3.4',
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default U3;
