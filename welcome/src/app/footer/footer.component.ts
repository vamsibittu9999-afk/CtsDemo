import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  //emp = new Employee(4545, "vamsi");
   emp = new Employee("Rohit", "Sharma");

  constructor() {
    //this.emp.display();
    this.display();
    
    console.log("Name : "+this.emp.Fname, this.emp.Lname);
    console.log("Salary : "+this.emp.GetSal(50000, 5000));
  }

  display() {
    //let arr: (string | number | boolean)[] = ["vamsi", "krishna",355,true, "rohit", "kohli",45,56,2];
    //console.log(arr);

    //generic array
    //let arr: Array<string | number> = ["vamsi", "rohit", 45, 7, "akhil"];
    //arr.push("kohli");
    //arr = arr.concat(["dhoni", "hardik"])

    // console.log(arr.slice(1,4));  //["rohit",45,7]

    // console.log(arr[6]) // dhoni accessing through index

    // console.log(arr.indexOf("hardik")); // 7 accessing the index

    //console.log(arr);

    //for (var i = 0; i < arr.length; i++) {
    //  console.log(arr[i]);
    //}

    //let multidimens: number[][] = [[7,4,9,2,1], [45,87, 18, 63]];
    //console.log(multidimens[0][0]);
    //console.log(multidimens[1][1]);

   //let GetFunction =  (firstname: string, lastname: string): string => {
   //   return firstname + ' ' + lastname;
   // }
    // console.log(GetFunction("Sachin","Tendulkar"))

    //let func = function (firstname: string = "Virat", lastname: string = "Kohli") {
    //  console.log(firstname + ' ' + lastname);
    //}
    //func("Rohit");
    //func("Rohit", "Sharma");
    //func(undefined, "Anushka");

  }



  //sens: Season = Season.Autmn;
  //constructor() {
  //  this.GetSeason();
  //}

  //GetSeason() {
  //  console.log(this.sens);
  //}
}


class Employee {
  Fname: string;
  Lname: string;

  constructor(Fname: string, Lname: string) {
    this.Fname = Fname;
    this.Lname = Lname;
  }

  GetSal(sal:number,pf:number): number{
    return sal - pf;
  }
}




//enum Season {
//  Summer = 2,
//  Winter,
//  Autmn,
//  Spring
//}

//interface IPerson {
//  name: string;
//  display(): void;
//}

//interface IAmount {
//  amount: number;
//}

//class Employee implements IPerson, IAmount {
//  name: string;
//  amount: number;

//  constructor(name: string, amount: number) {
//    this.name = name;
//    this.amount = amount;
//  }

//  display(): void {
//    console.log("name: " +this. name, "amount : " + this.amount);
//  }
//}


//class Person {
//  name: string;

//  constructor(name: string) {
//    this.name = name;
//  }
//}

//class Employee extends Person {
//  amount: number

//  constructor(amount: number,name: string) {
//    super(name);
//    this.amount = amount;
//  }

//  display(): void {
//    console.log("name : " + this.name ,", amount : " + this.amount);
//  }
//}


