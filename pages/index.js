import React from "react";
import Selection from '../components/Selection';
import SearchList from "../components/SearchList";
import Layout from "../components/Layout";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Index = (props) => {

  const [repositories, setRepositories] = useState([]);
  const [searchLanguage, setSearchLanguage] = useState('All');
  const [searchDomain, setSearchDomain] = useState('All');

  const {userdetails} = props;

  

  useEffect(()=>{
    async function loadRepositories(){
      try{
       
           const repositories = await axios.get(`/repos/${searchLanguage}/${searchDomain}`)
           if(searchLanguage=='All' && searchDomain=='All'){
            setRepositories(props.repos);
           }else{
            setRepositories(repositories.data);
           }
          
      }catch(ex){
        console.log(ex);
      }
    }
    
    loadRepositories();
 },[searchLanguage,searchDomain]); 

  const onLanguageSelect = (item)=>{
    setSearchLanguage(item);
    
  }

  const onDomainSelect = (item)=>{
    setSearchDomain(item);
    
  }

  return (
   
    <Layout username={userdetails?userdetails.username:null}>

      <section className="container-fluid bg-primary text-center">
        <Row>
          <Col xs="0" lg="2">
              
          </Col>
          <Col xs="12" md="12" lg="8">
              <Selection onLanguageSelect={(item)=>onLanguageSelect(item)} onDomainSelect={(item)=>onDomainSelect(item)}/>
          </Col>
          <Col xs="0" lg="2">
              
          </Col>
        </Row>
        <Row>
          <Col>
              <SearchList repos={repositories}/>
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