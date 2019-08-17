import withLayout from '../components/withLayout';
const Index = (props) => {

  if(props.username){
  return (
     <div>hello {props.username}</div>
  );
  }else{
    return (
      <div>no query hello </div>
   );
  }
}
  
Index.getInitialProps = ({ query: { username } }) => {
  return { username }
}


export default Index;