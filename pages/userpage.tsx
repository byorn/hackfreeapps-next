import Selection from '../components/Selection';
import SearchList from "../components/SearchList";
import Layout from "../components/Layout";
import { useState } from 'react';
import { NextPage, NextPageContext } from 'next';

interface MyPropsInterface{
  userdetails: any,
  repos: any
}

const UserPage:NextPage<MyPropsInterface> = (props) => {
 
  const [count, setCount] = useState("init");

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
              <SearchList repos={props.repos}/>
          </div>
        </div>           
      </section>

    </Layout>
  )
}



UserPage.getInitialProps = async (ctx: NextPageContext) => {
  const props: MyPropsInterface = { "userdetails": ctx.query.userdetails, "repos":ctx.query.repos}
  return props;
}


export default UserPage;