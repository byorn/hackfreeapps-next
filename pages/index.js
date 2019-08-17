import Layout from '../components/Layout';
const Index = (props) => (
   <Layout>
     <div>hello world {props.userdetails?props.userdetails.displayName:""}</div>
   </Layout>
)
  
Index.getInitialProps = ({ query: { userdetails } }) => {
  return { userdetails }
}


export default Index;