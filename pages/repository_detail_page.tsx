import React, {useEffect, useState} from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../components/Layout';
import axios from 'axios';

interface IProps{
    repo: any;
}

const RepositoryDetailPage: NextPage<IProps> = (props)=>{
   
    const [subscribers, setSubscribers] = useState([]);
    const {github_repo} = props.repo;

    useEffect(()=>{
      
      async function loadSubscribers(){
         const subscribers1:any = await axios.get(github_repo.subscribers_url)
       
         setSubscribers(subscribers1.data);
      }
      
      loadSubscribers();
    });

    return  <Layout hideStartDetails>
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <h4><a href={github_repo.html_url}>{github_repo.html_url}</a></h4><br/>
        <h6>{github_repo.description}</h6>
        <img className="ownerImage" src={github_repo.owner.avatar_url}/>
        <h6>To visit working project click <a href={github_repo.homepage}>here</a> </h6>
     </div>
    </header>
    <section className="container-fluid bg-primary text-center">
         
        <div className="row">
          <div className="col-sm-12">
                <h6>Subscribers</h6>
        
                {subscribers.map(s=><img className="subscriberImage" src={s.avatar_url}/>)}
               
          </div>
        </div>         
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
    const props: IProps = { "repo":ctx.query.repo}
    return props;
}
  
export default RepositoryDetailPage;