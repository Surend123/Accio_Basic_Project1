/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((obj ,i) =>{
       if(obj.profession ==="developer"){
        console.log(
            `id:${obj.id}, name:${obj.name}, age:${obj.age}, profession:${obj.profession}`
        );
       }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((obj)=>{
        if(obj.profession === "developer"){
            console.log(
                `id:${obj.id}, name:${obj.name}, age:${obj.age}, profession:${obj.profession}`
            );
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4, name:"sky", age:"23", profession:"developer"});
    arr.forEach((obj)=>{
        
            console.log(
                `id:${obj.id}, name:${obj.name}, age:${obj.age}, profession:${obj.profession}`
            );
        
    })
    // console.log(`id:${arr[3].id}, name:${arr[3].name}, age:${arr[3].age}, profession:${arr[3].profession}`)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter((item) =>{
        if(item.profession !=="admin"){
            return true;
        }
    });
    arr.forEach((obj)=>{
        
        console.log(
            `id:${obj.id}, name:${obj.name}, age:${obj.age}, profession:${obj.profession}`
        );
    
    });
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 =[
        { id: 5, name: "pravesh", age: "22", profession: "developer" },
        { id: 6, name: "pratima", age: "21", profession: "developer" },
        { id: 7, name: "yogi", age: "22", profession: "sde" },
    ];

    arr = arr.concat(arr1);
    arr.forEach((obj)=>{
        
        console.log(
            `id:${obj.id}, name:${obj.name}, age:${obj.age}, profession:${obj.profession}`
        );
    
    });

  }