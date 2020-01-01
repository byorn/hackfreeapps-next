import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../components/Layout';

interface IProps{
    repo: any;
}

const RepositoryDetailPage: NextPage<IProps> = (props)=>{
   
    const {github_repo} = props.repo;

    return  <Layout hideStartDetails>
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <h3 className="font-weight-dark mb-0">{github_repo.full_name}</h3>
        <br/>
        <h6>{github_repo.description}</h6>
        <br/>
        <a href={github_repo.html_url}>{github_repo.html_url}</a>
     </div>
    </header>
    <section className="container-fluid bg-primary text-center">
         <div className="row">
          <div className="col-sm-12">
                <img src={github_repo.owner.avatar_url}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
                <a href={github_repo.html_url}>{github_repo.html_url}</a>
          </div>
        </div>           
      </section>

      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
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