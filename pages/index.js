import React from "react";
import Selection from '../components/Selection';
import SearchList from "../components/SearchList";
import Layout from "../components/Layout";

const Index = (props) => {

  const {repos} = props;

  return (
   
    <Layout>

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
              <SearchList repos={repos}/>
          </div>
        </div>           
      </section>

      </Layout>
      
  );

}

Index.getInitialProps = ({ query: { repos } }) => {
 
  return { repos }
}

export default Index;