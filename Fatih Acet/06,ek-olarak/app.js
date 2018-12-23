window.addEventListener('load', () => {

    //----------- Vmodel two binding------------
    window.vue = new Vue({
        el: '#vmodel',
        name: 'nice',
        data: {
            value: "Okey"
        },
        methods: {
            writeConsole() {
                console.log(this.value);
            },
            degereata() {
                this.value = "Degisti";
            }
        }

    })

    //---------VCLOAK ILE Gerekliliklerin uygun olup olmamasını yakalamak---------------

    setTimeout(() => {
        new Vue({
            el: '#vcloak',
            data: {
                users: [{ "name": "baki" }, { name: "fatih" }]
            },


        })

    }, 3000)

    //---------SLOT ile comp içinde comp yeri belirleme---------

    Vue.component('myselect', {
        template: `<select> <slot></slot> </select>`
    })
    Vue.component('myoption', {
        template: `<option>{{value}} </option>`,
        props: ['value']
    })
    new Vue({
        el: '#slots',
        data: {
        },
    })

    //-------NextTick ile Dom Last Updating ile son guncel verileri yakalamak-------
    new Vue({
        'el': '#nextTick',
        data: {
            message: 'Hello'
        },
        methods: {
            change() {
                this.message = 'olleH';
                console.log(document.querySelector('#nextTick').innerText);
                //Bu metod  Dom Updatesi bittigi anda yapar ne yapacaksa.
                this.$nextTick(() => {
                    console.log(document.querySelector('#nextTick').innerText);
                });
            }
        }
    })

    //---------Modifierssssssss süperr on tarafta olay.
    Vue.config.keyCodes.budaolsun = 65;
    new Vue({
        'el': '#modifiers',
        methods: {
            log() {
                console.log('foooo');
            }
        }
    })

    //----------Filters
    //Eger bir filteri genel bir hale getirmek istersekte =>
    Vue.filter('genelfilter', (deger) => {
        return deger + ' .genel tanımladık. ';
    })
//bu arada bu genel zımbırtıları en ustte yaz.
    new Vue({
        'el': '#filters',
        data: {
            name: 'camera',
            price: 30
        },
        filters: {
            uppercase(deger) {
                return deger.toUpperCase();
            },
            beseBol(deger) {
                return deger / 5;
            },
            carpveTLyaz(deger) {
                let value = deger * 1.8;
                return `${value.toFixed(2)} tl`;

            }
        }
    })




})

