function addBlogEntry() {
    document.getElementById("add").disabled = true;
    document.getElementById("status").innerHTML = "追加中…";

    ajaxReq.send("POST", "add_blog_entry.php", handleRequest,
        "application/x-www-form-urlencoded; charset=UTF-8",
        "date=" + document.getElementById("date").value +
        "body=" + document.getElementById("body").value +
        "&image" + document.getElementById("image").value
    );
}

function handleRequest() {
    if (ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
        document.getElementById("add").disabled = false;
        document.getElementById("ssatus").innerHTML = "";

        alert();
    }
}