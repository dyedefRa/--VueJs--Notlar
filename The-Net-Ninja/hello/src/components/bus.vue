<template>
    <button @click="go">Gonder</button>
</template>

<script>
 import { car } from '../main'
export default {
methods:{
    go(){
        car.$emit('yay','deger');
    }
}

}
</script>

<style>

</style>
