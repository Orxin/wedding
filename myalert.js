var myurl;

function showit(myurl) {
    document.getElementById('myalert').style.display = "block";
    document.getElementById('myimg').src = myurl;
}

function hideit() {
    document.getElementById('myalert').style.display = "none";
}
