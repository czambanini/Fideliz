<template>
    <Header>
        <HeaderLink>home</HeaderLink>
        <HeaderLink>editar</HeaderLink>
        <HeaderLink>logout</HeaderLink>
    </Header>

    <div class="content">
        <h3>editar loja</h3>
        <div class="form">
            <FInput
                v-model="newStore.name"
                label="Nome:"
                name="name"
                type="text"
                width="100%"
            />
            <FInput
                v-model="newStore.CNPJ"
                label="CNPJ:"
                name="CNPJ"
                type="text"
                width="100%"
            />
            <FInput
                v-model="newStore.phone"
                label="Contato:"
                name="phone"
                type="text"
                width="100%"
            />
            <FInput
                v-model="newStore.menu"
                label="URL do cardápio:"
                name="menu"
                type="text"
                width="100%"
            />
            <FInput
                v-model="newStore.logo"
                label="URL da logo:"
                name="logo"
                type="text"
                width="100%"
                hint="*O endereço da imagem tem que ser de um arquivo .png ou .jpg"
            />
            <FInput
                v-model="newStore.back"
                label="URL da imagem de fundo:"
                name="background"
                type="text"
                width="100%"
                hint="*O endereço da imagem tem que ser de um arquivo .png ou .jpg"
            />
        </div>
        <FButton class="button" width="200px" @click="saveChanges">salvar</FButton>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import HeaderLink from "../components/Header/HeaderLink.vue";
import FInput from "../components/Input.vue";
import FButton from "../components/Button.vue";

export default {
    name: 'Login',
    components: { Header, HeaderLink, FInput, FButton },

    props: {
        store: {
            type: Object,
            default: { name: 'Pizzaria Santo António', CNPJ: '000.000.000/0001', phone: '(11) XXXX-XXXX', menu: 'http://', logo: 'http://', back: 'http://' }
        }
    },

    data () {
        return {
            newStore: { name: '', CNPJ: '', phone: '', menu: '', logo: '', back: '' }
        }
    },

    methods: {
        saveChanges() {
            this.$emit('editedStore', this.newStore);
            this.$router.push('/home');
        }
    },

    mounted() {
        this.newStore = { ...this.store };
    }
}
</script>

<style scoped>
.content {
    padding: 50px 70px;
    max-width: 750px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h3 {
    font-family: var(--font-title);
    font-size: 40px;
    font-weight: 600;
    color: var(--green-02);
    letter-spacing: 1.5px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.button {
    align-self: flex-end;
}
</style>