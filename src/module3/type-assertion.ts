// let emni: any;

// emni = "Next Level Web Development";

// (emni as string).length


// function kgToGram(param: string | number): string | number | undefined
// {
//     if(typeof param === 'string'){
//         const value = parseFloat(param) * 1000;
//         return `The Converted result is: ${value} gram`
//     }
//     if(typeof param === 'number'){
//         const value = param * 1000;
//         return value
//     }
// }

// // const resulToBeNumber = kgToGram(1000)      //Old version
// const resulToBeNumber = kgToGram(1000) as number


// type CustomErrorType={
//     message: string
// }

// try{

// }catch(err){
//     console.log((err as CustomErrorType).message);
// }


// const resulToBeNumber = kgToGram(1000) as number  /// system 1
// const resulToBeNumber = <string>kgToGram(1000)  /// system 2
// // system 2 ta amra use korbo na
