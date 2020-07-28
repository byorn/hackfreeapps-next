import Selection from '../components/Selection';
import SearchList from "../components/SearchList";
import MyRepos from "../components/MyRepos";
import Layout from "../components/Layout";
import { useState,useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import axios from 'axios';

interface MyPropsInterface{
  token: string | string[]
  userdetails: any,
  repos: any
}


const UserPage:NextPage<MyPropsInterface> = (props) => {
 
  const [myrepos, setMyRepos] = useState([]);


  
  useEffect(()=>{
    async function loadMyRepositories(){
      try{
       
        const response:{data:[]} = await axios.get(`https://api.github.com/users/${props.userdetails.username}/repos`);
  
        console.log(response);

        setMyRepos(response.data);

          
      }catch(ex){
        console.log(ex);
      }
    }
    
    loadMyRepositories();
 },[]); 

  return (
    <Layout username={props.userdetails.username}>
   
      <section className="container-fluid bg-primary text-center">
        <div className="row">
          <div className="col-sm-4">
              
          </div>
          <div className="col-sm-4">
              <Selection/>
          </div>
          <div className="col-sm-4">
              
          </div>
        </div>
        <div className="row mt-5 pt-2">
          <div className="col-sm-12">
              <MyRepos repos={myrepos} token={props.token}/>
          </div>
        </div>      
        <div className="row mt-5 pt-2">
          <div className="col-sm-12">
              <SearchList repos={props.repos}/>
          </div>
        </div>           
      </section>

    </Layout>
  )
}



UserPage.getInitialProps = async (ctx: NextPageContext) => {
  const props: MyPropsInterface = { token : ctx.query.token, "userdetails": ctx.query.userdetails, "repos":ctx.query.repos}
  return props;
}


export default UserPage;