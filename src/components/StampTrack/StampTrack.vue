<template>
  <div class="stamp-track-container">
    <h2>Fideliz</h2>
    <div class="stamp-track">
      <div 
        class="stamp-track-line" 
        v-for="(line, lineIndex) in 4" 
        :key="lineIndex"
      >
        <TrackDot 
          v-for="dotIndex in 5" 
          :key="dotIndex" 
          :active="isActive(lineIndex, dotIndex - 1)" 
        />
        <TrackStamp 
          :active="isActive(lineIndex, 5)"
          :colected="isCollected(lineIndex)"
          @click="openModal(lineIndex)" 
        />
      </div>
        <RewardModal
            v-if="showModal"
            :rewardOptions="objectReward.rewards"
            :active="objectReward.active"
            :collected="objectReward.collected"
            @close="showModal = false"
            @select="createTrade"
        />
    </div>
  </div>
</template>

<script>
import TrackDot from "./TrackDot.vue";
import TrackStamp from "./TrackStamp.vue";
import RewardModal from "../RewardModal/RewardModal.vue";

export default {
    name: "StampTrack",
    components: { TrackDot, TrackStamp, RewardModal },
    props: {
        userStamps: {
        type: Number,
        default: 7,
        },
        rewards: {
        type: Array,
        default: () => [
            [{ id: '001', name: "15% de desconto", collected: true }, { id: '002', name: "Frete grátis", collected: false }],
            [{ id: '003', name: "Pizza brotinho de chocolate", collected: false }, { id: '004', name: "Entrada pãozinho de azeitona", collected: false }],
            [{ id: '005', name: "20% de desconto", collected: false }, { id: '006', name: "Cupom pizza familia por R$ 70,00", collected: false }],
            [{ id: '007', name: "Premio 1", collected: false }, { id: '008', name: "Premio 2", collected: false }],
        ],
        },
    },
    data() {
    return {
      showModal: false,
      objectReward: null,
    };
  },
  methods: {
    isActive(lineIndex, itemIndex) {
      const totalIndex = lineIndex * 6 + itemIndex;
      return totalIndex < this.userStamps;
    },

    isCollected(lineIndex) {
      return this.rewards[lineIndex].some((reward) => reward.collected);
    },

    openModal(lineIndex) {
      const active = this.isActive(lineIndex, 5);
      const collected = this.isCollected(lineIndex);

      this.objectReward = {
        rewards: this.rewards[lineIndex],
        active,
        collected,
      };
      this.showModal = true;
    },

    createTrade(rewardSelected){
      //backend cria novo objeto toca
      console.log(rewardSelected)
      
    }
  },
}
</script>

<style>
.stamp-track-container {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stamp-track-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    gap: 10px;
    margin-bottom: 90px;
}

h2 {
    font-family: var(--font-brand);
    color: var(--green-01);
    font-size: 40px;
    margin-bottom: -15px;
    text-align: center;
}

.stamp-track-line:nth-child(even) {
    flex-direction: row-reverse;
}

.stamp-track-line:not(:first-child):nth-child(even) > :first-child {
    transform: translate(-30px, -60px);
}

.stamp-track-line:not(:first-child):nth-child(odd) > :first-child {
    transform: translate(30px, -60px);
}

.stamp-track-line:last-child {
  margin-bottom: 0;
}
</style>