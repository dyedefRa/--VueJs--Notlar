Vue.component('mycomp', {
    template: ` <h1> Selamun aleykkum {{deger}}</h1>`,
    data() {
       return{
           deger:""
       }
    },
    props: {
        isimver: {
            type: String,
            required: true
        }
    },
    created() {
        this.deger = this.isimver
    }

})



window.addEventListener('load', () => {
    const one = new Vue({
        'el': '#app1',
        data() {
            return {
                title: 'selam ben app 1'
            }
        },
        methods: {
            degis() {
                //two ile diger instancedeki herhangi bir degıskene el atabılıyoruz.
                two.title = "SFAFS";
            }
        }

    });

    const two = new Vue({
        'el': '#app2',
        data: {
            title: 'selam ben app 2'
        }
    })


    //Statik olarak da degıstırebılırsın outside da
    // two.title="HELLO MDG";

})
