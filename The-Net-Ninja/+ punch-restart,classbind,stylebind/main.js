window.addEventListener('load', () => {
    const vue = new Vue({
        'el': '#app',
        name: 'new proj',
        data() {
            return {
                health: 100,
                ended:false
            }
        }
        , methods: {
            punch() {
                this.health -= 10;
                if(this.health<=0){
                    this.ended=true;
                }
            },
            restart(){
                this.health=100;
                this.ended=false;
            }
        }
    })


})