<template>
<div class="dot" :class="isActive"></div>
</template>

<script>
export default {
    name: 'TrackDot',
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isActive(){
            return this.active ? 'active' : 'inactive'
        }
    }
}

</script>

<style scoped>
.dot {
    height: 25px;
    width: 25px;
    border-radius: 25px;
}

.active {
    background-color: var(--green-01);
}

.inactive {
    background-color: var(--gray-02);
}

</style>