Vue.component('form1', {
    template: ` <div>
    BURASI FORM 1
    <input type="text">
    </div>`
})

Vue.component('form2', {
    template: ` <div style='margin-left:20px;'>
    BURASI FORM 2
    </div>`
})


window.addEventListener('load', () => {
    const vuee = new Vue({
        'el': '#app',
        name: 'slott',
        data() {
            return {
                form1yada2: "form1"
            }
        },
        methods: {
            degis() {
                if (this.form1yada2 == "form1") {
                    this.form1yada2 = "form2";
                } else {
                    this.form1yada2 = "form1";
                }
            }
        }

    })


})