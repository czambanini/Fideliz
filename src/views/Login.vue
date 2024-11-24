<template>
    <Header>
        <HeaderLink>cadastrar</HeaderLink>
    </Header>

    <div class="login-container">
        <div class="login">
            <h2>Fideliz</h2>
            <FInput
                v-model="user.login"
                name="login"
                type="text"
                placeholder="login"
                width="350px"
            />
            <FInput
                v-model="user.password"
                name="password"
                type="password"
                placeholder="senha"
                width="350px"
            />
            <FButton width="200px" @click="enterAccount">entrar</FButton>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import HeaderLink from "../components/Header/HeaderLink.vue";
import FInput from "../components/Input.vue";
import FButton from "../components/Button.vue";


export default {
    name: 'Login',
    components: { Header, HeaderLink, FButton, FInput },

    data () {
        return {
            user: { login: '', password: '' }
        }
    },

    methods: {
        enterAccount() {
            console.log(this.user)
            this.$emit('user', this.user);
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center; 
    align-items: center;
    min-height: calc(100vh - 70px);
}

.login {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

h2 {
    font-family: var(--font-brand);
    color: var(--green-01);
    font-size: 40px;
    margin-bottom: -15px;
}
</style>