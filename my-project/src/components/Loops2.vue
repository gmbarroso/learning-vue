<template>
  <div class="loops">
    <input type="text" v-model="textoDigitado">
    {{ textoDigitado }} <!-- Two way data bind, como no angular. Nos permite alterar o valor da variável que está dentro do JS -->

    <br/>

    <!-- <button v-on:click="alterarNome()"> Trabalhando com o onClick com o click normal do html -->
    <button @click="alterarNome()"> <!-- Posso usar o @ no lugar do v-on: -->
      Alterar nome
    </button>

    <br/>

    <label v-text="textoDigitado"></label>
  </div>
</template>

<script>
export default {
  name: 'Loops2',
  data () {
    return {
      textoDigitado: ''
    }
  },
  methods: {
    alterarNome () {
      this.textoDigitado = 'Barroso' // Qualquer nome entrado será substituido pelo valor alocado.
      // Aqui funciona como o state do React
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.loops {
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  flex-direction: column;
}
input, button {
  width: 200px;
}
</style>
