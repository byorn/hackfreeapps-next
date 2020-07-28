import SelectDropDown from './SelectDropDown'
import { Row, Col } from 'react-bootstrap';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Selection (props) {

  const [techList, setTechList] = useState<Array<string>>([])
  const [domainList, setDomainList] = useState<Array<string>>([])

  useEffect(() => {
    
      axios.get('/ref').then((data)=>{
        setDomainList(data.data[0].domain);
        setTechList(data.data[0].tech);
      })
    
  }, [])

  const onLanguageSelect = (item)=>{
    props.onLanguageSelect(item);
  }

  const onDomainSelect = (item)=>{
    props.onDomainSelect(item);
  }


  return (
    <>
      <Row >
        <Col xs={0} md={0} lg="4">
        </Col>
        <Col xs="6" md="6" lg="1">

          <h3 className="font-weight-light text-right">Tech: </h3>
        </Col>
        <Col xs="6" md="6" lg="1">
          <div className="float-left">
          <SelectDropDown items={techList} onSelect={(item)=>onLanguageSelect(item)}/>
          </div>
        </Col>
        <Col xs="6" md="6" lg="2">
          <h3 className="font-weight-light text-right">Domain: </h3>
        </Col>
        <Col xs="6" md="6" lg="3">
          <div className="float-left">
            <SelectDropDown items={domainList} onSelect={(item)=>onDomainSelect(item)} />
          </div>
        </Col>
      </Row>
     
      </>
    
  );

}
export default Selection;