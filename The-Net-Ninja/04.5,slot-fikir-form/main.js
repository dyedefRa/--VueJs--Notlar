Vue.component('formHelper',{
    template:` <form>
  <h1>Lütfen formu doldurunuz..</h1>
  <hr>
    <div id="form-header">  <slot name="form-header"></slot>  </div>
    <hr>
    <div id="form-fields">  <slot name="form-fields">B</slot>  </div>
    <hr>
    <div id="form-controls"> <slot name="form-controls">C</slot></div>
    <hr>
    <div id="useful-links">
     <ul>
       <li> <a href="#"> Link 1</a> </li>
       <li> <a href="#"> Link 2</a> </li>
       <li> <a href="#"> Link 3</a> </li>
       <li> <a href="#"> Link 4</a> </li>
     </ul>
    </div>

    </form>`
})


window.addEventListener('load',()=>{
const vuee= new Vue({
    'el':'#app',
    name:'slottOrnek2',
   
})


})