 export async function analise (comentario){


const erro = []

       

if (!comentario.id)
   erro.push('É necessário preencher todos os campos')
if(!comentario.cliente)
erro.push('É necessário preencher todos os campos')

return erro
}