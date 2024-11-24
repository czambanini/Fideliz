<template>
    <div class="background-container" :style="backgroundImg">
        <div class="overlay"></div>
        <div class="store-profile">
            <h2>{{ store.name }}</h2>
            <p>{{ store.phone }}</p>
            <FButton @click="">cardápio</FButton>
        </div>
    </div>
</template>

<script>
import FButton from "../components/Button.vue";

export default {
    name: 'StoreProfile',
    components: { FButton },

    props: {
        store: {
            type: Object,
            default: { name: '', CNPJ: '', phone: '', menu: '', logo: '', back: '' }
        },
    },

    computed: {
        backgroundImg() {
            return {
                backgroundImage: `url(${this.store.back})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
            };
        }
    },

    methods: {

    }
}
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  pointer-events: none;
}

.store-profile {
  position: relative;
  z-index: 1;
  padding: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

h2 {
    font-family: var(--font-title);
    font-size: 50px;
    line-height: 64px;
    text-align: center;
}

p {
    font-family: var(--font-title);
    font-size: 28px;
}

</style>