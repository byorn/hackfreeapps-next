import SelectDropDown from './SelectDropDown'

const Selection = () => {

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <h3 className="font-weight-light text-right">Language</h3>
        </div>
        <div className="col-sm-3 text-left">
          <SelectDropDown items={['React', 'Node', 'Java']} />
        </div>
        <div className="col-sm-3">
          <h3 className="font-weight-light text-right">Domain</h3>
        </div>
        <div className="col-sm-3 text-left">
          <SelectDropDown items={['Travel', 'Insurance', 'Shopping Cart', 'Email Marketting']} />
        </div>
      </div>
    </>
  );

}
export default Selection;