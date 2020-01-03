<template>
  <div class="diretivas">
      <!-- Ao trabalhar com diretivas, eu especifico o que eu quero dentro de data e posso
      ignorar as chaves, não preciso mais deles -->
      <!-- <img v-bind:src="srcImg" v-bind:title="titleImg" /> -->
    <!-- Quando uso o : direto, o Vue já entende que eu quero usar o v-bind:algumacoisa -->
      <div v-if="textoDigitado == 1" class='quadrado'></div>
      <div v-else-if="textoDigitado == 2" class='quadrado2'></div>
      <div v-else class='quadrado3'></div>
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
      srcImg: "../assets/xmenGroup.jpg",
      titleImg: 'X-men Group',
      outroTexto: 'Outro texto',
      textoDigitado: ''
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
.diretivas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quadrado {
  width: 100px;
  height: 100px;
  background-color:green;
}
.quadrado2 {
  width: 100px;
  height: 100px;
  background-color: red;
}
.quadrado3 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
p {
    color: green;
}
input {
  width: 200px;
}
</style>
