import { Card,Button, Col, Container, Row } from 'react-bootstrap';
import { MyComp } from './MyComp';

const SearchList = (props)=>{

    const {repos} = props;

    let listOfRepoItems = [[]];
    let counter = 0;
 
    repos.forEach((o, i) =>{
      
      if(i%4!==0){
      
          listOfRepoItems[counter].push(
            <Col key={o._id} className="mb-3">
              <Card  className="cardWidth">
              <Card.Img variant="top" src={o.github_repo.owner?o.github_repo.owner.avatar_url:''} />
              <Card.Body>
                <Card.Title>{o.github_repo.name}</Card.Title>
                <Card.Text>
                {o.github_repo.description}
                <br/>
                <span><i className="fas fa-star"></i>&nbsp;{o.github_repo.stargazers_count}</span>
                <br/>
                <a href={o.github_repo.homepage}> {o.github_repo.homepage} </a>
                </Card.Text>
                <Button variant="primary" href={`/repository/${o._id}`}>More ...</Button>
               
              </Card.Body>
            </Card>
            </Col>
          )
        }else{
          counter+=1;
          listOfRepoItems.push([]);
          listOfRepoItems[counter].push(
            <Col key={o._id} className="mb-3">
              <Card   className="cardWidth">
              <Card.Img variant="top" src={o.github_repo.owner?o.github_repo.owner.avatar_url:''} />
              <Card.Body>
                <Card.Title>{o.github_repo.name}</Card.Title>
                <Card.Text>
                {o.github_repo.description}
                <br/>
                <span><i className="fas fa-star"></i>&nbsp;{o.github_repo.stargazers_count}</span>
                <br/>
                <a href={o.github_repo.homepage}> {o.github_repo.homepage} </a>
                </Card.Text>
                <Button variant="primary" href={`/repository/${o._id}`}>More ...</Button>
              </Card.Body>
            </Card>
            </Col>
          )
        }
      }
      )

      let refined=[];
      listOfRepoItems.forEach((arr, i)=>{
        refined.push(
        <Row key={i} className="mt-5 mb-3">
          {arr}
        </Row>
        )
    });
       

    return(<Container>
    { refined}

    <style>
    {`
     
      @media screen and (max-width: 640px) {
        .cardWidth {
          width: 18rem ;
        }
      }
   
    `}
  </style>
  
    </Container>);



}
export default SearchList;