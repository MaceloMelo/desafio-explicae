<template>
<div>
  <div class="mb-5">
    <h1> CONSUMINDO API</h1>
    </div>
<b-container class="bv-example-row">
  <b-row>
    <b-col cols="12">
        <div>
          <b-table-simple hover small caption-top stacked>
            <caption class="text-center">Listagem de Dados via AXIOS</caption>
            <colgroup><col><col></colgroup>
            <b-thead head-variant="dark">
              <b-tr>
                <b-th>NOME</b-th>
                <b-th>EMAIL</b-th>
                <b-th>TELEFONE</b-th>
                <b-th>CELULAR</b-th>
                <b-th>GENERO</b-th>
                <b-th>LOCAL</b-th>
                <b-th>IDADE</b-th>
                <b-th>NACIONALDADE</b-th>
                <b-th>REGISTRO</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(usuarios,id) in dados" :key="id">
                <b-th stacked-heading="NOME" >{{usuarios.name.first}}</b-th>
                <b-td stacked-heading="EMAIL">{{usuarios.email}}</b-td>
                <b-td stacked-heading="TELEFONE">{{usuarios.phone}}</b-td>
                <b-td stacked-heading="CELULAR">{{usuarios.cell}}</b-td>
                <b-td stacked-heading="GENERO">{{usuarios.gender}}</b-td>
                <b-td stacked-heading="LOCAL">{{usuarios.location.city}}</b-td>
                <b-td stacked-heading="IDADE">{{usuarios.dob.age}}</b-td>
                <b-td stacked-heading="NACIONALDADE">{{usuarios.nat}}</b-td>
                <b-td stacked-heading="DATA">{{usuarios.registered.date}}</b-td>
              </b-tr>
              <div class="mt-2"><b-button variant="success" @click="obterDados">Obter Dados</b-button></div>
            </b-tbody>
          </b-table-simple>
        </div>
      </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
export default {
  name:'Table',
  data(){
    return {
      dados:[],
      usuarios:{}

    }
  },methods: {
   obterDados(){
      this.$http.get('api').then(res =>{
        this.dados = res.data
        this.dados = this.dados.results
        console.log(this.dados);
      })
    } 

  },computed:{

  }

}
</script>
