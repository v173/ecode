function sendRequest(requestType, url, sendValue) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open(requestType, url, true);
    httpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    if (requestType == "get") {
        httpRequest.send();
    } else if (requestType == "post") {
        httpRequest.send(sendValue);
    }
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            json = JSON.parse(httpRequest.responseText);
            //console.log(json);
        }
    };
    return json;
}

var access_token = "dc6e3fb675b01660d6dcffc85cd70220";

// 获取仓库具体路径下的内容
var url = "https://gitee.com/api/v5/repos/v173/ecode/contents/src/1.txt?access_token=" + access_token;
var json = sendRequest("get", url);

window.atob(json.content); //解码
window.btoa(json.content); //编码

// 新建内容
var url = "https://gitee.com/api/v5/repos/v173/ecode/contents/src%2F4.txt";
var content = "MTIz";
var sendValue = {
    "access_token": access_token,
    "content": content,
    "message": "test"
};
var json = sendRequest("post", url, JSON.stringify(sendValue));

// 更新内容 需要PUT请求，暂时无法使用
var url = "https://gitee.com/api/v5/repos/v173/ecode/contents/src%2F11.txt";
var content = "MTIz";
var sendValue = {
    "access_token": access_token,
    "content": content,
    "sha": "d800886d9c86731ae5c4a62b0b77c437015e00d2",
    "message": "1"
};

var json = sendRequest("put", url, JSON.stringify(sendValue));