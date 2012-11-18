AjaxRequest.prototype.send = function (type, url, handler, postDataType, postData) {
    if (this.request != null) {
        this.request.abort();
        url += "?dummy=" + new Date().getTime();
        
        try {
            this.request.onreadystatechange = handler;
            this.request.open(type, url, true);
            if (type.toLowerCase() == "get") {
                this.request.send(null);
            } else {
                this.request.setRequestHandler("Content-Tyoe", postDataType);
                this.request.send(postData);
            }
        } catch(e) {
            alert("server connection error:" + e);
        }
    }
}
