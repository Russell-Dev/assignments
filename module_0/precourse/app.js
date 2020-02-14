
function myFunction() {
    document.getElementById("demo").innerHTML = "Liked.";
}

function looper() {
    for (var i = 0; i < 10; i++) {
        document.getElementById("demo1").innerHTML = "I think so anyways!"
        if (i % 2 === 0) {
            console.log("this number " + i + " is even")
        } else {
            console.log("this number " + i + " is odd")
        }
        console.log(i)
    }
}

