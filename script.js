document.getElementById("strawPage").style.display = "none"
function drop(temp){var o = temp.parentElement.children[1].id.toString();document.getElementById(o).classList.toggle("show");}

function straw()
{
    var x = document.getElementById("strawPage");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
