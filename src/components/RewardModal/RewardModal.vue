<template>
  <div class="overlay"></div>
  <div class="modal">
    <button class="close-btn" @click="$emit('close')"><img src="/X.png" width="20px"/></button>
    <div class="modal-content">
      <p>Escolha seu brinde:</p>
      <div class="rewards">
        <div class="option">
          <RewardStamp @click="selectFirst" :selected="rewardSelected[0]" number="1" />
          <p>{{ rewardOptions[0].name }}</p>
        </div>
        <div class="option">
          <RewardStamp @click="selectSecond" :selected="rewardSelected[1]" number="2" />
          <p>{{ rewardOptions[1].name }}</p>
        </div>
      </div>
      <FButton class="button" variant="dark" @click="confirmSelection">
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
    emits: ['close'],
    data() {
      return {
          rewardSelected: [ false, false ],
      }
    },
    props: {
      rewardOptions: {
        type: Object,
        default: [{ name: "Premio 1", description: "descrição", collected: true }, { name: "Premio 2", description: "descrição", collected: false }]
      }
    },
    methods: {
      selectFirst() {
        this.rewardSelected = [ true, false ]
      },
      selectSecond() {
        this.rewardSelected = [ false, true ]
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
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 680px;
  background-color: var(--white);
  border-radius: 20px;
}

.modal-content {
  color: var(--gray-04);
  font-size: 20px;
  padding: 35px;
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
</style>