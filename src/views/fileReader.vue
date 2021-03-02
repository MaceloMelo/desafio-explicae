<template>
<div>
  <div class="mb-5">
    <h1> LENDO ARQUIVOs .txt</h1>
  </div>
  <div  id="desafioArquivo" v-cloak>
    <b-container class="bv-example-row">
      <b-row>
          <b-col cols="12">
            <div class="input-group mb-3">
            <input type="file" ref="arquivo" @change="seleconarArquivo" class="form-control">
          </div>
            <button @click.prevent="mostrarArquivo" class="btn btn-primary">Enviar</button>
           <div class="mt-3">
            <label for="exampleFormControlTextarea1" class="form-label">Texto será exibido abaixo</label>
            <textarea v-if="mostrar" class="form-control is-invalid" v-model="texto" rows="6"></textarea>
          </div>
          </b-col>
      </b-row>
    </b-container>
  </div>
  </div>
</template>

<script>
export default {
  name:'desafioArquivo',
  data(){
    return {
       mostrar:false,
       texto:''

    }
  },
  methods: {
   seleconarArquivo() {
      let file = this.$refs.arquivo.files[0];
      let reader
      if(!file || file.type !== 'text/plain') return;

      reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {
        this.texto = evt.target.result;
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    },
    mostrarArquivo(event){
      return this.mostrar = true
    } 

  },computed:{

  }

}
</script>
<style>

</style>
