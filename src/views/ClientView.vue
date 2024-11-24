<template>
    <div class="client-view">
        <div class="view-profile">
            <StoreProfile :store="store" />
        </div>
        <div class="view-content">
            <ClientLogin v-if="!clientConfirmed" @SendCode="ValidadeClient" />
            <StampTrack v-else :userStamps="this.client.stamps" />
        </div>
    </div>
</template>

<script>
import StoreProfile from "../components/StoreProfile.vue";
import ClientLogin from "../components/ClientLogin.vue";
import StampTrack from "../components/StampTrack/StampTrack.vue";

export default {
    name: 'ClientView',
    components: { StoreProfile, ClientLogin, StampTrack },

    props: {
        //props tem que ser passadas pelo backend
        store: {
            type: Object,
            default: { name: 'Pizzaria Santo António', CNPJ: '000.000.000/0001', phone: '(11) XXXX-XXXX', menu: 'https://www.lipsum.com/', logo: 'http://', back: 'https://i.postimg.cc/sjD5q1YW/fundo-cliente.jpg' }
        },
        client: {
            type: Object,
            default: { name: "Ana Paula Mendes", CPF: "100.100.100-10", email: 'ana_pm@gmail.com', phone: '(11)91111-1111', stamps: 13, reward: false, code: '0001' }
        }
    },

    data() {
        return {
            clientCode: '',
            clientConfirmed: false
        }
    },

    methods: {
        ValidadeClient(clientCode){
            this.clientCode = clientCode
            //confirmação com o back que o cliente existe e recebe Objeto cliente (prop client)
            this.clientConfirmed = true
        }
    }
}
</script>

<style scoped>
.client-view {
    display: flex;
    width: 100%;
    height: 100vh;
}

.view-profile {
    flex: 0 1 50%;
    max-width: 50%;
}

.view-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}
</style>