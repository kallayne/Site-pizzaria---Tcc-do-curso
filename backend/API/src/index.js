import 'dotenv/config';

import  express  from 'express';
import  cors     from 'cors'


                   // import endpoints

// endpoints adm {

import tipo       from './admin/controller/tipoprodutocontroller.js'
import restricao  from'./admin/controller/restricaocontroller.js'
import produto    from './admin/controller/produtocontroller.js'
import usuario    from './admin/controller/usuariocontroler.js'
//  }
 

// edpoints usuario {
import avaliacao  from './user/controller/avaliacao.js'
import media      from './user/controller/media.js';
import favoritos  from './user/controller/favorito.js'
import comentario from './user/controller/comentarioController.js'
import endereco   from './user/controller/enderecoController.js'
import cliente    from './user/controller/clienteController.js'

// }


const server = express()
server.use(cors())
server.use(express.json())

server.use('/storage/produto', express.static('storage/produto'));


server.use(tipo)
server.use(comentario)
server.use(endereco)
server.use(cliente)
server.use(restricao)
server.use(produto)
server.use(usuario)
server.use(avaliacao)
server.use(media)
server.use(favoritos)


server.listen ( process.env.PORT , ()=>{
    console.log(` A API esta online na porta ${process.env.PORT}`)
})
