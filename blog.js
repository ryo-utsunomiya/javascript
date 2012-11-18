function Blog(body, date) {
    this.body = body;
    this.date = date;
}

Blog.prototype.toString = function() {
    return this.body;
}

Blog.prototype.toHTML = function(highlight) {
    var blogHTML = "";
    blogHTML += highlight ? "<p style='background-color:#EEEEEE;'>" : "<p>";
    blogHTML += this.body + "</p>";
    return blogHTML;
}

Blog.prototype.containsText = function(text) {
    return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
}
