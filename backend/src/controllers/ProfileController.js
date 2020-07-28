const connection = require('../database/connection');

module.exports={
  async index(request,response)
  {
    const ong_id = request.headers.auth;
    const campaigns = await connection('campaign')
    .where('ong_id', ong_id)
    .select('*');

   

    return response.json(campaigns)
  }
}