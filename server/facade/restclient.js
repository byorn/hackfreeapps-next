const fetch = require('node-fetch')


exports.checkUser = async (token) => {
    try {

      const config = {
        headers: {
          "Authorization": "token "+token
        }
      }
   
      const res = await fetch('https://api.github.com/user', config);

      return res.status === 200;

    } catch (error) {
      console.log(error);
      return false;
    }
}






