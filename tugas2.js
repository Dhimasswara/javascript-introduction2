let name = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol",
            "Caroline","Carolyn","Deirdre","Diana","Elizabeth","Ella","Faith","Olivia","Penelope"];



let findFromChar = (input, limit, Call) => {
    let pull = Call(input, limit);

try {
    if (typeof input !== 'string') throw `Input harus string`;
    if (typeof limit !== 'number') throw `input harus number`;
    if (limit > pull.length-1) throw `Data limit terlalu besar`;

    let inputFilter = pull.filter(a => pull.length > limit).slice(0, limit+1);
 
    console.log(inputFilter);
}catch(e){
    console.log(e);
}
}

let dataCheck = (input,limit) =>{
    let inputFilter = name.filter(lowLine => lowLine.toLowerCase().includes(input.toLowerCase()));
    console.log(inputFilter);
    
    return inputFilter;
}

findFromChar('a',1,dataCheck);


// let findString = (input, limit, filterCall) => {
//     let call = filterCall(input, limit);
//     let fill = call.filter(a => call.length > limit).slice(0, limit+1);
//     return console.log(fill) ;
// }

// try {
   
//     let a = 5;
//     let b = 1;
//     let ss = filterData(a,b);
//     console.log(typeof(a));

//     if (typeof a !== 'string') throw `Input harus bertipe string`;
//     if (typeof b !== 'number') throw `Limit harus bertipe number`;
    
    
//     findString('',2,filterData)

// }catch(e){
//     console.log(e);
// }

