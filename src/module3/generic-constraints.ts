
// generic constraints

type MondatoryTypes = {name: string, age: number}

const addMeInMyCrushMind = <T extends MondatoryTypes>(myInfo: T)=>{
    const crush = "kate winslet"
    const newData = {...myInfo, crush}  
    return newData
}

type MyInfoType ={
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}

const myInfo: MyInfoType = {
    name: "Persina",
    age: 100,
    salary: 100000,
    other1: true,
    other2: null
}


const result4 = addMeInMyCrushMind(myInfo)  

