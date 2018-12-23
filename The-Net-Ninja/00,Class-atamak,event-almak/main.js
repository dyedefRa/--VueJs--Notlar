window.addEventListener('load', () => {
    const vue = new Vue({
        'el': '#app',
        data: {
           isActived:false,
            x: 0,
            y: 0
        },
        methods: {
            change() {
               this.isActived=!this.isActived;
               console.log(this.isActived);
            },
            changePosition(event) {
                this.x=event.x;
                this.y=event.y;
            }
        }
    })

});