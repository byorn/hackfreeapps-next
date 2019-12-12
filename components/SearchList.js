import { Card,Button, Col, Container, Row } from 'react-bootstrap';
import { MyComp } from './MyComp';

const SearchList = (props)=>{

    const {repos} = props;

    let listOfRepoItems = [[]];
    let counter = 0;
    repos.forEach((o, i) =>{
      
      if(i%4!==0){
      
          listOfRepoItems[counter].push(
            <Col key={o._id}>
              <Card  className="cardWidth">
              <Card.Img variant="top" src={o.github_repo.owner.avatar_url} />
              <Card.Body>
                <Card.Title>{o.github_repo.name}</Card.Title>
                <Card.Text>
                {o.github_repo.description}
                <br/>
                <span><i className="fas fa-star"></i>&nbsp;{o.github_repo.stargazers_count}</span>
                <br/>
                <a href={o.github_repo.homepage}> {o.github_repo.homepage} </a>
                </Card.Text>
                <Button variant="primary">More Info ...</Button>
                <MyComp name="byorn"/>
              </Card.Body>
            </Card>
            </Col>
          )
        }else{
          counter+=1;
          listOfRepoItems.push([]);
          listOfRepoItems[counter].push(
            <Col key={o._id}>
              <Card   className="cardWidth">
              <Card.Img variant="top" src={o.github_repo.owner.avatar_url} />
              <Card.Body>
                <Card.Title>{o.github_repo.name}</Card.Title>
                <Card.Text>
                {o.github_repo.description}
                <br/>
                <span><i className="fas fa-star"></i>&nbsp;{o.github_repo.stargazers_count}</span>
                <br/>
                <a href={o.github_repo.homepage}> {o.github_repo.homepage} </a>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
        <Row key={i}>
          {arr}
        </Row>
        )
    });
       

    return(<Container>
    { refined}

    <style>
    {`
      .cardWidth {
        width: 15rem ;
      }
    `}
  </style>
  
    </Container>);



}
export default SearchList;