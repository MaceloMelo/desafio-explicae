<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="">
      <h3>Utilizações</h3>
      <div>
        <b-list-group horizontal="md" class="justify-content-center mt-4">
          <b-list-group-item>Vue Router</b-list-group-item>
          <b-list-group-item>Bootstrao Vue</b-list-group-item>
          <b-list-group-item>FileReader</b-list-group-item>
          <b-list-group-item>Axios</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
