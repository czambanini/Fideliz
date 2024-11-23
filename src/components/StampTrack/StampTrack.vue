<template>
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
            :rewardOptions="objectReward"
            @close="showModal = false"
        />
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
            [{ name: "Premio 1", collected: false }, { name: "Premio 2", collected: false }],
            [{ name: "Premio 1", collected: false }, { name: "Premio 2", collected: false }],
            [{ name: "Premio 1", collected: false }, { name: "Premio 2", collected: false }],
            [{ name: "Premio 1", collected: false }, { name: "Premio 2", collected: false }],
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
      this.objectReward = this.rewards[lineIndex];
      this.showModal = true;
    },
  },
}
</script>

<style>
.stamp-track-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    gap: 10px;
    margin-bottom: 90px;
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
</style>