Vue.component('cartcomp', {
   
    props: {
        
        //Bu prop un altındakı propları templatede kullanabılıyorum.
        //ve bu propları html tarafında component elemntınde attrıbutesınde alıyoruz
        //Ayrıca ındexten dırek kopyaladıgımız ıcın metodları ve ozel compoted propetrilerimizi tabıkı gormeyecek bu copmponent için ozel olusturmalıyız.
        cartim: {
            type: Array,
            required: true,
            default: () => {
                return [];
            }
        },
        //Bu alan dırek baslıgı olusturacak. card ve kayitlilar adındakı dızılerı gezdırecegım bu templatede.
        //fark olarak ısımlerı vardı bunu da strıng olara kbu baslıkpropula halledıyorum.
        baslikpropu:{
            type:String,
            required:true

        },
        //bu ozellıge arkada safeforlater yada  shoppingcart verdık. cunku bırınde Safe For Later dıgerınde Move To Cart diyoruz ve yazdıgımız fonkısyonda 'c' ve 's' parametrelerını rahatca verdık.
        // removeFromCartOrSave metodunda yanı
         type:{
            type:String,
            required:true
        }
    },
    //Tempaltede bir adet nesne olmalı yanı hepsını bır dıv ıcıne al
    template:
        `
        <div class='card-wrapper'>
    <h2>{{baslikpropu}} <span style="color:green">({{cartim.length}})</span></h2>
    <p v-if="!cartim.length">There is no item </p>
    <div class="cart">
       
        <div class="item" v-for="(item,index) in cartim">
            <div class="image">
                
                <a v-bind:href="item.url">
                    <img v-bind:src="item.image" alt="">
                </a>
            </div>
            <div class="info">
                <h4>{{item.name}}</h4>
                <p class="seller">{{item.seller}}</p>
               
                <p class="status available" v-if="item.yayinda">Stokta Var.</p>
                <p class="status-nonavailable" v-else>Stokta Yok .</p>
                <p class="shipping" v-if="item.kargokDestekli">Ücretsiz Kargo</p>
                
               <div v-if="type=='shoppingcart'">
               <a href="#" v-on:click="removeFromCartOrSave(index,'c')">Delete</a>
               <a href="#" class="secondary" v-on:click="addCardRemoveSaveorother(index,'c')">Save For Later</a>
               </div>

               <div v-if="type=='safeforlater'">
               <a href="#" v-on:click="removeFromCartOrSave(index,'s')">Delete</a>
               <a href="#" class="secondary" v-on:click="addCardRemoveSaveorother(index,'s')">Move To Cart</a>
               </div>
            </div>
            <p class="price">\${{item.price.toFixed(2)}}</p>
        </div>
     
        <div class="subtotal">Subtotal ({{cartim.length}}) Item<span v-if="cartim.length>1">s</span> : <span class="price">$
    {{cartTotal}}</span> </div>
       
    </div>
    </div>
    `,
    computed: {
        //Buda metod.
        //Cartta foreach ile gezıp total degıskenıne eklettık prıcelerını
        cartTotal() {
            let total = 0;
            this.cartim.forEach((s) => {
                total += s.price;
            })
            return total.toFixed(2);
        }

    },
    methods: {
        //Metod olusturma boyle..
        //hangisi parametresiyle arkadan 'c' yada 's' gonderıyoru<
        //c ise carddan silme s ise kayitlilardan silme
        removeFromCartOrSave(index, hangisi) {
            if (hangisi == 'c') {
                vue.cartim.splice(index, 1);
            } else {
                vue.kayitlilar.splice(index, 1);
            }
        },
        //hangisi parametresiyle carddakini saveye yada savedeki carda atıyoruz.
        addCardRemoveSaveorother(index, hangisi) {
            if (hangisi == 'c') {
                var cart = vue.cartim.splice(index, 1);
                //splice metodu diziden item siler ve gerıye o itemi doner.
                //dizi olarak dondugu ıcın [0] indexini alıyoruz asagıda

                vue.kayitlilar.push(cart[0]);
            } else {
                var saved = vue.kayitlilar.splice(index, 1);
                vue.cartim.push(saved[0]);
            }
        },


    }
    
})


window.addEventListener('load',()=>{

window.vue = new Vue({
    el: '#app',
    data: {
        isLoading: true,
        cartim: [],
        kayitlilar: [],


    },
 
 
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