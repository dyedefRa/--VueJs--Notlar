Vue.component('mycomp',{
    template:` <div>
    <p> Tamamm <slot name="bir"></slot></p> <p> Buraya gelsin => <slot name="iki"></slot></p>
    </div>`
})


window.addEventListener('load',()=>{
const vuee= new Vue({
    'el':'#app',
    name:'slott',
   
})


})