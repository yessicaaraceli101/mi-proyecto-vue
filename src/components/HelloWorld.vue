<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Esta aplicación te permite gestionar tus tareas de manera eficiente. 
      Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  margin: 20px 0;
}
</style>