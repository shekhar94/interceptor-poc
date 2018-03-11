$.ajaxSetup({
    beforeSend: function(xhr) {
        console.log("inside intercepter");
        xhr.setRequestHeader('Authorization', 'Token 123');
    }
});
// http://www.diwebsity.com/2015/11/26/intercept-http-requests-ajaxjquery/