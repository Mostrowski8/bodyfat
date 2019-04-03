
// export default function reducer(state, action) {
//     switch (action.type) {
//         case "dropdownToggle":
//             console.log(action.type, state);
//             return {
//                 ...state,
//                 dropdownOpen: !state.dropdownOpen
//             }
//         case "dropdownSelect":
//             console.log(action.type, action.payload, state);
//             if (action.payload.innerText === state.sex) return;
//             return {
//                 ...state,
//                 dropdownOpen: !state.dropdownOpen,
//                 sex: action.payload.innerText,
//                 age: "",
//                 fieldtwo: "",
//                 fieldthree: "",
//                 fieldone: "",
//                 submit: false
//             }
//         case "handleChange":
//             console.log(action.type, action.payload, state);
//             let {
//                 target,
//                 value,
//                 name
//             } = action.payload;
//             if (isNaN(value) && value !== '') return;
//             return {
//                 ...state,
//                 [name]: value === '' ? value : Number(value),
//                 submit: false
//             };
//         case "onSubmit":
//             console.log(action.type, action.payload, state);
//             return {
//                 ...state,
//                 submit: true
//             }
// default:
// console.log("sumtin went rong");
//     }
//     console.log("new state", state);
// }

export default function reducer(state, action) {
    switch (action.type) {
 case "handleInputFieldChange":
 console.log(action.type, action.payload);
 let {value, name} = action.payload;
 let newState = {...state, forms:{...state.forms, [name]:value}}
 console.log("newState", newState);
 return newState
default:
console.log("sumtin went rong", action.type, action.payload);
    }

}
