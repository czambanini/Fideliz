<template>
    <div class="stamp-container">
        <img :class="isSelected" src="/vazio.png" />
        <p :class="{ numberselected: selected}">{{ number }}</p>
    </div>
</template>

<script>
export default {
    name: 'RewardStamp',
    props: {
        selected: {
            type: Boolean,
            default: false
        },
        number: {
            type: String,
            default: '',
        }
    },
    computed: {
        isSelected() {
            return this.selected ? 'selected' : 'not-selected'
        }
    }
}

</script>

<style scoped>
    .stamp-container {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    p {
        position: absolute;
        font-family: var(--font-brand);
        font-size: 45px;
        transform: translate(0, 7px);
        color: var(--white);
    }

    .numberselected {
        color: var(--green-04)
    }

    .selected {
        width: 120px;
        height: auto;
    }

    .not-selected {
        width: 100px;
        opacity: 40%;
        height: auto;
    }
</style>