window.onload()=function(){
    var B1=document.getElementById("c");
    B1.onclick=click();
    B1.addEventListener('click',function(){alert("1111");},true);
}