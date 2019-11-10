const User = require('../modal/User');
const Repo = require('../modal/Repo');

exports.saveOrUpdateUser = async function(authToken, gitHubUserObj){

    let user =  await User.findOne({id:gitHubUserObj.id});

    if(user){
        user.user = gitHubUserObj;
        user.token = authToken;
        const objUpdated = await User.findOneAndUpdate({id: gitHubUserObj.id}, user, {new: true});
      
    }
    else{
        user= new User();
        user.id=gitHubUserObj.id
        user.user = gitHubUserObj;
        user.token = authToken;
        const objSaved = await user.save();
    
    }

    return user;
      
}

exports.updateLoggingIn = async function(id, loggingIn){
        await User.update({id:id},{logging_in:loggingIn});
}

exports.getUser = async function(id){
    let user =  await User.findOne({id});
    
    return user;
}

exports.getAllRepos = async function(){
        return await Repo.find({});
}