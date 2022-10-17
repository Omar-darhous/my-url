/*function welcome(username='system user',age =16, salary=300)
{
    console.log(`welcome ${username}your age is ${age} your salary${salary}`);
}
welcome("omar" , 21,8000)
*/
/*let person={
    pName:'omar',
    age:21,
    gender:'male',
    wife:
    {
        name:'hanan',age
    }
}
*/
/*let age =[18,29,52,84,12,17]
let adults= age.filter((x)=> x>16  ).map((age)=>age+2);
console.log(adults);
let x =age.reduce((sum,age)=> sum*=age);
console.log(x);
*/
class User
{
    constructor(name,age,genter,salary)
    {
        this.uName = name;
        this.uAge = age;
        this.UGenter = genter;
        this.uSalary= salary;
    }
    welcome(){
        console.log('welcome');
    }
    
}
let user1= new User('omar',21,'male', 10000);

class Engneer extends User
{
    constructor(name,age,genter,salary,deprt,uni)
    {
       super(name,age,genter,salary);
       this.Deprt = deprt;
       this.Uni = uni;
    }
}
let el= new Engneer('salah',30,'male', 4500000,'civel','helwan');
el.welcome();

