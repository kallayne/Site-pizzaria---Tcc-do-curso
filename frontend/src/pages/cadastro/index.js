import './index.scss'
import Fundo from '../../assets/img/fundopizza.png'
import SetaEsquerda from '../../assets/img/seta-branca 1.png'
import Google from '../../assets/img/google 1.png'
import Facebook from '../../assets/img/Vector.png'
import Instagram from '../../assets/img/insta 1.png'
import Iphone from '../../assets/img/maca 1.png'

import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="pag-cadastro">
      <div className='container'>
        <div className='esquerda'>
          <div className='sair'>
            <img src={SetaEsquerda} />
            <p>Voltar</p>
          </div>

          <div className='bemvindo'>
            <h1>Bem-vindo<br/> de volta</h1>
            <p>Acesse sua conta agora <br/> mesmo.</p>
            <Link to='/login'>
            <button>Entrar</button>
            </Link>
            <a href=''>Esqueceu a senha?</a>
          </div>

        </div>


        <div className='direita'>
          <h2>Crie sua conta</h2>

          <div className='divisao'>
            <div></div>
            <p>Acesso Rápido</p>
            <div></div>
          </div>

          <div className='plataformas'>
            <div>
              <a href=''><img src={Google} /></a>
            </div>

            <div>
              <a href=''><img src={Facebook} /></a>
            </div>

            <div>
              <a href=''><img src={Instagram} /></a>
            </div>

            <div>
              <a href=''><img src={Iphone} /></a>
            </div>
          </div>


          <div className='divisao'>
            <div></div>
            <p>Ou</p>
            <div></div>
          </div>

          <div className='inputs'>
            <div>
              <input type='text' placeholder='Nome Completo' />
            </div>

            <div>
              <input type='text' placeholder='E-mail'/>
            </div>

            <div>
              <input type='text' placeholder='Telefone'/>
            </div>

            <div>
              <input type='text' placeholder='Senha'/>
            </div>
          </div>

          <Link to='/cadastroPart2'>
          <div className='final'>
            <button>Criar conta</button>
            <p>Ao criar uma conta, você concorda com nossos<br/> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
          </div>
          </Link>

        </div>



      </div>
    </div>
  );
}

export default App;
