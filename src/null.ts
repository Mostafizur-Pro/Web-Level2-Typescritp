// nullable type

const searchName = (value: string | null)=>{
    if(value === null){
        console.log("There is nothing to search");
    }else{
        console.log("Searching");
    }
}

searchName(null)    // result : There is nothing to search
searchName('Mostafizur')    // result : Searching
