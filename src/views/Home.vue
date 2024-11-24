<template>
    <Header>
        <HeaderLink>home</HeaderLink>
        <HeaderLink link='/edit'>editar</HeaderLink>
        <HeaderLink>logout</HeaderLink>
    </Header>

    <div class="content">
        <div class="login-container">
            <ClientList
                @user="selectClient"
            />
        </div>
    
        <div v-if="!showClient">
            <NewClient />
        </div>
        <div v-else>
            <ClientInfo @closeClientView="closeClientView" :client="clientSelected" />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import HeaderLink from "../components/Header/HeaderLink.vue";
import ClientList from "../components/ClientList.vue";
import NewClient from "../components/NewClient.vue";
import ClientInfo from "../components/ClientInfo.vue";

export default {
    name: 'Login',
    components: { Header, HeaderLink, ClientList, NewClient, ClientInfo },

    data () {
        return {
            showClient: false,
            clientSelected: null
        }
    },

    methods: {
        selectClient(client) {
            this.showClient = true,
            this.clientSelected = client
            console.log(this.clientSelected)
        },

        closeClientView() {
            console.log('clicado')
            this.showClient = false
            console.log(this.showClient)
        }
    }
}
</script>

<style scoped>
.content {
    display: flex;
    justify-content: space-between;
}

.login-container{
    width: 100%;
}
</style>