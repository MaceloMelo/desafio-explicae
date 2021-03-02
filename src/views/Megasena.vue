<template>
  <div>
    <div class="mb-5">
    <h1> SORTEIO MEGA SENA</h1>
    </div>
<b-container class="bv-example-row">
  <b-row>
    <b-col cols="12">
          <b-table-simple class="w-100">
            <caption class="text-center">
               <b-alert show variant="success">1° Sorteio: {{primeiraDezena}}</b-alert>
               <b-button variant="primary"  @click="SortearPrimeiraDezenas">Sortear Numeros</b-button>
            </caption>
            <colgroup><col><col></colgroup>
            <b-tbody>
              <b-tr>
                <b-th :class="(primeiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(0,10)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(primeiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(10,20)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(primeiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(20,30)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(primeiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(30,40)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(primeiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(40,50)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(primeiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(50,60)">{{value}}</b-th>
              </b-tr>
            </b-tbody>
          </b-table-simple>
      </b-col>
      <b-col cols="12">
          <b-table-simple class="w-100">
            <caption class="text-center">
               <b-alert show variant="success">1° Sorteio: {{segundaDezena}}</b-alert>
               <b-button variant="primary"  @click="SortearSegundaDezenas">Sortear Numeros</b-button>
            </caption>
            <colgroup><col><col></colgroup>
            <b-tbody>
              <b-tr>
                <b-th :class="(segundaDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(0,10)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(segundaDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(10,20)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(segundaDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(20,30)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(segundaDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(30,40)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(segundaDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(40,50)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(segundaDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(50,60)">{{value}}</b-th>
              </b-tr>
            </b-tbody>
          </b-table-simple>
      </b-col>
      <b-col cols="12">
          <b-table-simple class="w-100">
            <caption class="text-center">
               <b-alert show variant="success">3° Sorteio: {{terceiraDezena}}</b-alert>
               <b-button variant="primary"  @click="SortearTerceiraDezenas">Sortear Numeros</b-button>
            </caption>
            <colgroup><col><col></colgroup>
            <b-tbody>
              <b-tr>
                <b-th :class="(terceiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(0,10)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(terceiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(10,20)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(terceiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(20,30)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(terceiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(30,40)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(terceiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(40,50)">{{value}}</b-th>
              </b-tr>
              <b-tr>
                <b-th :class="(terceiraDezena.includes(value) == true)?'corSorteio':'false'"  v-for="value in RandomNumeros.slice(50,60)">{{value}}</b-th>
              </b-tr>
            </b-tbody>
          </b-table-simple>
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
      num:0,
        contador:0,
        primeiraDezena:[],
        segundaDezena:[],
        terceiraDezena:[],
        contadorSorteio:6,
        aleatorios:[],
        posicao:0,
        tamanhoArray:0,
        status:false,
        classeCss:'corSorteio',
        min:1,
        max:60

    }
  },
    computed:{
        RandomNumeros(){
            this.min = Math.ceil(1);// valor this.minimo do random
            this.max = Math.floor(60);// valor this.maximo do random  
            for (this.num = 1; this.num <= 60; this.num++){
                this.aleatorios.push(this.num);
            }
            this.num2 = Math.floor(Math.random() * (this.max - this.min)) + this.min; // função para gerar numeros aleatorios entre os paramentros definidos
            console.log(this.num2);
            return this.aleatorios

            },

      
  },

   methods: {

/*----------------------------------PRIMEIRO SORTEIO--------------------------------*/
        SortearPrimeiraDezenas(){
            /* laço para executar o sorteio */
            for (this.contadorSorteio = 0; this.contadorSorteio <= 6; this.contadorSorteio++){
                /* valor this.minimo do random */
                this.min = Math.ceil(1);
                /* valor this.maximo do random */
                this.max = Math.floor(60);
                this.posicao = this.aleatorios.indexOf(this.primeiraDezena)
                /* vtamanho do array, para limitar em 6*/
                this.tamanhoArray = this.primeiraDezena.length;
                /* função para gerar numeros aleatorios entre os paramentros definidos  */
                this.num = Math.floor(Math.random() * (this.max - this.min)) + this.min;   
                if(this.num === this.num && this.tamanhoArray < 6 ){ 
                 /* adicioana os nuemros sorteados no array de dezenas*/
                this.primeiraDezena.push(this.num);
                /* utiliza a função SET para criar novo array ordenado*/
                const novo = [...new Set(this.primeiraDezena)]
                /* utiliza afunção SORT como parametro a função ORDENAÇÃO parar colocar em ordem crescente o array */
                this.primeiraDezena = novo.sort(ordenacao);
                        }    
            /* função para ordenar array em ordem crescente, caso queira decreceste é só mudar a posição de a - b no return */
                function ordenacao(a,b) {
                    return a - b
                }
            }
            
          
        },
/*----------------------------------PRIMEIRO SORTEIO--------------------------------*/


/*----------------------------------SEGUNDO SORTEIO--------------------------------*/
        SortearSegundaDezenas(){
            for (this.contadorSorteio = 0; this.contadorSorteio <= 6; this.contadorSorteio++){
                this.min = Math.ceil(1);
                this.max = Math.floor(60);
                this.posicao = this.aleatorios.indexOf(this.segundaDezena)
                this.tamanhoArray = this.segundaDezena.length;
                this.num = Math.floor(Math.random() * (this.max - this.min)) + this.min;         
                    if(this.num === this.num && this.tamanhoArray < 6 ){ 
                        this.segundaDezena.push(this.num);
                        const novo = [...new Set(this.segundaDezena)]
                        this.segundaDezena = novo.sort(ordenacao);
                        }    
          
                function ordenacao(a,b) {
                    return a - b
                }
            }
            
          
        },
/*----------------------------------SEGUNDO SORTEIO--------------------------------*/


/*----------------------------------TERCEIRO SORTEIO--------------------------------*/
        SortearTerceiraDezenas(){
            for (this.contadorSorteio = 0; this.contadorSorteio <= 6; this.contadorSorteio++){
                this.min = Math.ceil(1);
                this.max = Math.floor(60);
                this.posicao = this.aleatorios.indexOf(this.terceiraDezena)
                this.tamanhoArray = this.terceiraDezena.length;
                this.num = Math.floor(Math.random() * (this.max - this.min)) + this.min;       
                    if(this.num === this.num && this.tamanhoArray < 6 ){ 
                        this.terceiraDezena.push(this.num);
                        const novo = [...new Set(this.terceiraDezena)]
                        this.terceiraDezena = novo.sort(ordenacao);
                        }    
            
                function ordenacao(a,b) {
                    return a - b
                }
            }
            
          
        },
/*----------------------------------TERCEIRO SORTEIO--------------------------------*/         


    },
}
</script>

<style>

.corSorteio{
        background-color: #ff00ff;
        color: white;

    }
</style>