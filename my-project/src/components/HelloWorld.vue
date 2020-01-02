<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <!-- fazendo um bind entre o html e o script -->
    <!-- Dentro das {{}} Eu posso trabalhar com JS puro -->
    <h2>{{ `${mutantes[0]} e ${mutantes[2]}` }}</h2>
    <h3>{{ metodo(3) }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mutantes: ['cyclops', 'storm', 'wolverine', 'beast']
      // data é usado mais para armazenar informações. Quando queremos trabalhar com uma funçãio, não trabalhamos com ela dentro de data
      // fun: () => {
      //   return 'Sou uma função'
      // }
    }
  },
  methods: {
    // Aqui dentro de methods eu posso trabaklhar com as funções.
    metodo (indice) {
      return `Mutante: ${this.mutantes[indice]}` // usar this para fazer revferencia ao objeto que estou trbalhando no vue.
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
