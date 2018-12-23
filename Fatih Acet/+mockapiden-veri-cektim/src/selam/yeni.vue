

<template>
    <table border="1">
     <thead>
        
         <th>ID</th>
          <th>Kitap Adı</th>
           <th>Yazarı</th>
            <th>Yayin Evi</th>
             <th>Basım Yeri</th>
       
     </thead>
     <tbody>
        <tr v-for="kitap in yenidetanimli"> 
          <td>{{kitap.id}}</td>
          <td>{{kitap.kitapad}}</td>
          <td>{{kitap.yazar}}</td>
          <td>{{kitap.yayinevi}}</td>
           <td>{{kitap.basimyeri}}</td>
        </tr>
     </tbody>
   </table>
</template>

<script>
export default {
    props:['yenidetanimli']
 
};
</script>

<style>
table{
    margin: 0 auto;
}
</style>
