import { useState } from 'react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
const SelectDropDown = (props) => {

  const { items } = props;
  const [selectedItem, setSelectedItem] = useState(items[0]);


  return <Dropdown>

  <Dropdown.Toggle variant="success" id="dropdown-basic">
      {selectedItem}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {items.map((item)=><Dropdown.Item onSelect={()=>setSelectedItem(item)} key={item}>{item}</Dropdown.Item>)}
  </Dropdown.Menu>


  </Dropdown>


}
export default SelectDropDown;