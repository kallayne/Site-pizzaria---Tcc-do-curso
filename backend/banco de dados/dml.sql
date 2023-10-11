-- // tabela media ///



    select   tb_produto.id_produto             as ID,
            tb_produto.nm_produto             as nome,
            tb_media.ds_media                 as media
    from tb_produto
    left JOIN tb_media ON tb_media.id_produto = tb_produto.id_produto
    where tb_produto.id_produto = 1;
    
    select tb_produto.id_produto     as id_produto,    
            tb_produto.nm_produto     as produto,    
            tb_comentario.id_avaliacao as avaliacao
    from tb_produto
    left JOIN tb_comentario ON tb_comentario.id_produto = tb_produto.id_produto
    where tb_produto.id_produto = 1;


-- // tabela avaliacao //
               
                  
select * from tb_avaliacao ;


INSERT INTO  tb_associado (nm_nome,ds_email,ds_senha,ds_cnpj)
					VALUES('1' , '1','1','1');

-- GGFG  // tabela endereco ///


INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('São Paulo', 'São Paulo', 'Grajau', 'Rua da Amostra, 123', '123', '12345-678');
 
 
SELECT *
FROM tb_endereco;

DELETE FROM tb_endereco 
WHERE id_endereco = 1;





-- GGFG // tabela cartao ///


INSERT INTO tb_cartao (ds_numero, ds_nome, ds_validade, ds_cvv)
			   VALUES ('1234567890123456', 'João Silva', '12/25', '123');
               
               INSERT INTO tb_cartao ( ds_numero , ds_nome ,ds_validade ,ds_cvv)
			   VALUES ( ' 0000-0000 ', 'maximosmiguel' , '28/12' , '123' );

SELECT *
FROM tb_cartao;

DELETE 
FROM tb_cartao 
WHERE id_cartao = 1;



-- GGFG // TABELA CLIENTE //

SELECT
    tb_cliente.id_cliente    AS ID,
    tb_cliente.nm_cliente    AS Nome_cliente,
    tb_cliente.ds_email      AS Email,
    tb_endereco.ds_estado    AS Estado,
    tb_endereco.ds_municipio AS Municipio,
    tb_endereco.ds_rua       AS Rua,
    tb_endereco.ds_numero    AS Numero,
    tb_endereco.ds_cep       AS Cep,
    tb_cartao.ds_numero      AS Numero_cartao,
    tb_cartao.ds_nome        AS Nome_cartao,
    tb_cartao.ds_validade    AS Validade,
    tb_cartao.ds_cvv AS ds_cvv_cartao
FROM
    tb_cliente
INNER JOIN
    tb_endereco ON tb_cliente.id_endereco = tb_endereco.id_endereco
LEFT JOIN
    tb_cartao ON tb_cliente.id_cartao = tb_cartao.id_cartao;

select * from tb_cliente;

DELETE
FROM tb_cliente
WHERE id_cliente = 1;




-- GGFG  // TABELA RESTRICAO //

INSERT INTO tb_restricao (ds_restricao , id_produto)
				  VALUES (  'glutem' ,1) ;

SELECT
    tb_restricao.id_restricao  as id,
    tb_restricao.ds_restricao  as Restrição ,
    tb_produto.nm_produto      as Produto
FROM
    tb_restricao
INNER JOIN
    tb_produto ON tb_restricao.id_produto = tb_produto.id_produto;



UPDATE  tb_restricao
SET     ds_restricao = 'OVO'
where   id_restricao = 1;

DELETE FROM    tb_restricao
WHERE          id_restricao = 1;



-- GGFG  // tabela tipo do produto //



                     
SELECT  id_tipo_produto  as ID,
		ds_tipo_produto  as Classificação
FROM    tb_tipo_produto; 

SELECT  id_tipo_produto  as ID,
		ds_tipo_produto  as Classificação
FROM    tb_tipo_produto
WHERE ds_tipo_produto like'%bebida%'; 



UPDATE  tb_tipo_produto
SET     ds_tipo_produto = 'BEBIDAS'
WHERE   id_tipo_produto = 1;
      

DELETE FROM  tb_tipo_produto
WHERE        id_tipo_produto =1;


-- GGFG  // tabela comentrio //

select * from tb_cliente;

                   
SELECT
    tb_comentario.id_comentario AS ID,
    tb_comentario.ds_comentario AS Comentario,
    tb_produto.nm_produto AS produto,
    tb_cliente.nm_cliente AS cliente
FROM
    tb_comentario
INNER JOIN
    tb_produto ON tb_comentario.id_produto = tb_produto.id_produto
INNER JOIN
    tb_cliente ON tb_comentario.id_cliente = tb_cliente.id_cliente
    where tb_produto.id_produto = 1;
    

UPDATE tb_comentario
SET    ds_comentario  = 'gostei',
	   id_produto    = 1
WHERE  id_comentario  = 1 ;

DELETE FROM tb_comentario 
WHERE       id_comentario =1;


-- // tabela imagem ///

       
       
SELECT      tb_produto.id_produto  as Produto,
            tb_produto.nm_produto as Produto,
            tb_produto.ds_tipo_produto as Classificação,
            tb_produto.vl_preco as Preço,
            tb_produto.vl_preco_promocional as Preço_promocional,
            tb_produto.ds_ingredientes as Ingredientes,
            tb_produto.ds_descricao as Descrição,
            tb_produto.bt_disponivel as Disponivel,
			tb_imagem.id_imagem  as id_imagem,  
            tb_imagem.img_produto as imagem 
          
FROM       tb_imagem 
INNER JOIN tb_produto ON tb_imagem.id_produto = tb_produto.id_produto;


insert into tb_imagem (id_produto , img_produto)
			   VALUES ( 1 , '');

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
    tb_restricao.ds_restricao         as restricao
  FROM
      tb_produto
  INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
  left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
  left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
  where tb_produto.id_produto = 1;



             
                
--  // select to produto que tem restricao          
     
SELECT
	tb_produto.id_produto             as ID,
    tb_produto.nm_produto             as nome, 
	tb_tipo_produto.ds_tipo_produto   as tipo ,
	tb_produto.ds_ingredientes        as ingredientes,
    tb_produto.ds_descricao           as descricao ,
	tb_produto.vl_preco               as preço,
	tb_produto.vl_preco_promocional   as Preco_promocional,
    tb_produto.bt_disponivel          as disponivel,
    tb_restricao.ds_restricao         as restricao
FROM
    tb_produto
INNER JOIN
      tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto;
 
 
-- // selct tabela produto com imagem //

SELECT
	tb_produto.id_produto             as ID,
    tb_produto.nm_produto             as nome, 
	tb_tipo_produto.ds_tipo_produto   as tipo ,
	tb_produto.ds_ingredientes        as ingredientes,
    tb_produto.ds_descricao           as descricao ,
	tb_produto.vl_preco               as preço,
	tb_produto.vl_preco_promocional   as Preco_promocional,
    tb_produto.bt_disponivel          as disponivel,
    tb_imagem.img_produto             as imagem
FROM
    tb_produto
INNER JOIN
      tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto;    
    
    
    
    
    
-- // select da tabela produto com a jução das tres tabelas ( produto , imagem , restrição ) ///

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
left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto;


    
 -- select tabela produto com o tipo 
 
select 
    	tb_produto.id_produto         as ID,
    tb_produto.nm_produto             as Nome, 
	tb_tipo_produto.ds_tipo_produto   as Tipo ,
	tb_produto.ds_ingredientes        as ingredientes,
    tb_produto.ds_descricao           as Descrição ,
	tb_produto.vl_preco               as Preço,
	tb_produto.vl_preco_promocional   as Preço_promocional,
    tb_produto.bt_disponivel          as disponivel
    
FROM tb_produto
INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto;
  
  
-- select pelo nome do produto 

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
where tb_produto.nm_produto like '%novo%';

-- busca por tipo 

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
where tb_tipo_produto.ds_tipo_produto like '%N%';



   
-- update do produto com o tipo   

UPDATE tb_produto
INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
SET
    tb_produto.nm_produto = 'Novo Nome',
    tb_tipo_produto.ds_tipo_produto = 'Nova Classificação',
    tb_produto.ds_ingredientes = 'Novo Comentário',
  	tb_produto.vl_preco = 'Novo Preço',
    tb_produto.ds_descricao = 'Nova Descrição',
    tb_produto.vl_preco_promocional = 'Novo Preço Promocional',
    tb_produto.bt_disponivel = 1
WHERE tb_produto.id_produto = 1;



-- update do produto atualizando as tres tabelas ( imagem , produto , restricao )
UPDATE tb_produto
INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
left JOIN tb_imagem ON tb_imagem.id_produto = tb_produto.id_produto
left JOIN tb_restricao ON tb_restricao.id_produto = tb_produto.id_produto
SET
    tb_produto.nm_produto = 'Novo Nome',
    tb_tipo_produto.ds_tipo_produto = 'Nova Classificação',
    tb_produto.ds_ingredientes = 'Novo Comentário',
  	tb_produto.vl_preco = 'Novo Preço',
    tb_produto.ds_descricao = 'Nova Descrição',
    tb_produto.vl_preco_promocional = 'Novo Preço Promocional',
    tb_produto.bt_disponivel = 1,
	tb_imagem.img_produto    = 'imagem atualizada',
	tb_restricao.ds_restricao  ='ovo'     
WHERE tb_produto.id_produto = 1
and   tb_restricao.id_restricao=1
and   tb_imagem.id_imagem = 1;

-- filtro que mostra todos os comentarios e avliacao
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




DELETE FROM tb_produto
WHERE   id_produto = 1;