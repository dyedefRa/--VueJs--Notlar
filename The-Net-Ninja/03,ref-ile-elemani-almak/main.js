window.addEventListener('load', () => {
    const vue = new Vue({
        'el': '#app',
        //Burada direk buttonu inputu vs gibi elementleri ref yardımı ıle alabılıyorum
      methods:{
          readRefs(){
              //
              console.log(this.$refs);
              console.log(this.$refs.zaaa.innerText)
          }
      }
    })

});