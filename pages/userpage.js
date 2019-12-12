import Selection from '../components/Selection';
import SearchList from "../components/SearchList";
import Layout from "../components/Layout";
import { useState } from 'react';

const UserPage = (props) => {
  const { userdetails, repos } = props;
  const [count, setCount] = useState("init");

  return (
    <Layout username={userdetails.username}>
   
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
  )
}

UserPage.getInitialProps = ({ query: { userdetails, repos } }) => {
  return { userdetails, repos }
}


export default UserPage;