var jq=document.createElement("script");
jq.type="text/Javascript";
jq.src="./Jquery/jquery.js"
document.getElementsByTagName('head')[0].appendChild(jq);
setTimeout(function(){
    $(document).ready(function(){
        $("#b1").click(function(){
            alert("123");
        });
    });
},100);
function b1() {
    alert("111");
}