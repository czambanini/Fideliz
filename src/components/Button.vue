<template>
<button
    class="f-button"
    :class="variant"
    @click="$emit('click')"
    :style="setDimentions"
>
    <slot></slot>
</button>
</template>

<script>
export default {
    name: 'FButton',
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        width: {
            type: String,
            default: '',
        }
    },
    computed: {
        setDimentions() {
            return {
                width: this.width ? this.width : 'auto',
            };
        }
    }
}

</script>

<style>
.f-button {
    height: 40px;
    padding: 0 30px;
    letter-spacing: 0.3px;
    text-transform: lowercase;
    font-size: 24px;
    color: var(--black);
    border: none;
    border-radius: 7px;
    box-shadow: 3px 3px 2px #1f1f1f;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.f-button:hover {
    transform:translate(-1px, -1px);
    box-shadow: 5px 5px 2px #1f1f1f;
}

.f-button:active {
    transform:translate(0, 0);
    box-shadow: 3px 3px 2px #1f1f1f;
}

.primary {
    background-color: var(--green-02);
}

.primary:hover {
    background-color: var(--green-01);
}

.dark {
    background-color: var(--green-03);
    color: var(--white);
}

.dark:hover {
    background-color: var(--green-04);
}

.disabled {
    background-color: var(--gray-02);
    box-shadow: none;
}

.disabled:hover {
    transform: translate(0, 0);
    box-shadow:none;
}

</style>