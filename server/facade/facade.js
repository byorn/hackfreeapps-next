const User = require('../modal/User');
const Repo = require('../modal/Repo');
const Comment = require('../modal/Comment');
const RefData = require('../modal/RefData');


exports.getComments = async function(repoId){
    const comments = await Comment.find({ repo_id: repoId }).sort({ 'updated' : 'desc'}).populate({ path: 'comment_from', select: '-token' });
    return comments;
}


exports.createComment = async function(obj){
    let newComment  = new Comment(obj);
    return await newComment.save();
}

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

exports.getReposBy = async function(tech, domain){

    if(tech == "All" && domain != "All"){
        return await Repo.find({"domain":domain});    
    }
    if(tech != "All" && domain == "All"){
        return await Repo.find({"tech":tech});    
    }
    if(tech == "All" && domain == "All"){
        return await Repo.find();    
    }
    return await Repo.find({"tech":tech, "domain":domain});
}

exports.getAllRepos = async function(){
        return await Repo.find({});
}

exports.getRefData = async function(){
    return await RefData.find();
}

exports.findRepo = async function(id){
   
    return await Repo.findById(id);
}