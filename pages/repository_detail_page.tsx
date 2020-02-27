import React, {useEffect, useState} from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../components/Layout';
import Comments from '../components/Comments';
import axios from 'axios';

interface IProps{
    repo: any;
    userdetails: any;
}

const RepositoryDetailPage: NextPage<IProps> = (props)=>{
   
    const [subscribers, setSubscribers] = useState([]);
    const {repo, userdetails} = props;
     

    useEffect(()=>{
      async function loadSubscribers(){
        try{
         const subscribers1:any = await axios.get(repo.subscribers_url)
         setSubscribers(subscribers1.data);
        }catch(ex){
          console.log("byorn:" + ex);
        }
      }
      
      loadSubscribers();
   },[]); //pass empty array to avolid call after each update.

    return  <Layout hideStartDetails username={userdetails?userdetails.username:null}>
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <h4><a href={repo.github_repo.html_url}>{repo.html_url}</a></h4><br/>
        <h6>{repo.github_repo.description}</h6>
        <img className="ownerImage" src={repo.github_repo.owner.avatar_url}/>
        <h6>To visit working project click <a href={repo.github_repo.homepage}>here</a> </h6>
     </div>
    </header>
    <section className="container-fluid bg-primary text-center pb-5">
         
        <div className="row">
          <div className="col-sm-12">
                <h6>Subscribers</h6>
        
                {subscribers.map(s=><img key={s.id} className="subscriberImage" src={s.avatar_url}/>)}
               
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
              <hr/>
               
          </div>
        </div>
        <Comments githubrepos_id={repo._id} repo_id={repo.github_repo.id} hasUser={userdetails?true:false}/>         
     </section>

      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
        }
        .subscriberImage{
          width:50px;
          height:50px;
        }
        .ownerImage{
          width:150px;
          height:150px;
        }
        a:hover {
          opacity: 0.6;
        }
      `}</style>
    
    </Layout>
}


RepositoryDetailPage.getInitialProps = async (ctx: NextPageContext) => {
    const props: IProps = { "repo":ctx.query.repo, "userdetails": ctx.query.userdetails}
    return props;
}
  
export default RepositoryDetailPage;