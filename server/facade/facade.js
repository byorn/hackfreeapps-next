const User = require('../modal/User');
exports.saveOrUpdateUser = async function(authToken, gitHubUserObj){

    let user =  await User.findOne({id:gitHubUserObj.id});

    if(user){
        user.user = gitHubUserObj;
        user.token = authToken;  
        const objUpdated = await User.findOneAndUpdate({id: gitHubUserObj.id}, user, {new: true});
        console.log(objUpdated)
    }
    else{
        user= new User();
        user.id=gitHubUserObj.id
        user.user = gitHubUserObj;
        user.token = authToken;
        const objSaved = await user.save();
        console.log("object saved new")
    }
      
}

exports.getUser = async function(id){
    let user =  await User.findOne({id});
    
    return user;
}