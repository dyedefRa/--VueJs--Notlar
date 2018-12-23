window.addEventListener('load', () => {
    window.vue = new Vue({
        el: '#app',
        data: {
            isLoading: true,
            cartim: [],
            kayitlilar: [], 
            

        },
        methods: {
            //Metod olusturma boyle..
            //hangisi parametresiyle arkadan 'c' yada 's' gonderıyoru<
            //c ise carddan silme s ise kayitlilardan silme
            removeFromCartOrSave(index, hangisi) {
                if (hangisi == 'c') {
                    this.cartim.splice(index, 1);
                } else {
                    this.kayitlilar.splice(index, 1);
                }
            },
            //hangisi parametresiyle carddakini saveye yada savedeki carda atıyoruz.
            addCardRemoveSaveorother(index, hangisi) {
                if (hangisi == 'c') {
                    var cart = this.cartim.splice(index, 1);
                    //splice metodu diziden item siler ve gerıye o itemi doner.
                    //dizi olarak dondugu ıcın [0] indexini alıyoruz asagıda

                    this.kayitlilar.push(cart[0]);
                } else {
                    var saved = this.kayitlilar.splice(index, 1);
                    this.cartim.push(saved[0]);
                }
            },
      
      
        },
        //PROPERTİİİİİ NE FONK NEDE BASKA BISEY.
        //Sepetin toplam fıyatınıoto olarak degıstırmeye yarayacak
        //Bu bir property.Ozel adlarımı var?
        //Computed Properties, o component icinde dinamik bir data hesaplamak icin kullaniliyor. 
        computed: {
            //Buda metod.
            //Cartta foreach ile gezıp total degıskenıne eklettık prıcelerını
            cartTotal() {
                let total=0;
                this.cartim.forEach((s)=>{
                    total+=s.price;
                })
                return total.toFixed(2);
            }

        },



        //Oluşma anında data.json ile oluşturdugumuz verılerı alıyoruz ve data sekmesınde olusturdugumuz dızılerın ıcıne buradan gelen responselerı atıyoruz.
        created() {
            //Constructor metodu olabilir.
            setTimeout(() => {
                fetch('./data.json').
                    then((res) => { return res.json() }).
                    then((res) => {
                        this.isLoading = false;
                        console.log(res);
                        this.cartim = res.cart;
                        this.kayitlilar = res.saved;
                    });

            }, 150);

        }

    })
})