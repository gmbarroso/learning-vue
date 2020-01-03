<template>
  <div class="event">
    <!-- <form v-on:submit="alterarNome('Barroso', $event)"></form> -->
    <form v-on:submit.prevent="alterarNome('Barroso')">
      <input type="text" v-model="textoDigitado">
      <br/>
      <!-- <button @click="alterarNome('Barroso', $event)">
        Alterar nome
      </button> -->
      <button type="submit">
        Alterar Nome
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Event',
  data () {
    return {
      textoDigitado: ''
    }
  },
  methods: {
    alterarNome (sobrenome, event) {
      // event.preventDefault()

      this.textoDigitado = sobrenome

      // console.log(event)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.event {
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  flex-direction: column;
}
input, button {
  width: 200px;
}
</style>
