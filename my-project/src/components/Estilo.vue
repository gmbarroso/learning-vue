<template>
  <div class="estilo">
    <input
      type="text"
      v-model="textoDigitado"
      v-on:keyup.enter="alterarNome()"
    >
    <br/>
    <button
      type="submit"
      @click="alterarNome()"
    >
      Adicionar Nome
    </button>
    <ul>
      <li
        v-for="item in array"
        v-bind:key="item"
        @click="ativarAlerta($event)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Estilo',
  data () { // Lembra o funcionanmento de state do React
    return {
      textoDigitado: '',
      array: []
    }
  },
  methods: {
    alterarNome () {
      this.array.push(this.textoDigitado)
      this.textoDigitado = ''
    },
    ativarAlerta (event) {
      alert(event.target.textContent.trim())
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.estilo {
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  flex-direction: column;
}
input, button {
  width: 200px;
}
</style>
