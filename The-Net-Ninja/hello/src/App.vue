<template>
  <div id="app">
<bus></bus>
    <hr>


<hr>
    <headerr></headerr>
  
  <!-- Globalden alıyoruz -->
  <ninjas :ninjas=isimler></ninjas> 
  <hr>
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>
   <hr>
  <!-- Buraya tanımladık -->
<sss :ninjas=isimler></sss>
 
  <footerr></footerr>
  <hr>

  <!-- <extremee></extremee> -->


   </div>
</template>

<script>
import sss from "./components/Ninjas.vue";
import headerr from "./components/Header.vue";
import footerr from "./components/Footer.vue";

import bus from "./components/bus.vue";
import { car } from "./main";

export default {
  name: "app",
  components: { sss, headerr, footerr, bus },
  data() {
    return {
      isimler: ["Baki", "Fatih", "Merth", "Yusuf"]
    };
  },
 
  created() {
     car.$on("yay", data => {
        console.log(data);
      });
  }
};
</script>

<style>
li {
  list-style-type: none;
}
</style>

