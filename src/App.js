import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dropdowna extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this)
    this.state = {
      dropdownOpen: false,
      value: 'Male'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    if (event.target.innerText === this.state.value)
      return;
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
    this.props.setSex()
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.state.value}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>Male</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.select}>Female</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state={
      age: "",
      fieldtwo: "",
      fieldthree: "",
      fieldone: "",
      submit: false,
      inputdone: false,
      sex: true
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setSex = this.setSex.bind(this);
  }

  handleChange(event){
    let target = event.target;
    let value = event.target.value;
    let name = target.name;
    if (isNaN(value) && value !== '') 
      return;
      this.setState({
        [name]: value === ''? value : Number(value)
      })
      this.setState({submit: false})
  }
  
  onSubmit(){
    this.setState({
      submit: true
    })
  }

calculateMale(age, chest, stomach, thigh){
  let result = (457 / (1.1093800 - (0.0008267 * (chest + stomach + thigh)) + (0.0000016 * ((chest + stomach + thigh) ** 2)) - (0.0002574 * age))) - 414.2;
  if (result<0) result=50;
  return result
}

calculateFemale(age, tricep, hips, thigh){
  let result = (457 / (1.099421 - (0.0009929 * (tricep+hips+thigh)) + (0.0000023 * ((tricep+hips+thigh)**2)) - (0.0001392 * age))) - 414.2;
  if (result<0) result=50;
  return result 
}

setSex(){
  this.setState({sex: !this.state.sex,
    age: "",
      fieldtwo: "",
      fieldthree: "",
      fieldone: "",
      submit: false
  });
}

  render(){
    let check = [this.state.age, this.state.fieldone, this.state.fieldtwo, this.state.fieldthree];
    let submit = this.state.submit;
    let inputdone =  check.find(e => e === '' || e === 0) !== undefined ? false : true;
    return(
      <div>
      <div className="container">
      <div className="row">
      <div className="col-sm text-center">
      <label className="label">Sex</label>
      <Dropdowna setSex={this.setSex} sex={this.state.sex} />
      </div>
      <div className="col-sm text-center">
      <label className="label">Age</label>
      <input name="age"  value={this.state.age} className="input" type="text" onChange={this.handleChange}></input>
      </div>
      <div className="col-sm text-center">
      <label className="label">{(this.state.sex)? "Chest (mm)":"Triceps (mm)"}</label>
      <input name="fieldone" className="input"  value={this.state.fieldone} type="text" onChange={this.handleChange}></input>
      </div>
      <div className="col-sm text-center">
      <label className="label">{(this.state.sex)? "Stomach (mm)":"Hips (mm)"}</label>
      <input name="fieldtwo" className="input"  value={this.state.fieldtwo} type="text" onChange={this.handleChange}></input>
      </div>
      <div className="col-sm text-center">
      <label className="label">Thigh (mm)</label>
      <input name="fieldthree" className="input" value={this.state.fieldthree} type="text" onChange={this.handleChange}></input>
      </div>
      </div>
      {inputdone && !submit && <button className="buttonfat" onClick={this.onSubmit}>Calculate body fat</button>}
      {submit && <div className="row"><div className="col-sm bodyfat">{"Body fat " + ((this.state.sex) ? this.calculateFemale(...check).toFixed(2) : this.calculateMale(...check).toFixed(2)) + "%"}</div></div>}
      {!inputdone && <div className="row"><div className="col-sm bodyfat">Please fill all input fields</div></div>}
      </div>
      <Info sex={this.state.sex} />
      </div>
    )
  }
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

class App extends Component {
constructor(props){
  super(props);
  this.state={
    female: false
  }
}

render() {

return (
<div style={{minHeight: "100%"}}>
<h1 className="heading">BODY FAT CALCULATOR</h1>

      <Calc />
      
      </div>
    );
  }
}

export default App;