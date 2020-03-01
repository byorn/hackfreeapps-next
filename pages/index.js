import React from "react";
import Selection from '../components/Selection';
import SearchList from "../components/SearchList";
import Layout from "../components/Layout";
import { Row, Col } from "react-bootstrap";

const Index = (props) => {

  const {repos, userdetails} = props;

  return (
   
    <Layout username={userdetails?userdetails.username:null}>

      <section className="container-fluid bg-primary text-center">
        <Row>
          <Col xs="0" lg="4">
              
          </Col>
          <Col xs="12" md="12" lg="4">
              <Selection/>
          </Col>
          <Col xs="0" lg="4">
              
          </Col>
        </Row>
        <Row>
          <Col>
              <SearchList repos={repos}/>
          </Col>
        </Row>           
      </section>

      </Layout>
      
  );

}

Index.getInitialProps = ({ query: { repos, userdetails } }) => {
 
  return { repos,userdetails }
}

export default Index;