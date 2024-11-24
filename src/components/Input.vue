<template>
    <div class="f-input">
        <label>
            <p class="label">{{ label }}</p>
            <input
                :value="modelValue"
                :name="name"
                :type="type"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                :style="setDimentions"
                :class="variant"
            />
            <p v-if="hint" class="hint">{{ hint }}</p>
            <p v-if="error" class="error">{{ error }}</p>
        </label>
    </div>
</template>

<script>
export default {
    name: 'FInput',
    props: {
        type: {
            type: String,
            default: "text"
        },
        modelValue: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: '',
        },
        hint: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'primary'
        },
    },
    computed: {
        setDimentions() {
            return {
                width: this.width ? this.width : 'auto',
                height: this.height ? this.height : '40px',
            };
        }
    }
}
</script>

<style scoped>
.label {
    letter-spacing: 0.3px;
    font-size: 20px;
    color: var(--white);
    line-height: 30px;
}

input {
    font-size: 20px;
    letter-spacing: 0.3px;
    border: 1px var(--green-01) solid;
    border-radius: 7px;
    background-color: transparent;
    padding: 17px 10px;
    align-content: center;
}

input:hover {
    background-color: transparent;
}

::placeholder {
    color: var(--gray-03);
}

.dark {
    border: 1px var(--gray-02) solid;
    color: var(--gray-03);
}

.dark::placeholder {
    color: var(--gray-02);
}

.hint {
    letter-spacing: 0.3px;
    font-size: 12px;
    color: var(--gray-02);
    line-height: 20px;
}

.error {
    letter-spacing: 0.3px;
    font-size: 12px;
    color: #ff5656;
    line-height: 20px;
}
</style>