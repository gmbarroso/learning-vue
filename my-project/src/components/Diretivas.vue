<template>
  <div class="diretivas">
      <!-- Ao trabalhar com diretivas, eu especifico o que eu quero dentro de data e posso
      ignorar as chaves, não preciso mais deles -->
      <img
        :src="srcImg"
        v-bind:title="titleImg"
    >
    <!-- Quando uso o : direto, o Vue já entende que eu quero usar o v-bind:algumacoisa -->
      <p><strong>X-men</strong></p>
      <p v-text="'texto qualquer'"/>
      <p v-text='outroTexto'/>
      <br />
      <br />
      <!-- v-model -->
      <input type="text" v-model='textoDigitado'>
      <br />
      {{textoDigitado}}
  </div>
</template>

<script>
export default {
  name: 'Diretivas',
  data () {
    return {
      srcImg: '../assets/logo.png',
      titleImg: 'X-men Group',
      outroTexto: 'Outro texto',
      // textoDigitado: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
    color: green;
}
</style>
