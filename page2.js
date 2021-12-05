var myForm = document.forms.namedItem("myForm");

myForm.addEventListener("submit", function (e) 
{
    e.preventDefault();

    let id = document.getElementById("Student_id").value;
    let name = document.getElementById("Student_name").value;
    let password = document.getElementById("Password").value;
    let department = document.getElementById("Department").value;

    var formdata = new FormData(document.getElementById("myForm"));
    fetch("http://20.210.125.205:5055/Store", {
        method: "POST",
        body: formdata,
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            render(data);
        })
        .catch((error) => console.log("error", error));
});

function render(data) 
{
    if(document.getElementById("Password_check").value != document.getElementById("Password").value)
        alert("兩次密碼輸入不同 請重新確認!");
    else
    {
        alert("申請成功!");
        window.location.replace("./index.html");
    }
}
