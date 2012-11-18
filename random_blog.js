function randomBlog() {
    var i = Math.floor(Math.random() * blog.length);
    alert("[" + (blog[i].date.getMonth() + 1) + "/" + blog[i].date.getDate() + "/" + blog[i].date.getFullYear() + "]" + blog[i].body);
}
