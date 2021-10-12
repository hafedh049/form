function test() {
    var fn = document.getElementById("First Name");
    var ln = document.getElementById("Last Name");
    var g = document.getElementById("gender");
    var l = document.getElementById("level");
    var l = document.getElementById("email");
    var phone = document.getElementById("phone");
    var fl = document.getElementById("Facebook Link");
    var feeds = document.getElementById("feedback");
    if (fn.value == "") {
        alert("First Name Required !");
        return false;
    }
    if (ln.value == "") {
        alert("Last Name Required !");
        return false;
    }
    if (g.selectedIndex == 0) {
        alert("Choose Your Gender !");
        return false;
    }
    if (l.selectedIndex == 0) {
        alert("What Is Your Level !");
        return false;
    }
    if (phone.value == "") {
        alert("Please Enter Your Phone Number !");
        return false;
    }
    if (fl.value == "") {
        alert("You Forget Your Facebook Link !");
        return false;
    }
    if (feeds.value == "") {
        alert("Please Give Us FeedBacks !");
        return false;
    }
    return true;
}