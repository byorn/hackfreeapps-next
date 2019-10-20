import Layout from '../components/Layout';
import Popup from '../components/Popup';
import { useState } from 'react';

const Index = (props) => {
  const {userdetails, repos} = props;
  const [count, setCount] = useState("init");

  return (
   <Layout>
     <div>Welcome {userdetails?userdetails.username:""}</div>
           

    <Popup> {count} </Popup>



     <div>{repos?repos.length:"no repos"}</div>

      {
          repos.map(o=>
          <div key={o._id} className="row mt-5">
              <div className="col-sm-3">
                <img src={o.github_repo.owner.avatar_url}/>
              </div>
            <div className="col-sm-5">
                <div className="row">
                    <div className="col-sm">
                      <h3><a href={o.github_repo.html_url}>{o.github_repo.name}</a></h3>
                    </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                      <h6 data-toggle="modal" data-target="#portfolioModal1" onClick={(event)=>setCount(o.github_repo.description)} > {o.github_repo.description} </h6>    
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                      <span><i className="fas fa-star"></i>&nbsp;{o.github_repo.stargazers_count}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                      <a href={o.github_repo.homepage}> {o.github_repo.homepage} </a>
                  </div>
                </div>
                
                
             
          </div>
          </div>
                )
      }
      
    

      <style jsx>{`
         img {
          height:200px;
          width:200px;
        }
        h3 a, h6{
          color:#34302D;
        }
        a{
          color:#34302D;
        }
      `}</style>

   </Layout>
  )
}
  
Index.getInitialProps = ({ query: { userdetails, repos } }) => {
  return { userdetails, repos }
}


export default Index;