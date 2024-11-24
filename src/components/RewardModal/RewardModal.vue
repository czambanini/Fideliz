<template>
  <div class="overlay"></div>
  <div class="modal">
    <button class="close-btn" @click="$emit('close')"><img src="/X.png" width="20px"/></button>
    <div class="modal-content">
      <div class="warning" v-if="collected">Este premio já foi coletado</div>
      <div class="warning" v-if="!active">Este premio ainda não esta disponível</div>
      <p>Escolha seu brinde:</p>
      <div class="rewards">
        <div class="option">
          <RewardStamp @click="selectFirst" :selected="stampSelected[0]" number="1" />
          <p>{{ rewardOptions[0].name }}</p>
        </div>
        <div class="option">
          <RewardStamp @click="selectSecond" :selected="stampSelected[1]" number="2" />
          <p>{{ rewardOptions[1].name }}</p>
        </div>
      </div>
      <FButton v-if="!collected && active" class="button" variant="dark" @click="confirmSelection">
        aplicar na próxima compra
      </FButton>
    </div>
  </div>
</template>

<script>
import FButton from "../Button.vue";
import RewardStamp from "./RewardStamp.vue";

export default {
    name: 'RewardModal',
    components: { FButton, RewardStamp },
    emits: [ 'close', 'select' ],
    data() {
      return {
          stampSelected: [ false, false ],
          rewardSelected: null,
      }
    },
    props: {
      rewardOptions: {
        type: Object,
        default: [{ name: '', id: '', collected: false }, { name: '', id: '', collected: false }]
      },
      active: Boolean,
      collected: Boolean,
    },
    methods: {
      selectFirst() {
        if(this.active && !this.collected) {
          this.stampSelected = [ true, false ]
          this.rewardSelected = this.rewardOptions[0].id
        }
      },
      selectSecond() {
        if(this.active && !this.collected) {
          this.stampSelected = [ false, true ]
          this.rewardSelected = this.rewardOptions[1].id
        }
      },
      confirmSelection() {
        this.$emit('select', this.rewardSelected);
        this.$emit('close');
    }
  }
}

</script>

<style scoped>
.overlay {
  background-color: rgba(97, 97, 97, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 680px;
  background-color: var(--white);
  border-radius: 20px;
  z-index: 3;
}

.modal-content {
  color: var(--gray-04);
  font-size: 20px;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
}

.rewards {
  display: flex;
  gap: 95px;
}

.option {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.close-btn {
  position: fixed;
  top: 11px;
  right: 9px;
  background-color: transparent;
  border: 0;
  color: var(--gray-04);
}

.button {
  flex-grow: 0;
}

.warning {
  margin-bottom: -20px;
  color: var(--green-03);
  font-weight: 600;
}
</style>