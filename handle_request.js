/**
 * User: ryo
 * Date: 2012/11/17
 * Time: 16:01
 */
function handleRequest() {
    if (ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
        var xmlData = ajaxReq.getResponseXML().getElementsByTagName("blog")[0];

        Blog.prototype.signature = "by" + getText(xmlData.getElementsByTagName("author")[0]);

        var entries = xmlData.getElementsByTagName("entry");
        for (var i = 0; i < entries.length; i++) {
            blog.push(new Blog(getText(entries[i].getElementsByTagName("body")[0]),
            new Date(entries[i].getElementsByTagName("date")[0])),
            getText(entries[i].getElementsByTagName("image")[0]));
        }

        document.getElementById("search").disabled = false;
    }
}

function loadBlog() {
    document.getElementById("blog").innerHTML = "loading";
    ajaxReq.send("GET", "blog.xml", handleRequest);
}