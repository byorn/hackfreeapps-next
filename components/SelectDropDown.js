import { useState } from 'react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
const SelectDropDown = (props) => {

  const { items, onSelect } = props;
  const [selectedItem, setSelectedItem] = useState("All");


  const onSelectDropDown = (item) => {
      setSelectedItem(item);
      onSelect(item);
  }

  return <Dropdown>

  <Dropdown.Toggle variant="success" id="dropdown-basic">
      {selectedItem}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {items.map((item)=><Dropdown.Item onSelect={()=>onSelectDropDown(item)} key={item}>{item}</Dropdown.Item>)}
  </Dropdown.Menu>


  </Dropdown>


}
export default SelectDropDown;