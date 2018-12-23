<template>
      <div id="slider">
        <ul id="slider-resim">
            <li><a href="return true"><img  src="https://i.hizliresim.com/Ln22Rb.jpg" alt=""> </a></li>
            <li><a href="#"><img  src="https://i.hizliresim.com/v5Gyop.jpg" alt=""> </a></li>
            <li><a href="#"><img  src="https://i.hizliresim.com/y4ylya.png" alt=""> </a></li>
            <li><a href="#"><img  src="https://i.hizliresim.com/PQP9A8.gif" alt=""> </a></li>

            
        </ul>
       <ul id="slider-buton">
       </ul>
           </div>
</template>

<script scoped>
export default {
    name:'SliderApp',
created(){
   
var toplamresimsayisi=$("#slider-resim li").length;
//Kaç resim varsa ona göre #slider-buton a  buton ekleyeceğiz
$("#slider-resim li").each(function(){
var index=$(this).index();
$("#slider-buton").append("<li><a href='#'>"+(index+1)+"</a></li>");
    
});

//Butonların a linklerini ve li lerini manuel oluşturduğumuz için csslerini görmüyor burdan yapmamız gerek 
$("#slider-buton li").css({
    "float":"left",
  
    "-webkit-border-radius":"6px",
    "-moz-border-radius":"6px",
    "margin-right":"5px",
     "border-radius":"6px",
});
$("#slider-buton li a").css({
    "text-decoration":"none",
    "display":"block",
    "padding":"3px 6px",
    "color":"white",
   
});

//sayfa yüklendiğinde ilk manuel li'mize aktif classını verelim
$("#slider-buton li:first").addClass("aktif");

//her manul li yi gizleyip sadece ilkini gösterelim
$("#slider-resim li").hide();
$("#slider-resim li:first").show();


//numaralara(#slider-buton li) tıkladıgımızda ,tıkladıgımız yerden devam etsin
$("#slider-buton li").click(function(){
    var index=$(this).index();
   
    $("#slider-buton li").removeClass("aktif");
    $(this).addClass("aktif");
    $("#slider-resim li").hide();
    $("#slider-resim li:eq("+index+")").fadeIn(600);
    sliderr=index;
});
//resme(#slider-resim li) tıkladıgımızda ,tıkladıgımız yerden devam etsin
$("#slider-resim li").click(function(){
    var index=$(this).index();
   
   
   if(index==toplamresimsayisi-1){
       index=-1;
   }
    $("#slider-buton li").removeClass("aktif");
    $("#slider-buton li:eq("+(index+1)+")").addClass("aktif");
    $("#slider-resim li").hide();
    $("#slider-resim li:eq("+(index+1)+")").fadeIn(600);
  sliderr=index+1;
   
});


//Zaman fonksiyonunu tanımladık
var sliderr=0;
$.slider =function(toplam){
    $("#slider-buton li").removeClass("aktif");
    $("#slider-resim li").hide();
    if(sliderr<toplam-1){
        sliderr++;
       
    $("#slider-buton li:eq("+sliderr+")").addClass("aktif");

    $("#slider-resim li:eq("+sliderr+")").fadeIn(900);
    }
    else{
    $("#slider-buton li:first").addClass("aktif");
    $("#slider-resim li:first").fadeIn(900);
   sliderr=0;
    }
}
//fonksiyonu burada calıstırdık
var fonksiyon=setInterval("$.slider("+toplamresimsayisi+")",2000);

//fare resmin üzerindeyken fonksiyonu durdurduk..
$("#slider").hover(function(){
    clearInterval(fonksiyon);
},function(){
    fonksiyon = setInterval("$.slider("+toplamresimsayisi+")",2000);
});




}
}
</script>

<style scoped>
body{
    margin: auto;
    font: 14px Arial;
}
.aktif{
    background-color:#9d0a0a;
}
ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
}
#slider{
  
    width: 704px; 
    height: 304px;
    margin: 20px auto;
    background-color: white;
    overflow: hidden;
    position: relative;
 padding:1px;
    border: 2px solid #ddd;
    opacity: 0.98;
  
    
    
}
#slider:hover{
    opacity: 1;
}

#slider ul#slider-resim li a img{

    width: 700px;
    height: 300px;
}
#slider ul#slider-buton{
    position: absolute;
    bottom: 10px;
    left:10px;
}



</style>
