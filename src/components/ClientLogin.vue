<template>
    <div class="content">
        <h2>Fideliz</h2>
        <div class="input-container">
            <FInput 
                v-model="clientCode"
                name="code"
                type="text"
                width="350px"
                placeholder="insira seu número fidelidade"
            />
        <FButton width="40px" @click="$emit('SendCode', clientCode)"><img src="/search.png" width="30px"></FButton>
        </div>
    </div>
</template>
    
<script>
    import FInput from "../components/Input.vue";
    import FButton from "../components/Button.vue";
    
    export default {
        name: 'ClientLogin',
        components: { FInput, FButton },
    
        props: {
            storeClients: {
                type: Object,
                default: { name: '', CNPJ: '', phone: '', menu: '', logo: '', back: '' }
            }
        },

        data() {
            return {
                clientCode: ''
            }
        }
    }
</script>
    
<style scoped>
.content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 180px 120px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

h2 {
    font-family: var(--font-brand);
    color: var(--green-01);
    font-size: 40px;
    margin-bottom: -15px;
}

.input-container {
    display: flex;
    gap: 7px;
}

:deep(.f-button) {
    padding: 0;
}
</style>