const connection = require('../database/connection');
const crypto = require('crypto');

module.exports={
    async create(request,response)
    {
  
      const { title, description, value}= request.body;
      //console.log(request.body)
      const ong_id = request.headers.auth;
      //console.log(`title:${title} description: ${description} value: ${value}`)

      const [id] =  await connection('campaign').insert({
        title,
        description,
        value,
        ong_id,
      });
      console.log('Campaign created');
      return response.json({id});
    },

    async index (request,response)
    {
      const {page =1} = request.query;
      const auth = request.headers.auth; 
      console.log(`auth vale${auth}`);
     list = await connection('campaign')
                          .join('ong','ong.id','=','campaign.ong_id')
                          .select([
                                 'campaign.*',
                                 'ong.name',
                                 'ong.email',
                                 'ong.whatsapp',
                                 'ong.city',
                                 'ong.uf'
                                ])
                          .where('ong_id',auth)
                          .limit(5)
                          .offset((page -1)*5);

      [count] = await  connection('campaign')
                            .count()
      response.header('X-Total-Campaign',count['count(*)'])
      //console.log(`count ${count['count(*)']}`)
      // the knex count will return an object with count(*):x
    
      return response.json(list);
    },

    async delete(request,response)
    {
      console.log('Hello')
      //recovering the ong of a specific ONG to do an auth
      const  { id } = request.params;
       const ong_id = request.headers.auth;
       
     
       const campaign = await connection('campaign')
                 .where('id', id)
                 .select('ong_id')
                 .first();//returns the first element

      if(campaign === undefined)
      {
        return response.status(404).json({error:`id: ${id}  was not found`})
      }
    
      
   
       //console.log(`ong_id:  ${ong_id} campaing.ong_id   ${campaign.ong_id}`)
       if( campaign.ong_id !== ong_id)
       {
        return response.status(401).json({error:` 401 Operation not permitted `});
       }
     
    
      
   
      await connection('campaign').where('id',id).delete();
       console.log('Deleted')
      return response.status(200).json({sucess:`campaingn has been deleted!`})// doesn't have a content
    }

};