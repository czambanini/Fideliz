<template>
    <div v-if="this.active && this.colected">
        <img class="track-stamp" src="/coletado.png"/> 
    </div>
    <div v-else @click="handleClick">
        <img class="track-stamp" :src="stampImage" />
    </div>
</template>

<script>
export default {
    name: 'TrackStamp',
    props: {
        active: {
            type: Boolean,
            default: false
        },
        colected: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        stampImage(){
            if (this.active && !this.colected) {
                return '/coletar.png'
            } else {
                return '/brinde.png'
            }
        }
    },
    methods: {
    handleClick() {
      if (!this.colected) {
        this.$emit("click");
      }
    },
  }
}

</script>

<style scoped>
    .track-stamp {
        width: 90px;
        height: auto;
    }
</style>