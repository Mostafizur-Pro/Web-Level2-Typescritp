// class BankAccount{
//     public readonly id: number
//     public name: string
//     protected _balance: number  // amra private use korbo na.
    
//     // private _balance: number // myAccount.balance=0 
//     // private thakle data change kora jabe na, sudu class ar modde access hobe
//     // private bujanor jonno (_) dewa hoise
//     // byDefault sobgulai public thake

//     constructor(id:number, name: string, balance: number){
//         this.id = id
//         this.name = name
//         this._balance = balance
//     }

//     getbalance(){
//         console.log(`My Current Balance is: ${this._balance}`);
//     }

//     addDeposite(amount: number){
//         this._balance = this._balance + amount
//     }
// }

// const myAccount = new BankAccount(333, "Persian", 20)
// // myAccount.balance=0
// console.log(myAccount);