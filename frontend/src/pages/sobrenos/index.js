import '../../assets/config/fonts-config.scss'
import './App.scss';
import fundo6 from '../../images/fundo6.jpg'

import RestauranteComp from '../../assets/img/restaurante comp.png'
import restaurante from '../../images/restaurante.png'
import pizza from '../../images/fundo.png'
import Cabecalho from '../../components/user/cabecalho';
import Rodape from '../../components/user/rodape';
import CompSobre from '../../components/compSobre'
import { useState } from 'react';

export default function SobreNos() {

  const [mostrarBotao, setMostrarBotao] = useState(false);

  return (
    <div className="App">

      <Cabecalho />

      <div className='contaiiner'>
        <h1 className='titulo'>Nossa historia</h1>
        <h2 className='subtitulo'>CORLEONE’S PIZZA </h2>
      </div>






      <div className='texto-container'>

        <img src={restaurante} alt="Imagem do Restaurante" className="img-restaurante" />

        <div className='texto'>
          <div className='titulo2'>
            <h1 >Descubra a Essência da Itália no Coração do Brasil!</h1>
          </div>
          <h2 className='subtitulo2'>Na Corleone Pizzaria, mergulhamos fundo na cultura italiana para trazer até você a verdadeira experiência gastronômica da Itália. Nossa paixão pela culinária italiana transborda em cada detalhe, desde os ingredientes autênticos até a preparação artesanal de nossas deliciosas pizzas.</h2>
        </div>

      </div>



      <div className='secao-intermediaria'>
        <h2>Somos uma empresa que nasceu do desejo de compartilhar a riqueza da cultura italiana com o Brasil. Cada pizza que sai de nossa cozinha é uma homenagem à tradição, ao amor pela comida e à convivialidade italiana. Valorizamos a qualidade dos ingredientes e a autenticidade dos sabores, para que você possa se transportar diretamente para as encantadoras ruas de Roma, Nápoles ou Florença</h2>
      </div>


      <div className='subtitulo3'>
        <div className='texto3'>
          <h2 >Nossas pizzas são preparadas com a dedicação e o cuidado que só uma pizzaria italiana legítima pode oferecer. Desde a massa artesanal, amassada à mão, até o molho de tomate caseiro, cada etapa é executada com maestria para garantir uma experiência gastronômica única.</h2>
          <h2 >Além de nossas pizzas tradicionais, trazemos um toque de inovação, combinando ingredientes locais e inspirações brasileiras. Assim, criamos sabores exclusivos que agradam a todos os paladares. Nosso objetivo é encantar você com a fusão perfeita entre a tradição italiana e a criatividade brasileira.</h2>
        </div>
        <img src={pizza} />
      </div>


      <div className='comp'>
        <CompSobre  
        imagem={RestauranteComp}
        titulo="A Corleone Pizzaria"
        subTitulo="O Sabor Autêntico da Itália!"
        primeiroTexto="Quando você escolhe a Corleone Pizzaria, não está apenas saboreando uma pizza excepcional, mas também fazendo parte de nossa história. Somos uma empresa comprometida em proporcionar momentos memoráveis, reunindo famílias e amigos em torno da mesa, celebrando a vida e compartilhando risadas."
        segundoTexto="Convidamos você a se juntar a nós nesta jornada gastronômica única. Deixe-nos transportar você para a Itália, mesmo que esteja a milhares de quilômetros de distância. Descubra a magia da culinária italiana, com um toque especial do Brasil, na Corleone Pizzaria."
        />
        
      </div>

      <Rodape />



    </div>

  );
}

