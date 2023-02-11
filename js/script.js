
//get items
//creat object
// function of show in table
//update button function
//delete button function



//get items
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let table=document.getElementById('table')
let save = document.getElementById('save');


//creat object

let forms=[]; 
let x
save.addEventListener('click',createUser)

function createUser(){
    
let x = JSON.parse(localStorage.getItem('users'))
 
if(x != null){
    forms = x  
}
   let inputs = [fname.value,lname.value,pass.value,email.value]
    forms.push(inputs)
    localStorage.setItem('users',JSON.stringify(forms))

showdata()
}

  
  
// function of show in table
  function showdata() {
    let con=''
  
  for(let i=0;i<forms.length;i++){
  
    con += `<tr>
    <td>${forms[i][0]}</td>
    <td>${forms[i][1]}</td>
    <td>${forms[i][2]}</td>
    <td>${forms[i][3]}</td>
  
     <td><button class="delete" onclick="deleteBtn(${i})">Delete</button></td>
      <td><button class="update" onclick="updateBtn(${i})">Update</button></td>
      </tr> `
    }
    table.innerHTML=con 
  }


  
//update button function
  function deleteBtn(i){
    forms.splice(i,1)
    console.log(forms)
    localStorage.setItem('users',JSON.stringify(forms))
    showdata()
    }
    


//delete button function
  function updateBtn(i){
  forms[i][0]=fname.value
  forms[i][1]=lname.value
  forms[i][2]=pass.value
  forms[i][3]=email.value


  localStorage.setItem('users',JSON.stringify(forms))//store the new array big with out this element
  showdata()
}
































