<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <JTable :items="items" :header="header">JTable</JTable>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import JTable from "@jsilva-pt/j-table/JTable"

export default {
  name: "app",
  components: {
    HelloWorld,
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
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
