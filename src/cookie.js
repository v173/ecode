// 增 改
document.cookie = "aini=115";

var oDate = new Date();
oDate.setDate(oDate.getDate()+10);
document.cookie = "aini = 15; expires=" + oDate.toGMTString();

// 删
var oDate = new Date();
oDate.setDate(oDate.getDate()-1);
document.cookie = "aini = 15; expires=" + oDate.toGMTString();

// 查
cookieList = document.cookie.split('; ');
var cl = document.cookie.split("; ");
for(let i = 0; i < cl.length; i++){
    var kv = cl[i].split("=");
    if(kv[0] == "aini"){
        alert(kv[1]);
    }
}
