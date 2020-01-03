<template>
  <div class="loops">
      <div v-for="quadrado in quadrados" class="quadrado" v-bind:key="quadrado">
        {{ quadrado }} <br/>
      </div>

      <br/>

      <div v-for="(mutante, index) in mutantes" v-bind:key="mutante.nome">
        {{ index }} - {{ mutante.nome }}
      </div>

      <ul>
        <li v-for="(value, key, index) in wolverine" v-bind:key=key>
          {{ index }} - {{ key }}: {{ value }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Loops',
  data () {
    return {
      quadrados: [
        'quadrado1', 'quadrado2',
        'quadrado3', 'quadrado4',
        'quadrado5', 'quadrado6'
      ],
      mutantes: [
        { nome: 'Scott Summers' },
        { nome: 'Ororo' },
        { nome: 'Logan' },
        { nome: 'Hank' }
      ],
      wolverine: {
        nome: 'Logan',
        poder: 'Cura e garras',
        nomeMutante: 'Woverine',
        grupo: 'X-men'
      }
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
.loops {
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  flex-direction: column;
}
.quadrado {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>
