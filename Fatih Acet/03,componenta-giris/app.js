window.addEventListener('load', () => {

    //Her componentin kendine ait methodu var.
    Vue.component('ahah', {
        template: `
     <h1 style="display:inline" @click="sayHello"> Selam Component</h1>
     `,
        methods: {
            sayHello() {
                console.log('HELLO MDF');
            }
        }


    });
    window.vue = new Vue({
        el: '#app',
        name: 'FasaFiso'

    })
})