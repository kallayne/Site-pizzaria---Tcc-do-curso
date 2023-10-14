 
import { con } from "../../conection.js";

export async function inserirProduto(produto) {
    const comando = `
    INSERT INTO tb_produto (
      ds_tipo_produto	,
       nm_produto , 
       ds_ingredientes  , 
       vl_preco , 
       ds_descricao , 
       vl_preco_promocional , 
       bt_disponivel) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
         
  
    const [res] = await con.query(comando,[
      produto.tipo,
        produto.nome, 
        produto.ingredientes,
        produto.preco,
        produto.descricao,
        produto.preco_promocional,
        produto.disponivel,
    ]);

    produto.id = res.insertId;
  

  if( produto.tipo === 1){
       produto.tipo = "Bebida"
   }

  if(produto.tipo ===2){
     produto.tipo = "Sobremesa"
  }

  if(produto.tipo ===3){
     produto.tipo = "Salgado"
  }
    return produto;
  }


  
  export async function verificarproduto(produto){
    const comando = `
    SELECT
	  tb_produto.id_produto             as ID,
    tb_produto.nm_produto             as Nome,  
    tb_tipo_produto.ds_tipo_produto   as tipo ,
	  tb_produto.vl_preco               as Preço,
	  tb_produto.vl_preco_promocional   as Preço_promocional,
    tb_produto.ds_ingredientes        as ingredientes,
    tb_produto.ds_descricao           as Descrição ,
    tb_produto.bt_disponivel          as disponivel
    FROM tb_produto 
    INNER JOIN
    tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
    where tb_produto.nm_produto = ?
    or   tb_produto.ds_ingredientes =?
    or   tb_produto.ds_descricao = ?`

    const [ resposta ] = await con.query( comando , [
       produto.nome ,
       produto.ingredientes , 
       produto.descricao] )

    return resposta.length > 0;

  }



  export async function listarProdutos() {
    const comando = `
                
    SELECT
    tb_produto.id_produto               as ID,
      tb_produto.nm_produto             as nome,
    tb_tipo_produto.ds_tipo_produto     as tipo,
    tb_produto.ds_ingredientes          as ingredientes,
      tb_produto.ds_descricao           as descricao,
    tb_produto.vl_preco                 as preço,
    tb_produto.vl_preco_promocional     as Preco_promocional,
      tb_produto.bt_disponivel          as disponivel,
      tb_imagem.id_imagem               as idimagem,
      tb_imagem.img_produto             as imagem,
      tb_restricao.id_restricao         as idrestricao,
    tb_restricao.ds_restricao           as restricao
  FROM
      tb_produto
  INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
    `;

    const [res] = await con.query(comando);
    return res;
  }






  export async function listarpornome (nome) {

    const comando = `
    SELECT
    tb_produto.id_produto             as ID,
      tb_produto.nm_produto             as nome, 
    tb_tipo_produto.ds_tipo_produto   as tipo,
    tb_produto.ds_ingredientes        as ingredientes,
      tb_produto.ds_descricao           as descricao,
    tb_produto.vl_preco               as preço,
    tb_produto.vl_preco_promocional   as preco_promocional,
      tb_produto.bt_disponivel          as disponivel,
      tb_imagem.img_produto                  as imagem,
      tb_restricao.id_restricao         as idrestricao,
    tb_restricao.ds_restricao         as restricao
  FROM
      tb_produto
  INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
  where tb_produto.nm_produto like ?
    `
    
  
    const [ resposta ] = await con.query( comando ,[`%${nome}%`])
    return  resposta
  } 


  export async function listarporid(id) {

    const comando = `
    SELECT
    tb_produto.id_produto             as ID,
      tb_produto.nm_produto             as nome, 
    tb_tipo_produto.ds_tipo_produto   as tipo,
    tb_produto.ds_ingredientes        as ingredientes,
      tb_produto.ds_descricao           as descricao,
    tb_produto.vl_preco               as preço,
    tb_produto.vl_preco_promocional   as preco_promocional,
      tb_produto.bt_disponivel          as disponivel,
      tb_imagem.id_imagem               as idimagem,
      tb_imagem.img_produto                 as imagem,
      tb_restricao.id_restricao         as idrestricao,
    tb_restricao.ds_restricao         as restricao
  FROM
      tb_produto
  INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
  where tb_produto.id_produto = ?
    `
     
    const [ resposta ] = await con.query( comando ,[id]);
    
    return  resposta;
  } 


  export async function listarPorRestricao(restricao) {
    const comando = `
    SELECT
    tb_produto.id_produto             as ID,
      tb_produto.nm_produto             as nome, 
    tb_tipo_produto.ds_tipo_produto   as tipo ,
    tb_produto.ds_ingredientes        as ingredientes,
      tb_produto.ds_descricao           as descricao ,
    tb_produto.vl_preco               as preço,
    tb_produto.vl_preco_promocional   as Preco_promocional,
      tb_produto.bt_disponivel          as disponivel,
      tb_imagem.img_produto                 as imagem,
    tb_restricao.ds_restricao         as restricao
  FROM
      tb_produto
  INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
  where tb_restricao.ds_restricao like ?
    `

    const [resposta] = await con.query(comando, [`%${restricao}%`])
    return resposta
  }

 export async function listarpordois(restricao , restricao2)
{
  const comando = `
  SELECT
  tb_produto.id_produto             as ID,
    tb_produto.nm_produto             as nome, 
  tb_tipo_produto.ds_tipo_produto   as tipo ,
  tb_produto.ds_ingredientes        as ingredientes,
    tb_produto.ds_descricao           as descricao ,
  tb_produto.vl_preco               as preço,
  tb_produto.vl_preco_promocional   as Preco_promocional,
    tb_produto.bt_disponivel          as disponivel,
    tb_imagem.img_produto                 as imagem,
  tb_restricao.ds_restricao         as restricao
FROM
    tb_produto
INNER JOIN
      tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
where tb_restricao.ds_restricao like ?
and   tb_restricao.ds_restricao like ?
  `

  const [resposta] = await con.query(comando, [`%${restricao}%`,"%"+{restricao2}+"%"])
  return resposta 
}

  export async function listarcomentarioid(id){
    const comando = `
 

    select tb_produto.id_produto     as id_produto,    
    tb_produto.nm_produto     as produto,    
      tb_comentario.id_avaliacao as avaliacao
    from tb_produto
    left JOIN tb_comentario ON tb_comentario.id_produto = tb_produto.id_produto
    where tb_produto.id_produto = ?
    `
   const [resposta] = await con.query(comando,[id])
   return resposta
  }


  export async function listarportipo ( tipo ){
    const comando = `
    SELECT
    tb_produto.id_produto             as ID,
      tb_produto.nm_produto             as nome, 
    tb_tipo_produto.ds_tipo_produto   as tipo ,
    tb_produto.ds_ingredientes        as ingredientes,
      tb_produto.ds_descricao           as descricao ,
    tb_produto.vl_preco               as preço,
    tb_produto.vl_preco_promocional   as Preco_promocional,
      tb_produto.bt_disponivel          as disponivel,
      tb_imagem.img_produto             as imagem,
    tb_restricao.ds_restricao         as restricao
  FROM
      tb_produto
  INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
  where tb_tipo_produto.ds_tipo_produto like ?
    `
  
  const [ resposta ] = await con.query( comando , ["%"+tipo+"%"])
  return resposta
  }

  
  
export async function listarporcomentario(){
const comando = `
SELECT
tb_produto.id_produto             as ID,
  tb_produto.nm_produto             as nome, 
tb_tipo_produto.ds_tipo_produto   as tipo,
tb_produto.ds_ingredientes        as ingredientes,
  tb_produto.ds_descricao           as descricao,
tb_produto.vl_preco               as preço,
tb_produto.vl_preco_promocional   as preco_promocional,
  tb_produto.bt_disponivel          as disponivel,
  tb_imagem.img_produto             as imagem,
  tb_restricao.id_restricao         as idrestricao,
tb_restricao.ds_restricao         as restricao,
tb_comentario.ds_comentario       as comentario,
 tb_comentario.id_avaliacao        as avaliacao
FROM
  tb_produto
INNER JOIN
    tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
left JOIN tb_comentario ON tb_comentario.id_produto = tb_produto.id_produto
where tb_produto.id_produto = ?;

`

const [ resp ] = await con.query(comando)
return  resp
}
  
 export async function editarproduto ( produto , id ){

  const comando = `
  UPDATE tb_produto
  INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  SET
      tb_produto.nm_produto = ?,
      tb_tipo_produto.ds_tipo_produto = ?,
      tb_produto.ds_ingredientes = ?,
      tb_produto.vl_preco = ?,
      tb_produto.ds_descricao = ?,
      tb_produto.vl_preco_promocional = ?,
      tb_produto.bt_disponivel = ?
  WHERE tb_produto.id_produto = ?`


  const [ resposta ] = await con.query( comando , [
        produto.nome,
        produto.tipo,
        produto.ingredientes,
        produto.preco,
        produto.descricao,
        produto.preco_promocional,
        produto.disponivel,
        id
  ])

if( produto.tipo === 1){
      produto.tipo = "Bebida"
}

if(produto.tipo ===2){
  produto.tipo = "Sobremesa"
}

if(produto.tipo ===3){
  produto.tipo = "Salgado"
}
  return resposta

 }

 /*export async function editarprodutocomleto ( produto , imagem , id ){

  const comando = `
  UPDATE tb_produto
  INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
  SET
      tb_produto.nm_produto = ?,
      tb_tipo_produto.ds_tipo_produto = ?,
      tb_produto.ds_ingredientes = ?,
      tb_produto.vl_preco = ?,
      tb_produto.ds_descricao = ?,
      tb_produto.vl_preco_promocional = ?,
      tb_produto.bt_disponivel = ?,
      tb_restricao.ds_restricao  =?,  
    tb_imagem.img_produto    =  ?    
  WHERE tb_produto.id_produto = ?
  and   tb_restricao.id_restricao=?
  and   tb_imagem.id_imagem = ?`


  const [ resposta ] = await con.query( comando , [
        produto.nome,
        produto.tipo,
        produto.ingredientes,
        produto.preco,
        produto.descricao,
        produto.preco_promocional,
        produto.disponivel,
        produto.restricao,
        imagem,
        id,
        produto.id_restricao,
        produto.id_imagem
  ])

  return resposta
}*/

export async function listarImagem() {
  const comando = `
    SELECT id_imagem 		as idimagem,
      img_produto   	  as imagem
	    FROM tb_imagem
  `

  const [resposta] = await con.query (comando)
  return resposta;

}

  
  export async function excluirProduto(id) {
    const comando = `
      DELETE FROM tb_produto
      WHERE id_produto = ?
    `;
  
    const [res] = await con.query(comando, [id]);
    return res.affectedRows;
  }

  export async function Inseririmagem(imagem, id){

    const comando =
    `INSERT INTO tb_imagem (img_produto, id_produto)
    VALUES (?, ?);
    
    `

    const [ respsta ] =await con.query(comando, [imagem, id])
    return respsta.affectedRows
}


export async function alterarImagem(id, imagem){

  const comando =
  `UPDATE tb_imagem
     SET img_produto      = ?
   WHERE id_imagem        = ?
  `
  
  const [ resposta ] = await con.query(comando, [imagem, id])

  return resposta.affectedRows
}


export async function deletarImagem(imagem, id) {
  const comando = `
      DELETE FROM tb_imagem
      WHERE id_imagem = ?
    `;

    const [resposta] = await con.query(comando, [ imagem, id]);

    return resposta.affectedRows;
}

