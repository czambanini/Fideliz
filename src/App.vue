<template>
  <Header>
    <HeaderLink>Criar Conta</HeaderLink>
  </Header>

</template>

<script>
import Header from "./components/Header/Header.vue";
import HeaderLink from "./components/Header/HeaderLink.vue";
import FInput from "./components/Input.vue";
import FButton from "./components/Button.vue";
import StampTrack from "./components/StampTrack/StampTrack.vue";

export default {
  name: 'App',
  components: { Header, HeaderLink, FInput, FButton, StampTrack }
  
}

</script>

<style scoped>

</style>
