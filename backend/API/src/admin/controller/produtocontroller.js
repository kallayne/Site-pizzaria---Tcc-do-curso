

import { Router } from 'express';
import {
  inserirProduto,
  listarProdutos,
  editarproduto,
  excluirProduto,
  imagem,
  verificarproduto,
} from '../repository/produtorepository.js';

import multer from 'multer';
import { analise } from './analise.js';
const upload = multer({ dest: 'storage/produto' });

const endpoints = Router();



endpoints.post('/produto', async (req, resp) => {
  try {
    const produto = req.body;
    const verificar = await analise(produto)
    if (verificar.length > 0) {
      resp.status(400).send({ erro: verificar });

    } 
      else {
  
      if (verificar === true) {
        resp.status(400).send({ erro: 'Produto já cadastrado' });
      } else {
        const resposta = await inserirProduto(produto);
        resp.send(resposta);
      }
    }

  } catch (err) {
    resp.status(500).send({ erro: err.message });
  }
  
});



endpoints.get('/produto', async (req, resp) => {
  try {

    const produtos = await listarProdutos();
    resp.send(produtos);

  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }

});






endpoints.put( '/produto/editar/:id' , async (req,resp) =>{

  try {
    
    const { id }  = req.params
    const produto = req.body

    const verificar = await analise(produto)

   if( verificar.length > 0){
       resp.status(400).send({erro: verificar})
    }
        else{
            const resposta = await editarproduto( produto , id ) 
            if( resposta === 0){
              resp.status(400).send({err: "produto não encontrado"})
            }

            else{
              resp.status(200).send({message:'produto alterado com sucesso'})
            }
        } 
 
  }  catch (err) {
    resp.status(400).send({erro:err.message})
  }


})





endpoints.put( '/produto/editar/campos/:idproduto' , async (req,resp)=>{

  try {
    const {id} = req.params
    const produto = req.body

    const verificar = await analise(produto)

    if(verificar.length > 0 ){
      resp.status(400).send({erro:verificar})
    }
    else{
      const resposta = await editarprodutocomleto(produto , id)
      if( resposta === 0){
        resp.status(400).send({err: "produto não encontrado"})
     } 
     else{
     resp.status(200).send({message:'produto alterado com sucesso'})
    }
    }
  } catch (err) {
    resp.status(400).send({})
  }
})




  
  endpoints.delete('/produto/:id', async (req, resp) => {
    try {
      const { id } = req.params;
      const resposta = await excluirProduto(id);
  
      if (resposta === 0) {
        resp.status(404).send({ message: 'Produto não encontrado' });
      } else {
        resp.status(200).send({ message: 'Produto excluído com sucesso' });
      }
    } catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  });



endpoints.post('/produto/:id/capa', upload.single('capa'), async (req, resp) => {
  try {
    const { id } = req.params;
    const image = req.file.path;
    const resposta = await imagem(image, id);

    if (resposta != 1) {
      console.log( 'imagem nao pode ser salva')
    }
   

    resp.status(204).send();
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

  
endpoints.put( '/imagem/editar/:id' , async (req,resp) =>{

  try {
    const { id }  = req.params
    const imagem = req.body.img_produto; 
    const r = await alterarImagem(id, imagem)

    resp.status(200).send('imagem alterada')
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }

})



  export default endpoints;

