function searchBlog() {
    var searchText = document.getElementById("searchtext").value;
    for (var i = 0; i < blog.length; i++) {
        if (blog[i].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
            alert("[" + (blog[i].date.getMonth() + i + "/" + blog[i].date.getDate() + "/" + blog[i].date.getFullYear() + "]" + blog[i].body));
            break;
        }
    }
    if (i == blog.length) {
        alert("検索テキストを含むエントリは見つかりません");
    }
}
