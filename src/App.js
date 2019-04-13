import React, { useReducer, useContext} from 'react';
import Context from './reducer/Context'
import reducer from './reducer/Reducer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody } from 'reactstrap';

let initialState = {
  forms: [
    {name: "age",
    value: ""},
    {name: "thigh",
      value : ""},
    {name: "chest",
      value : ""}, 
    {name: "stomach",
      value: ""} 
  ],
  sex: true,
  sexPickerOpen: false,
  appBarOpen: false,
  submit: false,
  result: null,
  modalOpen: false
};

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
  <div style={{minHeight: "100%"}}>
  <Context.Provider value={dispatch}>
  <Appbar {...state}/>
        <Calc {...state} />
  </Context.Provider>     
        </div>
      ) 
  }

const Calc = ({result, sex, forms, submit, sexPickerOpen}) => {
const dispatch = useContext(Context);
let inputdone =  forms.find((e) => {return e.value === '' || e.value === 0}) !== undefined ? false : true;
    return(
      <div>
      <div>
        <div className="container">
        {!inputdone && <div className="row"><div className="col-sm instruction">Please enter your age and size of skin folds (mm) on input areas</div></div>}
        <div className="row">
            <div className="col-sm text-center">
              <label className="label">sex</label>
              <SexPicker sex={sex} sexPickerOpen={sexPickerOpen}/>
            </div>     
          </div> 
          <Formfields sex={sex} forms={forms}/>
          {inputdone && !submit && <button className="buttonfat" onClick={()=>{dispatch({type:"submit"});dispatch({type:"calculate"}); }}>Calculate body fat</button>}
          {submit && <div className="row"><div className="col-sm bodyfat">{"Body fat " + result + "%"}</div></div>}
          </div> 
      </div>
      </div>
    )
  }

const Formfields = ({forms}) => {
const dispatch = useContext(Context);
const Formfields = forms.map((form, index)=>{
return <div key={form.name} style={{justifyContent:"center"}} className="col-12 text-center">
<div style={{justifyContent:"center"}} className="row text-center">
<label className="col-xs-6 col-sm-6 label">{form.name}</label>
<div className="col-xs-6 col-sm-6 inputfield" ><input name={form.name} className="input" min={1} max={99} value={form.value} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value: parseInt(e.target.value), name:e.target.name}})}}></input></div>
</div>
</div>
});
  return (
    <div style={{marginTop:"20px"}} className="row text-center">
{Formfields}
    </div>
  )
}

const SexPicker = ({sexPickerOpen, sex}) => {
 const dispatch = useContext(Context);
    return (
      <ButtonDropdown direction={"up"} isOpen={sexPickerOpen} toggle={()=>{dispatch({type:"toggle", payload:"sexpicker"})}}>
        <DropdownToggle  caret>
          {sex? "Male":"Female"}
        </DropdownToggle>
        <DropdownMenu className={"dropDownMenu"}>
          <DropdownItem className={"dropdownItem"} onClick={(e)=>{dispatch({type:"sexChange", payload:e.target})}}>Male</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className={"dropdownItem"} onClick={(e)=>{dispatch({type:"sexChange", payload:e.target})}}>Female</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    ); 
}

const Appbar = ({appBarOpen, modalOpen, sex, ...rest}) => {
  const dispatch = useContext(Context);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bodyfat claculator</NavbarBrand>
          <NavbarToggler onClick={(e)=>{dispatch({type:"toggle", payload:"appbar"})}}/>
          <Collapse isOpen={appBarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <InfoModal modalOpen={modalOpen} sex={sex}/>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/Mostrowski8/bodyfat">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

const InfoModal = ({modalOpen, sex}) => {
  const dispatch = useContext(Context);
    return (
      <div>
        <NavLink style={{cursor:"pointer"}} onClick={()=>{dispatch({type:"toggle", payload:"modal"})}}>Info</NavLink>
        <Modal isOpen={modalOpen} toggle={()=>{dispatch({type:"toggle", payload:"modal"})}}>
          <ModalHeader toggle={()=>{dispatch({type:"toggle", payload:"modal"})}}>Info</ModalHeader>
          <ModalBody>
          <p>The formula has been taken from <a target="_blank" rel="noopener noreferrer" href="https://www.sfd.pl/Zmierz_dok%C5%82adnie_sw%C3%B3j_poziom_t%C5%82uszczu-czyli_wielopartyjna_metoda_pomiaru_fa%C5%82domierzem-t263219.html">this page</a>.</p>
          <p>It is based on skinfold measurement method <a target="_blank" rel="noopener noreferrer" href="https://www.ptdirect.com/training-delivery/client-assessment/taking-skin-fold-body-fat-measurements">described here</a>.</p>
          <p>Measurements have to be taken from:</p>
          <ul>
          <li>{(sex)? "Your chest area":"Your triceps area"}</li>
          <li>{(sex)? "Your stomach area":"Your hip area"}</li>  
          <li>Your thigh area</li>    
          </ul> 
          </ModalBody>
        </Modal>
      </div>
    );
  }

export default App;