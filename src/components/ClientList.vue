<template>
    <div class="client-list">
        <FInput 
            width="100%"
            v-model="search"
            name="search"
            type="text"
            placeholder="pesquisar cliente"
        />
        <div>
            <div class="list-item" v-for="client in filteredClients" @click="$emit('user', client)">
                <div>{{ client.name }}</div>
                <div>{{ client.CPF }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import FInput from "../components/Input.vue";

export default {
    name: 'ClientList',
    components: { FInput },

    data () {
        return {
            search: '',
        }
    },

    props: {
        clients: {
            type: Array,
            default: [
                { name: "Ana Paula Mendes", CPF: "100.100.100-10", email: 'ana_pm@gmail.com', phone: '(11)91111-1111', stamps: 7, reward: false },
                { name: "Cecília Torres", CPF: "200.200.200-20", email: 'cecilia@gmail.com', phone: '(11)92222-2222', stamps: 13, reward: true },
                { name: "Romulo Arantes", CPF: "300.300.300-30", email: 'romulo.ar@gmail.com', phone: '(11)93333-3333', stamps: 15, reward: false }
            ]
        }
    },
    computed: {
        filteredClients() {
            const searchText = this.search.toLowerCase().trim();
            return this.clients.filter((client) => {
                return (
                    client.name.toLowerCase().includes(searchText) || 
                    client.CPF.includes(searchText)
                );
            });
        },
    }
}
</script>

<style scoped>
.client-list {
    padding: 40px 70px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.list-item {
    display: flex;
    justify-content: space-between ;
}

.list-item:hover {
    color: var(--green-01);
}
</style>