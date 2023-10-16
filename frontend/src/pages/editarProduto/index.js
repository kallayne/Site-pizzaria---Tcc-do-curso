//import './index.scss'

import axios from 'axios'
import React, { useEffect, useState } from 'react';
import storage, { set } from 'local-storage';
import CompAtalhosAdm from '../../components/compAtalhosAdm';

import { useParams } from 'react-router-dom';



export default function EditarProduto() {
    const [nome, setnome] = useState('')
    const [tipo, settipo] = useState(0)
    const [ingredientes, setingrediente] = useState('')
    const [restricao, setrestricao] = useState('')
    const [preco, setpreco] = useState(0)
    const [descricao, setdescricao] = useState('')
    const [disponivel, setDisponivel] = useState(false);
    const [imagem, setImagem] = useState(null);
    const [idrestricao, setIdrestricao] = useState(0)
    const [idImagem, setIdImagem] = useState(0)







    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })



    const { id } = useParams()
   // const [rende, setRende] = useState([])

    const [idproduto, setIdproduto] = useState(id)



console.log(imagem)


    useEffect(() => {
        if (id) {
            MostrarInfo();
        }
        alterar()
        alteraridImagem()
        
        
    }, [])

    useEffect(() => {
        carregarRestricao()
        carregarTipo()
    })


    console.log(idrestricao)
    console.log(idImagem)


    async function MostrarInfo() {
        const r = await axios.get(`http://localhost:5000/produto/listar/${id}`)
        const resp = r.data[0]
        setnome(resp.nome)
        settipo(resp.tipo)
        setingrediente(resp.ingredientes)
        setrestricao(resp.restricao)
        setpreco(resp.preço)
        setdescricao(resp.descricao)
        setDisponivel(resp.disponivel)
        setImagem(resp.imagem)

    }

    function carregarRestricao() {
        const checkboxes = document.querySelectorAll('.tay2');

        checkboxes.forEach((checkbox) => {
            const value = checkbox.value;
            if(restricao) {
                if (restricao.includes(value)) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }

            } else {
                checkbox.checkbox= false
            }

        });
    }

    function carregarTipo() {
        const checkboxes = document.querySelectorAll('.tay');
    
        checkboxes.forEach((checkbox) => {
            const value = checkbox.value;
            if (tipo === value) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        });
    }
    






    async function alterar() {
        const resposta = await axios.get('http://localhost:5000/produto/listar/' + id)
        const r = resposta.data[0]
        const resp = r.idrestricao
        setIdrestricao(resp)

    }


    async function alteraridImagem() {
        const resposta = await axios.get('http://localhost:5000/produto/listar/' + id)
        const r = resposta.data[0]
        const resp = r.idimagem
        setIdImagem(resp)
    }


    /*  async function enviarimagem(idproduto, imagem) {
          const formData = new FormData();
          formData.append('capa', imagem);
      
          const r = await axios.put(`http://localhost:5000/produto/${idproduto}/imagem`, formData , {
              headers: {
                  "Content-type": "multipart/form-data"
              },
          })
      }*/



    async function alterarProduto() {

        try {

            if (!imagem) {
                throw new Error('escolha uma imagem')
            }



            const formData = new FormData();
            formData.append('capa', imagem);

            const alterarImg = {
                imagem: imagem
            }

            const imagemTorV = await axios.get('http://localhost:5000/produto/listar/' + idproduto)
            const result = imagemTorV.data[0]
            const r = result.imagem


            if (!r) {
                const r = await axios.post(`http://localhost:5000/produto/${idproduto}/capa`, formData, {
                    headers: {
                        "Content-type": "multipart/form-data"
                    },
                })
            }

            else {
                const r = await axios.put(`http://localhost:5000/produto/${idImagem}/imagem`, formData, {
                    headers: {
                        "Content-type": "multipart/form-data"
                    },
                })
            }





            const restricaoAtualizada = restricao

            alert(restricaoAtualizada)




            const alterarRestricao = {
                restricao: restricaoAtualizada
            }

            let variavelnul = null
            let variavelandfilne = undefined

            if (idrestricao === '' || idrestricao === variavelnul || idrestricao === variavelandfilne) {
                let novarestricao = {
                    produto: idproduto,
                    restricao: restricaoAtualizada
                }
                const respo = await axios.post('http://localhost:5000/restricao', novarestricao)
            }
            else {
                const respRestricao = await axios.put(`http://localhost:5000/restricao/alterar/${idrestricao}`, alterarRestricao)
            }






            const produto = {
                nome: nome,
                tipo: tipo,
                ingredientes: ingredientes,
                preco: preco,
                descricao: descricao,
                disponivel: disponivel
            }

            alert(JSON.stringify(produto));

            const resposta = await axios.put(`http://localhost:5000/produto/editar/${idproduto}`, produto)


            if (resposta.status === 200) {
                alert("Produto alterado!");
            }


        } catch (err) {
            if (err.response) {
                console.log('Erro de resposta:', err.response.data);
                alert(`Erro na tentativa de alterar o produto: ${JSON.stringify(err.response.data)}`);
            } else {
                console.log('Erro não tratado:', err.message);
                alert(`Erro na tentativa de alterar o produto: ${err.message}`);
            }
        }

    }






    async function BuscarImagem(imagem) {
        console.log(`${api.getUri()}/${imagem}`)
        return `${api.getUri()}/${imagem}`
    }




    function escolherImagem() {
        document.getElementById('imagemcapa').click();
    }



    function mostrarImagem() {
        if (imagem && typeof imagem === 'object') {
            return URL.createObjectURL(imagem);
        } else {
            return BuscarImagem(imagem);
        }
    }
    

    return (
        <div className='connt'>

            <CompAtalhosAdm />


            <div className='cont' >


                <div className='tit' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>


                    <div className='img' onClick={escolherImagem}>
                        <div className='ti-h1'>



                            {imagem &&
                                <img src={mostrarImagem()} alt='IMAGEM DO PRODUTO' />
                            }



                            <input type="file" id='imagemcapa' onChange={e => setImagem(e.target.files[0])} />

                        </div>
                    </div>

                    <div className='dadosdoproduto'>
                        <div className='nome'>
                            <p>Nome:</p>
                            <input
                                type='text'
                                placeholder='Escreva..'
                                value={nome}
                                onChange={(e) => setnome(e.target.value)}

                            />
                        </div>



                        <p className='linha'> </p>

                        <div className='b-produto'>
                            <h1>Seu Produto é...</h1>



                            <div className='prod'>

                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="1"
                                        onChange={(e) => {

                                            if (e.target.checked) {
                                                settipo('Bebida');
                                            } else {
                                                settipo('');
                                            }
                                        }}

                                    />
                                    <p className='nomeproduto'>Bebida</p>
                                </div>



                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="2"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                settipo('Sobremesa');
                                            } else {
                                                settipo('');
                                            }
                                        }}



                                    />
                                    <p className='nomeproduto'>Sobremesa</p>
                                </div>




                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="3"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                settipo('Salgado');
                                            } else {
                                                settipo('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Salgado</p>
                                </div>
                            </div>



                            <p className="linha"></p>

                        </div>

                        <div className='ingredientes'>
                            <h1>Ingredientes:</h1>

                            <input type='text' placeholder='Escreva..' value={ingredientes} onChange={e => setingrediente(e.target.value)} />

                        </div>

                        <p className='linha'></p>

                        <div className='preferencia'>
                            <h1>Pessoas com preferencias alimentares/alergias podem comer</h1>
                            <div className='pref-prod'>

                                <div className='in'>
                                <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Glúten"
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            if (Array.isArray(restricao) ) {
                                                if (restricao.includes(value)) {
                                                    setrestricao(restricao.filter(item => item !== value));
                                                } else {
                                                    setrestricao([...restricao, value]);
                                                }
                                            } else {
                                                setrestricao([value]);
                                            }
                                        }}
                                        checked={Array.isArray(restricao) && restricao.includes('Glúten')}
                                    />
                                    <p className='nomeproduto'>Glúten</p>
                                </div>

                                <div className='in'>
                                <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Ovo"
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            if (Array.isArray(restricao) ) {
                                                if (restricao.includes(value)) {
                                                    setrestricao(restricao.filter(item => item !== value));
                                                } else {
                                                    setrestricao([...restricao, value]);
                                                }
                                            } else {
                                                setrestricao([value]);
                                            }
                                        }}
                                        checked={Array.isArray(restricao) && restricao.includes('Ovo')}
                                    />
                                    <p className='nomeproduto'>Ovo</p>
                                </div>
                                    
                             </div>

                        </div>


                        <p className='linha'></p>

                        <div className='valor'>
                            <h1>Qual o preço do seu produto?</h1>
                            <input type='text' placeholder='Escreva..' value={preco} onChange={e => setpreco(e.target.value)} />
                        </div>

                        <p className='linha'></p>

                        <div className='descricao'>
                            <h1>Adicione uma descrição do seu produto</h1>
                            <input type='text' placeholder='Escreva..' value={descricao} onChange={e => setdescricao(e.target.value)} />
                        </div>
                        <div className='disponivel'>
                            <h1>Disponível:</h1>
                            <input
                                type='checkbox'
                                checked={disponivel}
                                onChange={() => setDisponivel(!disponivel)}
                            />
                        </div>

                        <div className='fin-botao'>
                            <button onClick={alterarProduto}>Finalizar Cadastro</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>



    )

}

/*function carregarRestricao() {
        const checkboxes = document.querySelectorAll('.tay2');

        checkboxes.forEach((checkbox) => {
            const value = checkbox.value;
            if (restricao.includes(value)) {
                console.log(restricao.includes(value))
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        });
    }

                                    <div className='in'>
                                <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Leite e seus derivados"
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            if (Array.isArray(restricao)) {
                                                if (restricao.includes(value)) {
                                                    setrestricao(restricao.filter(item => item !== value));
                                                } else {
                                                    setrestricao([...restricao, value]);
                                                }
                                            } else {
                                                setrestricao([value]);
                                            }
                                        }}
                                        checked={Array.isArray(restricao) && restricao.includes('Leite e seus derivados')}
                                    />
                                    <p className='nomeproduto'>Leite e seus derivados</p>
                                </div>

                            </div>


                        </div>

                        <div className='pref-prod'>
                            <div className='in'>
                            <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegetariano"
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            if (Array.isArray(restricao)) {
                                                if (restricao.includes(value)) {
                                                    setrestricao(restricao.filter(item => item !== value));
                                                } else {
                                                    setrestricao([...restricao, value]);
                                                }
                                            } else {
                                                setrestricao([value]);
                                            }
                                        }}
                                        checked={Array.isArray(restricao) && restricao.includes('Vegetariano')}
                                    />
                                <p className='nomeproduto'>Vegetariano</p>
                            </div>

                            <div className='in'>
                            <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegano"
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            if (Array.isArray(restricao)) {
                                                if (restricao.includes(value)) {
                                                    setrestricao(restricao.filter(item => item !== value));
                                                } else {
                                                    setrestricao([...restricao, value]);
                                                }
                                            } else {
                                                setrestricao([value]);
                                            }
                                        }}
                                        checked={Array.isArray(restricao) && restricao.includes('Vegano')}
                                    />
                                <p className='nomeproduto'>Vegano</p>
                            </div>*/