const DisplayContainer = document.getElementById('Display');
const enter = document.getElementById('enter');

let myForm = document.forms.namedItem('ProfileForm')
myForm.addEventListener('submit', function(event){
  post_items(event, myForm)
})


function post_items (event, form){
  event.preventDefault()


  let id = document.getElementById("index_Student_id").value

  let param = "http://20.210.125.205:5055/Get?Student_id="+id
    fetch(param,{
        method: 'GET',
        headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
        }
    })
    .then(response => {
        return response.json()
    }) 
    .then( (data) =>{
        render(data)
    })
}

function render(data)
{

    let Student_id = data.Student_id;
    let Student_name = data.Student_name;
    let Password = data.Password;
    let Department = data.Department;
    
    if(Student_id == document.getElementById("index_Student_id").value&&Password == document.getElementById("index_Password").value)
        window.location.href='https://sing.azurewebsites.net/123';
    else
        alert("帳號或密碼輸入錯誤!");

}
function input_account_password()
{
    window.location.href='page2.html';
}

