import React from 'react';
import { Box, Divider, Grid, Link, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import Leftboard from 'components/LeftBoard';
import Highlight from 'react-highlight';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import bebe from 'assets/pdi/U1/bebe.png';
import regions from 'assets/pdi/U1/regions.png';
import trocaregioes from 'assets/pdi/U1/trocaregioes.png';
import bolhas from 'assets/pdi/U1/bolhas.png';
import labeling0 from 'assets/pdi/U1/labeling0.png';
import labeling1 from 'assets/pdi/U1/labeling1.png';
import equalize from 'assets/pdi/U1/equalize.png';
import motion from 'assets/pdi/U1/motion.gif';
import c5l from 'assets/pdi/U1/c5l.png';
import c5lg from 'assets/pdi/U1/c5lg.png';
import c5o from 'assets/pdi/U1/c5o.png';
import tsimg from 'assets/pdi/U1/tsimg.gif';
import tsvideo from 'assets/pdi/U1/tsvideo.gif';

interface U1 {
  hidden?: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: '#0E4B82',
      marginLeft: 5,
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none',
        alignItens: 'center',
      },
    },
  })
);

const U1: React.FC<U1> = observer(({ hidden }) => {
  const classes = useStyles();

  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography>Unidade 1 - Atividades práticas</Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Região Negativa" variant="h5">
            Região negativa
          </Typography>
          <Typography variant="body2">
            Em resumo, o exercicio pedia que dado dois pontos fornecidos pelo
            usuário dentro do limite do tamanho da imagem, o programa retornaria
            aquela região com um efeito "negativo".
          </Typography>
          <Typography variant="body2">
            O usuário ao iniciar o programa é solicitado tais posições, por
            exemplo: "por favor, digitar uma coordenada dentro do limine, onde x
            = 256 e y = 256 x1= 100 y1=100 x2=200 y2=200", onde x1,x2,y1,y2 são
            os dados fornecidos pelo usuário?
          </Typography>
          <Typography variant="body2">
            Para garantir que o usuário passe dados válidos, faz-se a seguinte
            verificação
          </Typography>
          <Highlight language="python">
            {`
  while(1):
      x1 = int(input("x1="))
      if x1 < 0 or x1 > w :
          print("valor errado, digitar novamente")
      else:
          break

  while(1):
      y1 = int(input("y1="))
      if y1 < 0 or y1 > h :
          print("valor errado, digitar novamente")
      else:
          break
  while(1):
      x2 = int(input("x2="))
      if x2 < 0 or x2 > w:
          print("valor errado, digitar novamente")
      else:
          break

  while(1):
      y2 = int(input("y2="))
      if y2 < 0 or y2 > h:
          print("valor errado, digitar novamente")
      else:
          break`}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            E só após as verificações ocorre a inversão das cores:
          </Typography>
          <Highlight language="python">
            {`
  for i in range(y1, y2, 1):
    for j in range(x1, x2, 1):
        img[i][j] = 255 - img[i][j]
            `}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Retornando os seguintes reulstados:
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img alt="" style={{ margin: '0 auto' }} src={bebe} />
            <Typography variant="caption">Figura 1: Foto original</Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img alt="" style={{ margin: '0 auto' }} src={regions} />
            <Typography variant="caption">
              Figura 2: Foto após a execução
            </Typography>
          </Box>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/regions.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Troca de Regiões" variant="h5">
            Troca de Regiões
          </Typography>
          <Typography variant="body2">
            Neste outro exercício foi pedido que os quadrantes de uma imagem
            fossem trocadas. Ao iniciar o programa, o mesmo coleta o número de
            linas e colunas e as divide por dois para pegar até o meio da
            imagem:
          </Typography>
          <Highlight language="python">
            {`
  h, w = img.shape[:2]
  mx, my = int(w/2), int(h/2)
            `}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Após isso, o programa faz a troca de pixels de região para região da
            seguinte maneira:
          </Typography>
          <Highlight language="python">
            {`
  for i in range(0, mx, 1):
    for j in range(0, my, 1):
        aux = img[i][j]
        img[i][j] = img[mx + i][my + j]
        img[mx + i][my + j] = aux

  for i in range(mx, w, 1):
    for j in range(0, my, 1):
        aux = img[i][j]
        img[i][j] = img[i-mx][my + j]
        img[i-mx][my + j] = aux
            `}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Utilizando a mesma imagem do exemplo anterios de "Região Negativa",
            retorna o seguintes resultado:
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img alt="" style={{ margin: '0 auto' }} src={trocaregioes} />
            <Typography variant="caption">
              Figura 3: Regiões trocadas
            </Typography>
          </Box>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/trocaregioes.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Labeling" variant="h5">
            Labeling
          </Typography>
          <Typography variant="body2">
            Neste programa é rquisitado duas soluções, a primeira onde é
            levantado o questiornamento que aso existam mais de 255 objetos na
            cena, o processo de rotulação poderá ficar comprometido.
          </Typography>
          <Typography variant="body2">
            No caso, cada vez que o programa executa um ciclo, o objeto
            encontrado é pintado de acordo com o valor do contador, mostrando um
            degradê de cinza. Assim, quando o contador atingir o valor 255, o
            mesmo retornaria um erro pelo valor estar fora do range 0-254.
          </Typography>
          <Typography variant="body2">
            A solução proposta foi que a cor a ser pitada o objeto, fosse a
            resultante do resto da divisão por 254, assim por mais que o numero
            cresça, ele jamais será maior que 254.
          </Typography>
          <Typography variant="body2">
            A segunda solução, seria para aprimorar o programa para que fizesse
            uma identificação de regiões com ou sem buracos internos que existam
            na cena e também que algoritmo para não contar bolhas que tocam as
            bordas da imagem.
          </Typography>
          <Typography variant="body2">
            A priori, para retirar as bolhas as quais tocam as bordas da imagem
            executa o seguinte passo para retira-las:
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img alt="" style={{ margin: '0 auto' }} src={bolhas} />
            <Typography variant="caption">Figura 4: Foto original</Typography>
          </Box>
          <Highlight language="python">
            {`
  for i in range(0, w, 1):
    if img[0,i] != 0:
        cv2.floodFill(img, mask, (i,0), 0)

  for i in range(0, w, 1):
    if img[h-1,i] != 0:
        cv2.floodFill(img, mask, (i,h-1), 0)

  for i in range(0, h, 1):
    if img[i,0] != 0:
        cv2.floodFill(img, mask, (0,i), 0)

  for i in range(0, h, 1):
    if img[i,w-1] != 0:
        cv2.floodFill(img, mask, (w-1,i), 0)
`}
          </Highlight>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={labeling0}
            />
            <Typography variant="caption">
              Figura 5: Foto sem bolhas nas bordas
            </Typography>
          </Box>
          <Typography variant="body2">
            Para fazer a contagem de todas as bolhas restantes, faz-se uma
            varredura onde cadas bolha encontrada é pintada de um tom de cinza,
            variante do restante do contador%254, mencionado anteriormente:
          </Typography>
          <Highlight language="python">
            {`
  contador = 0
  for i in range(0, h, 1):
      for j in range(0, w, 1):
          if img[i,j] == 255:
              contador+=1
              cv2.floodFill(img, mask, (j,i), contador%254)`}
          </Highlight>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={labeling1}
            />
            <Typography variant="caption">
              Figura 6: Foto após o labeling
            </Typography>
          </Box>
          <Typography variant="body2">
            E para contar todas as bolhas que tem no mínimo um furo, foi
            utilizado a função do opencv findContours, que retorna todos os
            contornos encontrados e uma heirarquia, que me diz se há furos.
          </Typography>
          <Highlight language="python">
            {`
  contours, hierarchy = cv2.findContours(img, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
  contador2 =0
  for i in range(len(contours)):
      if hierarchy[0][i][2] !=-1:
          contador2+=1
`}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Ao final ambos os contadores são mostrados ao usuário, mostrando o
            total de bolhas, o numero de bolhas com e sem furos.
          </Typography>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/labeling.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Equalização de Histograma" variant="h5">
            Equalização de Histograma
          </Typography>
          <Typography variant="body2">
            Neste exercício o programa deverá, para cada imagem capturada,
            realizar a equalização do histogram antes de exibir a imagem.
          </Typography>
          <Typography variant="body2">
            Fazendo a captura da câmera do notebook para a aquisição das imagens
            a através do código abaixo:
          </Typography>
          <Highlight language="python">
            {`
  cap = cv2.VideoCapture(0)
  if (cap.isOpened() == False): 
    print("Error reading video file") 
`}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            E com isso, gerar um loop para que sejam pegas imagens de forma
            constante:
          </Typography>
          <Highlight language="python">
            {`
  while(True):
  ret, img = cap.read(0)
  img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  equ = cv2.equalizeHist(img)
  res = np.hstack((img,equ))
  cv2.imshow('Source image', res)
  cv2.imwrite('equalize.png', res)

  if cv2.waitKey(1) & 0xFF == ord('q'):
      break
`}
          </Highlight>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={equalize}
              width="50%"
            />
            <Typography variant="caption">
              Figura 7: Diferença entre a imagem original(esquerda) e a
              equalizada
            </Typography>
          </Box>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/equalize.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Detecção de Movimento" variant="h5">
            Detecção de Movimento
          </Typography>
          <Typography variant="body2">
            Ainda utilizando de manipulação de histogramas, o proximo exercício
            será um programa que deverá continuamente calcular o histograma da
            imagem e compará-lo com o último histograma calculado. Quando a
            diferença entre estes ultrapassar um limiar pré-estabelecido,
            ativará um alarme.
          </Typography>
          <Typography variant="body2">
            Para o nosso programa a tolerancia escolhida foi 5, esse numero é
            calculado dentro da aplicação comparando os dois histogramas de duas
            imagens, uma antiga e uma nova subsequente. Assim que essa diferença
            for ultrapassada, ficará uma faixa vermelha nos cantos da imagem
          </Typography>
          <Typography variant="body2">
            Calculo do primeiro histograma
          </Typography>
          <Highlight language="python">
            {`
  ret, img = cam.read()
  Hist1 = cv2.calcHist([img], [0], None, [256], [0, 256])
`}
          </Highlight>
          <Typography variant="body2" style={{ marginTop: 25 }}>
            Calculo do segundo histograma e sua comparação
          </Typography>
          <Highlight language="python">
            {`
  while(1):
  ret, img = cam.read()
  if ret:
      hist2 = cv2.calcHist([img], [0], None, [256], [0, 256])
      histDiff = Hist1 - hist2
      comp = cv2.compareHist(Hist1, hist2, cv2.HISTCMP_CHISQR)
      print(int(comp)/1000)
      Hist1 = cv2.calcHist([img], [0], None, [256], [0, 256])
      if int(comp)/1000 > 5:
          cv2.rectangle(img, (0, 0), (width-1, height-1), (0, 0, 255), 10)
      cv2.imshow("Video", img)

      if cv2.waitKey(1) & 0xFF == ord('q'):
          break`}
          </Highlight>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={motion}
              width="50%"
            />
            <Typography variant="caption">
              Figura 8: Resultado da detecção
            </Typography>
          </Box>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/motiondetector.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Filtro Espacial" variant="h5">
            Filtro Espacial
          </Typography>
          <Typography variant="body2">
            Neste exercício foi proposto um programa deverá calcular o
            laplaciano do gaussiano das imagens fornecidas/capturadas. Foi
            pedido também que comparasse o resultado desse filtro com a simples
            aplicação do filtro laplaciano.
          </Typography>
          <Typography variant="body2">
            Com um exemplo já fornecido, a princípio deveria ser adicionado um
            novo filtro, como pode ver na imagem abaixo, na imagem é aplicado 2
            filtros para gerar o efeito desse novo filtro, aplicando um filtro
            gaussiano e logo após no resultado é aplicado um filtro laplaciano:
          </Typography>
          <Highlight language="python">
            {`
    if laplaGauss:
    img = cv2.filter2D(img, -1, gauss)
    img = cv2.filter2D(img, -1, laplacian)
    cv2.imshow("Video", img)`}
          </Highlight>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={c5o}
              width="50%"
            />
            <Typography variant="caption">Figura 9: Imagem original</Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={c5l}
              width="50%"
            />
            <Typography variant="caption">
              Figura 10: Imagem com filtro laplaciano
            </Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={c5lg}
              width="50%"
            />
            <Typography variant="caption">
              Figura 11: Imagem com filtro laplaciano-gaussiano
            </Typography>
          </Box>
          <Typography variant="body2">
            Com a aplicação dos dois filtros percebe-se uma redução no encontro
            de falsas arestas, o que aparenta uma resultado mais "limpo", devido
            ao filtro gaussiano que borra a imagem.
          </Typography>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/laplgauss.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Tilt Shift em Imagens" variant="h5">
            Tilt Shift em Imagens
          </Typography>
          <Typography variant="body2">
            Nesta seção será demonstrado o desenvolvimento de um programa que
            produz o efeito de tilt-shift. Para esta atividade deverão ser
            feitos três ajustes na interface, sendo eles: um ajuste para regular
            a altura da região central que entrará em foco, um ajuste para
            regular a força de decaimento da região borrada e, por ultimo, um
            ajuste para regular a posição vertical do centro da região que
            entrará em foco. Por fim, ao fim da execução, ao se apertar a tecla
            'Q', a imagem produzida será salva em arquivo, chamado
            'ts-image.png'.
          </Typography>
          <Typography variant="body2">
            A promeira etapa do código é destinada à criação da janela de
            exibição e dos sliders, que são resposáveis pelos ajustes na imagem,
            como mostrado no trecho de código abaixo.
          </Typography>
          <Highlight language="python">
            {`
  def count(x):
  x = x+1
  cv2.namedWindow('tiltshift')
  cv2.createTrackbar('Alfa', 'tiltshift', 0, 100, count)
  cv2.createTrackbar('Center', 'tiltshift', 0, 100, count)
  cv2.createTrackbar('Height', 'tiltshift', 0, 100, count)`}
          </Highlight>
          <Typography variant="body2">
            Posteriormente, os slides criados foram inseridos na janela da
            interface, e seus valores, escolhidos pelo usuário, são aplicados em
            uma imagem, que no código é denominada blended. A partir dos ajustes
            setados pelo usuário, é possível calcular os pontos superior
            esquerdo e inferior direito, sendo assim possível a construção da
            janela. Como dito acima, ao ser precionada a tecla 'Q', a imagem
            final é salva. O trecho de código abaixo demosntra essa explicação.
          </Typography>
          <Highlight language="python">
            {`
  while True:
    alfaS = cv2.getTrackbarPos('Alfa', 'tiltshift')
    centerS = cv2.getTrackbarPos('Center', 'tiltshift')
    heightS = cv2.getTrackbarPos('Height', 'tiltshift')

    p1 = (max(0, int((centerS-heightS/2.0)/100.0*height)), 0)
    p2 = (min(height-1, int((centerS+heightS/2.0)/100.0*height)), width-1)

    imgTop = bg.copy()
    imgTop[p1[0]:p2[0], p1[1]:p2[1], :] = img.copy()[p1[0]:p2[0],
                                                      p1[1]:p2[1], :]
    blended = cv2.addWeighted(bg, float(
        alfaS/100), imgTop, 1-float(alfaS/100), 0)

    cv2.imshow('tiltshift', blended)
    cv2.imwrite('ts-image.png', blended)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
`}
          </Highlight>
          <Typography variant="body2">
            O vídeo abaixo é uma demonstração da execução desta aplicação, e
            logo abaixo, a imagem que foi salva.
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={tsimg}
              width="50%"
            />
            <Typography variant="caption">
              Figura 12: Tilt Shift Image
            </Typography>
          </Box>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/tilt-shift-image.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
          <Typography id="Tilt Shift em Vídeos" variant="h5">
            Tilt Shift em Vídeos
          </Typography>
          <Typography variant="body2">
            Neste útimo tópico desta primeira unidade, foi solicitado uma versão
            da aplicação anterior para vídeos. Em comparação à aplicação com
            imagens, esta tem poucas mudanças: o programa recebe apenas uma
            imagem, sendo esta a de background. O que seria a outra imagem,
            agora é um vídeo capturado pela câmera principal do sistema. Todo o
            restante da aplicação permanece o mesmo mostrado anteriormente.
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <img
              alt=""
              style={{ margin: '0 auto', marginTop: 25 }}
              src={tsvideo}
              width="50%"
            />
            <Typography variant="caption">
              Figura 13: Tilt Shift video
            </Typography>
          </Box>
          <Typography variant="body2">
            Arquivo pode ser encontrado
            <Link
              href="https://github.com/LucasAzLima/operncv-python/blob/main/tilt-shift-video.py"
              target="_blank"
              className={classes.link}
            >
              aqui
            </Link>
          </Typography>
          <Divider style={{ marginTop: 25, marginBottom: 25 }} />
        </Grid>
        <Grid item xs={2}>
          <Leftboard
            options={[
              'Região Negativa',
              'Troca de Regiões',
              'Labeling',
              'Equalização de Histograma',
              'Detecção de Movimento',
              'Filtro Espacial',
              'Tilt Shift em Imagens',
              'Tilt Shift em Vídeos',
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default U1;
