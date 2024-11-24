<template>
    <div class="new-client">
        <h4>cadastrar cliente</h4>
        <div class="form">
            <FInput 
                v-model="user.name"
                name="name"
                type="text"
                placeholder="nome"
                variant="dark"
                width="350px"
            />
            <FInput 
                v-model="user.CPF"
                name="cpf"
                type="text"
                placeholder="CPF"
                variant="dark"
                width="350px"
            />
            <FInput 
                v-model="user.email"
                name="email"
                type="text"
                placeholder="e-mail"
                variant="dark"
                width="350px"
            />
            <FInput 
                v-model="user.phone"
                name="phone"
                type="text"
                placeholder="telefone"
                variant="dark"
                width="350px"
            />
        </div>
        <FButton width="200px" variant="dark" @click="enterClient">cadastrar</FButton>
        <div v-if="savedHint" class="saved-hint"> 
            Cliente cadastrado com sucesso!
        </div>
    </div>

</template>

<script>
import FInput from "../components/Input.vue";
import FButton from "../components/Button.vue";

export default {
    name: 'NewClient',
    components: { FInput, FButton },

    data () {
        return {
            user: { name: '', CPF: '', email: '', phone: '' },
            savedHint: false
        }
    },

    props: {
        
    },
    methods: {
        enterClient() {
            this.$emit('user', this.user);
            this.savedHint = true
        }
    },
    watch: {
        user() {
            this.savedHint = false
        }
    }
}
</script>

<style scoped>
.new-client {
    background-color: var(--gray-01);
    padding: 180px 100px;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 550px;
    box-sizing: border-box;
}

h4 {
    font-family: var(--font-title);
    font-size: 30px;
    font-weight: 700;
    color: var(--green-03);
}

.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.saved-hint {
    letter-spacing: 0.3px;
    font-size: 16px;
    color: var(--green-03);
    line-height: 20px;
}

</style>