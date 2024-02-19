var input = document.getElementById("inn");
var button = document.getElementById("but");
var ol = document.getElementById("list")
var li = document.createElement("li")
var delite = document.createElement("button")

function fly() {
    if (input.value.length > 0) {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ol.appendChild(li)
        input.value = "";
        var delite = document.createElement("button")
        delite.addEventListener('click', function() {
            ol.removeChild(li)
        })
        delite.appendChild(document.createTextNode('Delete'))
            delite.classList.add('delbutton')
            li.appendChild(delite)
        }
}


button.addEventListener("click", fly)

input.addEventListener("keypress", function(entre){
    if (input.value.length > 0 && entre.keyCode === 13) {
       fly() }
})








