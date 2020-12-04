import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'pages/PDI/LeftBoard';

interface U2 {
  hidden?: boolean;
}

const U2: React.FC<U2> = observer(({ hidden }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }} hidden={hidden}>
      <Box style={{ backgroundColor: 'lime' }}>
        <Typography>Unidade 2</Typography>
      </Box>
      <Leftboard options={['teste1', 'teste2', 'teste3', 'teste4']} />
    </Box>
  );
});

export default U2;
