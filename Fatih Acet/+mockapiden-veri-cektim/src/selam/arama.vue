<template>
   <div class="arama-wrapper">
        <input type="text" v-model="kelime">
    <button @click="ara">ARA</button>
   </div>
</template>

<script>
export default {
  data() {
    return {
      kelime: ""
    };
  },
  methods: {
    ara() {
   
      this.$emit("gitsin", this.kelime);
    }
  }
};
</script>

<style>
.arama-wrapper {
  text-align: right;
}
.arama-wrapper input {
  font-size: 17px;
  padding: 3px 3px;
  font-weight: bold;
}
.arama-wrapper button {
  padding: 5px 30px;
  font-size: 15px;
  margin-right: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>
