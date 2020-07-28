const connection = require('../database/connection');
const crypto = require('crypto');

module.exports={
  async create(request,response)
  {
    //try{
        const {email,password} = request.body;
          
        //on this case below, email will be used to Logging in
          const emailLogin = await connection('ong').where('email',email)
          .andWhere('password','=',password)
          .select('email')
          .first() 

          const id = await connection('ong').where('email',email)
          .andWhere('password','=',password)
          .select('id')
          .first();

        if(emailLogin ===undefined){
          //console.log(email,emailLogin);
          return response.status(400).json(`error: email or password is wrong! Please try again!`);
        }

        const nameONG = await connection('ong')
        .where('email',email)
        .select('name')
        .first();

          const data =
          {
            id:id.id,
            name: nameONG.name,
            email: emailLogin.email,
            password
          }

          return response.status(200).json(data);
       /* }
        catch(err){
         console.log(`Couldn't did login! Please, try again${err}`);
        }*/
  },
  async delete()
  {

  }
}