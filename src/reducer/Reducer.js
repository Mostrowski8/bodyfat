export default function reducer(state, action) {
    let newState;
    switch (action.type) {
 case "handleInputFieldChange":
 console.log(action.type, action.payload);
 let {value, name} = action.payload;
 if (value>99 || value<0) return state;
 if (isNaN(value)===true) return state;
 newState = {...state, submit:false};
 newState.forms.forEach((form)=> {
   if (form.name===name) form.value=value; 
 });
 console.log("newState", newState);
 return newState
 case "sexChange":
 console.log(action.type, action.payload, action.payload.innerText);
 let sex;
 action.payload.innerText==="Male"? sex=true:sex=false;
 if (sex===state.sex) return {...state};
 newState = {...state}
 let newForms;
 if (sex===true){
    newForms = newState.forms.filter((form)=>{return form.name!=="hips"&&form.name!=="tricep"})
    newState =  {...state, sex, submit:false, forms:[...newForms, {name: "chest", value:""}, {name:"stomach", value:""}]}
  } else {
    newForms = newState.forms.filter((form)=>{return form.name!=="chest"&&form.name!=="stomach"})
    newState =  {...state, sex, submit:false, forms:[...newForms, {name: "hips", value:""}, {name:"tricep", value:""}]}
  }
  console.log("newState", newState);
  return newState;
case "toggle":
console.log(action.type, action.payload);
switch (action.payload) {
  case "sexpicker":
  let sexPickerOpen = !state.sexPickerOpen;
  newState = {...state, sexPickerOpen};
  console.log("newState", newState);
  break;
  case "appbar":
  let appBarOpen = !state.appBarOpen;
  newState = {...state, appBarOpen};
  console.log("newState", newState);
  break;
  case "modal":
  let modalOpen = !state.modalOpen;
  newState = {...state, modalOpen};
  console.log("newState", newState);
  break;
  default:
  console.log("Wrong payload")
}
return newState;
case "submit":
console.log(action.type, action.payload);
newState = {...state, submit:true};
console.log("newState", newState);
return newState;
case "calculate":
console.log(action.type, action.payload);
let result;
let age = state.forms.find((form)=>{return form.name==="age"}).value;
let sum =  state.forms.filter((form)=>{return form.name!=="age"}).reduce((a,b)=>({value: Number(a.value) + Number(b.value)}));

console.log("SUM", sum)
if (state.sex===true){
  result = ((457 / (1.1093800 - (0.0008267 * sum.value)) + (0.0000016 * (sum.value * 2)) - (0.0002574 * Number(age))) - 414.2).toFixed(2);
  
}else{
  result = ((457 / (1.099421 - (0.0009929 * sum.value)) + (0.0000023 * (sum.value * 2)) - (0.0001392 * Number(age))) - 414.2).toFixed(2);
  
}
if (result > 50 || result < 0) result="over 50"
console.log("RESULT",result)
newState = {...state, result:result};
console.log("newState", newState);
return newState;
default:
console.log("sumtin went rong", action.type, action.payload);
    }

}
