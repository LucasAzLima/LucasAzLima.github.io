import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'pages/PDI/LeftBoard';

interface U1 {
  hidden?: boolean;
}

const U1: React.FC<U1> = observer(({ hidden }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }} hidden={hidden}>
      <Box width="100%" style={{ backgroundColor: 'grey' }}>
        <Typography>Unidade 1</Typography>
        <div id="teste1" style={{ marginBottom: 200 }}>
          <p>teste1</p>
        </div>
        <div id="teste2" style={{ marginBottom: 200 }}>
          <p>teste2</p>
        </div>
        <div id="teste3" style={{ marginBottom: 200 }}>
          <p>teste3</p>
        </div>
        <div id="teste4" style={{ marginBottom: 200 }}>
          <p>teste4</p>
        </div>
      </Box>{' '}
      <Leftboard options={['teste1', 'teste2', 'teste3', 'teste4']} />
    </Box>
  );
});

export default U1;
