import SelectDropDown from './SelectDropDown'
import { Row, Col } from 'react-bootstrap';

const Selection = () => {

  return (
    
      <Row >
        <Col xs="6" lg="3">
          <h3 className="font-weight-light text-right">Language</h3>
        </Col>
        <Col xs="6" lg="3">
          <SelectDropDown items={['React', 'Node', 'Java']} />
        </Col>
        <Col xs="6" lg="3">
          <h3 className="font-weight-light text-right">Domain</h3>
        </Col>
        <Col xs="6" lg="3">
          <SelectDropDown items={['Travel', 'Insurance', 'Shopping Cart', 'Email Marketting']} />
        </Col>
      </Row>
    
  );

}
export default Selection;