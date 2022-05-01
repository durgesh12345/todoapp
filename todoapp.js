var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var div = document.createElement("div");

    var txt = document.createTextNode("X");

    div.className = "close";
    div.appendChild(txt);
    myNodelist[i].appendChild(div);
}

function myFunction() {
    if (document.getElementById("input").value.length == 0) {
        alert("Please Enter a Task")
    } else {
        var li = document.createElement("li");
        var value = document.getElementById("input").value;
        var text = document.createTextNode(value);
        li.appendChild(text);
        document.getElementById("close").appendChild(li);

        remove1++;
        document.getElementById("pending").innerHTML = remove1;

        document.getElementById("input").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("X");

        const img = document.createElement("img");
        img.src = "https://picsum.photos/200/301";
        document.body.appendChild(img);

        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        var remove = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < remove.length; i++) {
            remove[i].onclick = function() {
                var div1 = this.parentElement;
                div1.style.display = "none";


                remove1--;
                document.getElementById("pending").innerHTML = remove1;
            }
        }
    }
}
var remove = document.getElementsByClassName("close");

var i;
var remove1 = remove.length;
var a = "pending task";
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        var div1 = this.parentElement;
        div1.style.display = "none";

        remove1--;
        if (remove1 == 1) {
            var a = document.getElementById("pending").src = "https://assets.materialup.com/uploads/cbc3fd32-4877-45cb-b7e5-f184330989ee/preview.png";
        } else {

            var a = document.getElementById("pending").innerHTML = remove1;
        }
        var a = document.getElementById("pending").src = "https://assets.materialup.com/uploads/cbc3fd32-4877-45cb-b7e5-f184330989ee/preview.png";



        // document.getElementById("bar").innerHTML = remove1;

    }
}