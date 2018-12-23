<template>
    <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja">{{ninja}}</li>
    </ul>
</template>

<script>
export default {
props:['ninjas']
};
</script>
<style scoped>
ul li{
   
    color:blueviolet;
}

</style>


