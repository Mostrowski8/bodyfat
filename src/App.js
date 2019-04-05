import React, { Component, useReducer, useState, useContext, useEffect } from 'react';
import Context from './reducer/Context'
import reducer from './reducer/Reducer'


//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
    } from 'reactstrap';

let initialState = {
  forms: [
    {name: "age",
    value: 0},
    {name: "thigh",
      value : 0},
    {name: "chest",
      value : 0}, 
    {name: "stomach",
      value: 0} 
  ],
  sex: true,
  sexPickerOpen: false,
  appBarOpen: false,
  submit: false,
  result: null
};

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
  <div style={{minHeight: "100%"}}>
  <Context.Provider value={dispatch}>
  <Appbar appBarOpen={state.appBarOpen}/>
        <Calc {...state} />
  </Context.Provider>     
        </div>
      ) 
  }

const Calc = ({result, sex, forms, submit, sexPickerOpen, ...rest}) => {
console.log("props", sex, submit, forms, "dropdownopen", sexPickerOpen);
const dispatch = useContext(Context);
let inputdone =  forms.find((e) => {return e.value === '' || e.value === 0}) !== undefined ? false : true;
    return(
      <div>
      <div>
        <div className="container">
        {!inputdone && <div className="row"><div className="col-sm instruction">Please enter your age and size of skin folds (mm) on input areas</div></div>}
        <div className="row">
            <div className="col-sm text-center">
              <label className="label">Sex</label>
              <SexPicker sex={sex} sexPickerOpen={sexPickerOpen}/>
            </div>     
          </div> 
          <Formfields sex={sex} forms={forms}/>
          {inputdone && !submit && <button className="buttonfat" onClick={()=>{dispatch({type:"submit"});dispatch({type:"calculate"}); }}>Calculate body fat</button>}
          {submit && <div className="row"><div className="col-sm bodyfat">{"Body fat " + result + "%"}</div></div>}
          </div>
        <Info sex={sex} />
      </div>
      </div>
    )
  }

const Formfields = ({forms, sex}) => {
const dispatch = useContext(Context);
const Formfields = forms.map((form, index)=>{
return <div key={form.name} className="col-sm-12 col-md-3 col-lg-3 text-center">
<div style={{justifyContent:"center"}} className="row text-center">
<label className="col-sm-12 col-6 label">{form.name}</label>
<input name={form.name} className="input" min={0} max={99} value={form.value} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value:e.target.value, name:e.target.name}})}}></input>
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

class Info extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
render() {
return (
<div className="container info"><div className="row"><div className="col-sm">
<Button color="secondary" className="infobttn" onClick={this.toggle} style={{ margin: '1rem' }}>Click for info</Button>
<Collapse isOpen={this.state.collapse}>
<Card>
<CardBody>
<p>The formula has been taken from <a target="_blank" rel="noopener noreferrer" href="https://www.sfd.pl/Zmierz_dok%C5%82adnie_sw%C3%B3j_poziom_t%C5%82uszczu-czyli_wielopartyjna_metoda_pomiaru_fa%C5%82domierzem-t263219.html">this page</a>.</p>
<p>It is based on skinfold measurement method <a target="_blank" rel="noopener noreferrer" href="https://www.ptdirect.com/training-delivery/client-assessment/taking-skin-fold-body-fat-measurements">described here</a>.</p>
<p>Measurements have to be taken from:</p>
<ul>
<li>{(this.props.sex)? "Your chest area":"Your triceps area"}</li>
<li>{(this.props.sex)? "Your stomach area":"Your hip area"}</li>  
<li>Your thigh area</li>    
</ul> 
</CardBody>
</Card>
</Collapse>
</div></div></div>
    )
  }
}

const Appbar = ({appBarOpen}) => {
  console.log("appbaropen", appBarOpen);
  const dispatch = useContext(Context);
  console.log("dispatch", dispatch)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bodyfat claculator</NavbarBrand>
          <NavbarToggler onClick={(e)=>{dispatch({type:"toggle", payload:"appbar"})}}/>
          <Collapse isOpen={appBarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Info</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Mostrowski8/bodyfat">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}


export default App;