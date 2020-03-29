const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request , response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    /**
 * TIPOS DE PARÂMETROS
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros , paginação)
 * Route Params: Parâmetros para identificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos.
 */

    async create(request, response){
        const { name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        /*await, va iesperar o insert executar para depois 
        continuar com o codigo da aplicação, para garantir 
        que o retorno mostre coretamente todos os dados inseridos
        */
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id });
    }
};