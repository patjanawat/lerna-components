<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-using-lerna</h1>
      <h2 class="subtitle">My first-class Nuxt.js project</h2>
       <JTable :items="items" :header="header">JTable</JTable>
      <!-- <jtable /> -->
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import JTable from '@jsilva-pt/j-table/JTable'

export default {
  components: {
    Logo,
    JTable 
  },
  data() {
    return {
      items: [
        
          ["Yair Lamb", "yair.lamb@email.com"],
          ["Leonardo Payne", "leonardo.payne@email.com"],
          ["Carl Henson", "carl.henson@email.com"],
          ["Jensen Combs", "jensen.combs@email.com"],
          ["Amiah Burton", "amiah.burton@email.com"],
          ["Yaretzi Mayo", "yaretzi.mayo@email.com"],
          ["Kamren Huffman", "kamren.huffman@email.com"]
        
      ],
      header: [
        'Name',
        'Email'
      ]
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
