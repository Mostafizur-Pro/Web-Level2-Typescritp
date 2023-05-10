// Generic interface
interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U
}

const crush1: CrushInterface<boolean, string>={
name:"Winslet",
husband: true,
wife: "Sokhina"
}

const crush2: CrushInterface<string>={
name:"Winslet",
husband: 'Persian'
}


interface HusbandInterface {
    name: string
    salary: number
}
// const crush3: CrushInterface<object>={                               //bad code
// const crush3: CrushInterface<{name:string, salary: number}>={
const crush3: CrushInterface<HusbandInterface>={                        //good code
name:"Winslet",
husband: {
    name: "Persina",
    salary: 0.01
}
}