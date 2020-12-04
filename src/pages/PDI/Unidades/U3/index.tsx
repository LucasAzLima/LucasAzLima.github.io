import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'pages/PDI/LeftBoard';

interface U3 {
  hidden?: boolean;
}

const U3: React.FC<U3> = observer(({ hidden }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }} hidden={hidden}>
      <Box style={{ backgroundColor: 'purple' }}>
        <Typography>Unidade 1</Typography>
      </Box>
      <Leftboard options={['teste1', 'teste2', 'teste3', 'teste4']} />
    </Box>
  );
});

export default U3;
