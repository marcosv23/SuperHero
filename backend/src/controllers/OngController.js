const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

  async index(request, response)
  {
  const list = await connection('ong').select('*');

  response.json(list)
  },

  async create(request, response)
  {
        const  {name,email,password,whatsapp,city,uf} = request.body;
        const id = crypto.randomBytes(6).toString('HEX');
        console.log(id,name,email,password,whatsapp,city,uf);
      
        await connection('ong').insert({
          id,
          email,
          password,
          name,
          whatsapp,
          uf,
          city
        })
      
        return response.json({
         id,name,email,password
        })
    },

    async delete()
    {
      //
      //const{Auth} =response.headers.auth;
      //const{name}= response.data.name;
      
    }

    

  }