import React from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Highlight from 'react-highlight';

import Leftboard from 'components/LeftBoard';
import lennapoint from 'assets/pdi/U2/lennapoint.png';
import kmeans from 'assets/pdi/U2/kmeans.gif';

interface U2 {
  hidden?: boolean;
}

const U2: React.FC<U2> = observer(({ hidden }) => {
  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography>Unidade 2</Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography
            id="Detecção de bordas com o algoritmo de Canny"
            variant="h5"
          >
            Detecção de bordas com o algoritmo de Canny
          </Typography>
          <Typography variant="body2">
            Entrando nos processos utilizando o algoritimo de canny, o exercicio
            proposto tinha como idéia usar as bordas produzidas pelo algoritmo
            de Canny para produzir uma imagem pontilhista, semelhante aos
            quadros que utilizam dessa técnica.
          </Typography>
          <Typography variant="body2">
            A técnica desenvolvida foi bem simples, com os pontos gerados pelo
            algoritimo numa imagem escolhida, ocorre uma varredura pela imagem
            onde é procurado pontos com valor 255, que significa que é um ponto
            de canny. A partir disso é desenhado um circulo com a cor original
            daquele ponto, com isso, criando uma imagem pontilhada nova.
          </Typography>
          <Highlight language="python">
            {`
  img = cv2.imread('lenna.png', 0)
  h, w = img.shape[:2]
  def canny(n=10):
      edges = cv2.Canny(img, n, n*3)
      empty = np.zeros((h, w), dtype=np.uint8)
      empty[:,:] = 255
      for i in range(0, len(edges), 1):
          for j in range(0, len(edges[i]), 1):
              if edges[i, j] == 255:
                  cv2.circle(empty, (j,i), 3, int(img[i, j])+20,-1,cv2.LINE_AA)
`}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Retornando o seguinte reulstado:
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img style={{ margin: '0 auto' }} src={lennapoint} />
            <Typography variant="caption">
              Figura 1: comparação imagem original(esquerda) e a com a tecnica
              pontilhista
            </Typography>
          </Box>

          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Quantização vetorial com K-means" variant="h5">
            Quantização vetorial com K-means
          </Typography>
          <Typography variant="body2">
            No exercício proposto, o programa deveria rodar o algoritimo de
            k-means usando o parâmetro nRodadas=1 e inciar os centros de forma
            aleatória. Devia-se realizar 10 rodadas diferentes do algoritmo e
            comparar as imagens produzidase por fim, explicar o porque elas
            podem diferir tanto.
          </Typography>
          <Typography variant="body2">
            Com o algoritimo para rodar no python feito:
          </Typography>
          <Highlight language="python">
            {`
  img = cv.imread('sushi.jpg')
  h, w = img.shape[:2]
  Z = np.zeros((h*w, 3))
  Image = np.zeros((h, w, 3), dtype=np.uint8)
  Z = np.float32(Z)
  bgrImage = cv.split(img)

  for y in range(0, h, 1):
      for x in range(0, w, 1):
          for z in range(3):
              Z[y +x*h][z] = bgrImage[z][y][x]

  criteria = (cv.TermCriteria_MAX_ITER | cv.TermCriteria_EPS, 10000, 0.0001)

  for i in range(10):
      ret,label,center=cv.kmeans(Z,8,None,criteria,1,cv.KMEANS_RANDOM_CENTERS)
      for y in range(0, h, 1):
          for x in range(0, w, 1):
              indice = label[y +x*h][0]
              Image[y][x][0] = int(center[indice][0])
              Image[y][x][1] = int(center[indice][1])
              Image[y][x][2] = int(center[indice][2])
      cv.imwrite('sushi/img{}.png'.format(i), Image)
`}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Os resultados das 10 rodadas com o centro aleatório podemos ver
            abaixo em forma de gif para facilitar a visualização.
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img style={{ margin: '0 auto' }} src={kmeans} />
            <Typography variant="caption">
              Figura 2: Imagem gerada agrupando as 10 umagens geradas pelo
              algoritimo
            </Typography>
          </Box>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Como já é notório no gif, as imagens possuem uma difernça rezoável
            entre si. Isso ocorre pois pegando centros aleatórios e por ter
            somente uma tentativa, essa aleatóriedade acaba gerando tantos
            resultados diferentes, visto que com mais tentativas o algoritmo
            retorna o valor que mais se aproximou entre todas as tentativas, e
            por haver somente uma, o algoritimo não tem como fazer tal
            comparação.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Leftboard
            options={[
              'Detecção de bordas com o algoritmo de Canny',
              'Quantização vetorial com K-means',
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default U2;
