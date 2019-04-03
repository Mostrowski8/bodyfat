import React, { Component, useReducer, useState, useContext } from 'react';
import Context from './reducer/Context'
import reducer from './reducer/Reducer'


//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

let initialState = {
  forms: {
    age: 0,
    chest: 0, 
    stomach: 0, 
    thigh: 0,
    tricep: 0,
    hips: 0
  },
  sex: true
};

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
  <div style={{minHeight: "100%"}}>
  <h1 className="heading">BODY FAT CALCULATOR</h1>
  <Context.Provider value={dispatch}>
        <Calc {...state} />
  </Context.Provider>     
        </div>
      ) 
  }

const Calc = ({sex, forms, ...rest}) => {
console.log("props", sex, forms)
  
  
  const dispatch = useContext(Context);
   
  
// let calculateMale = (age, chest, stomach, thigh)=>{
//   let result = (457 / (1.1093800 - (0.0008267 * (chest + stomach + thigh)) + (0.0000016 * ((chest + stomach + thigh) ** 2)) - (0.0002574 * age))) - 414.2;
//   if (result<0) result=50;
//   return result
// }

// let calculateFemale=(age, tricep, hips, thigh)=>{
  
//   let result = (457 / (1.099421 - (0.0009929 * (tricep+hips+thigh)) + (0.0000023 * ((tricep+hips+thigh)**2)) - (0.0001392 * age))) - 414.2;
//   if (result<0) result=50;
//   return result 
// }

    // let check = [age, fieldone, fieldtwo, fieldthree];
    // let inputdone =  check.find(e => e === '' || e === 0) !== undefined ? false : true;

    return(
      <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <label className="label">Sex</label>
              {/* <Dropdowna dropdownOpen={dropdownOpen} toggle={toggle} select={select} /> */}
            </div>
            <Formfields sex={sex} forms={forms}/>
            
          </div>
          {/* {inputdone && !submit && <button className="buttonfat" onClick={()=>{dispatch({type:"onSubmit"})}}>Calculate body fat</button>}
          {submit && <div className="row"><div className="col-sm bodyfat">{"Body fat " + ((this.state.sex) ? this.calculateFemale(...check).toFixed(2) : this.calculateMale(...check).toFixed(2)) + "%"}</div></div>}
          {!inputdone && <div className="row"><div className="col-sm bodyfat">Please fill all input fields</div></div>} */}
          </div>
        <Info sex={sex} />
      </div>
      </div>
    )
  }

const Formfields = ({forms, sex}) => {
const dispatch = useContext(Context);


const Formfields = Object.keys(forms).map((from, index)=>{
return <div key={Object.getOwnPropertyNames(forms)[index]} className="col-sm text-center">
<label className="label">{Object.getOwnPropertyNames(forms)[index]}</label>
<input name={Object.getOwnPropertyNames(forms)[index]} className="input" value={from.value} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value:e.target.value, name:e.target.name}})}}></input>
</div>
});


  return (
    <div>
{Formfields}
    {/* <div className="col-sm text-center">
            <label className="label">Age</label>
              <input name="age" className="input"  value={age} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value:e.target.value, name:e.target.name}})}}></input>
            </div>
            <div className="col-sm text-center">
              <label className="label">{sex? "Chest (mm)":"Tricep (mm)"}</label>
              <input name={sex? "chest":"tricep"} className="input"  value={sex? chest:tricep} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value:e.target.value, name:e.target.name}})}}></input>
            </div>
            <div className="col-sm text-center">
              <label className="label">{sex? "Stomach (mm)":"Hips (mm)"}</label>
              <input name={sex? "stomach":"hips"} className="input"  value={sex? stomach:hips} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value:e.target.value, name:e.target.name}})}}></input>
            </div>
            <div className="col-sm text-center">
              <label className="label">Thigh (mm)</label>
              <input name="thigh" className="input" value={thigh} type="number" onChange={(e)=>{dispatch({type:"handleInputFieldChange", payload:{value:e.target.value, name:e.target.name}})}}></input>
            </div> */}
            </div>
  )
}

function Dropdowna (dropdownOpen, toggle, sex) {
 const dispatch = useContext(Context);

    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          {sex}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={(e)=>{dispatch({type:"dropdownSelect", payload:e.target})}}>Male</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={(e)=>{dispatch({type:"dropdownSelect", payload:e.target})}}>Female</DropdownItem>
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



export default App;