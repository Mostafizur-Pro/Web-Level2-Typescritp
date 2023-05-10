// // Mocking
// const makePromise = (): Promise<string> =>{
//     return new Promise<string>((resolve, reject)=>{
//         const data: string = "Data is fetched"
//         if(data){
//             resolve(data)
//         }else{
//             reject('Failed to fetch data!')
//         }
//     })
// }
// // System-1
// const getPromiseData =async ():Promise<void> => {
//     const data = await makePromise()
//     console.log(data); 
// }

// getPromiseData()

// // System-2
// // const getPromiseData =async ():Promise<string> => {
// //     const data = await makePromise()
// //     return data
// // }

// // const getPromiseDataExport = async (): Promise<void>=>{
// //     const result = await getPromiseData()
// //     console.log(result);
// // }

// // getPromiseDataExport()






// interface ITodo {
//     userId: number
//     id: number
//     title: string
//     completed: boolean
// }

// const getTodo =async ():Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     return await response.json()
// }

// const getTodoData = async(): Promise<void>=>{
//     const result = await getTodo()
//     console.log(result);
// }

// // getTodoData()