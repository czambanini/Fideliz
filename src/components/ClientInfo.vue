<template>
    <div class="client-info">
        <button class="arrow-back" @click="$emit('closeClientView')"><img src="/arrow_back.png" width="35px"/></button>
        <h4>cliente</h4>
        <div class="info">
            <p>Nome: {{ client.name }}</p>
            <p>CPF: {{ client.CPF }}</p>
            <p>E-mail: {{ client.email }}</p>
            <p>Telefone: {{ client.phone }}</p>
            <br>
            <p>Quantidade de selos: {{ client.stamps }}</p>
            <p>Premio pendente: {{ client.reward ? 'Sim' : 'Não' }}</p>
        </div>
        <FButton class="button" width="200px" variant="disabled">editar</FButton>
    </div>

</template>

<script>
import FInput from "../components/Input.vue";
import FButton from "../components/Button.vue";

export default {
    name: 'NewClient',
    components: { FInput, FButton },

    props: {
        client: {
            type: Object,
            default: { name: '', CPF: '', email: '', phone: '', stamps: 0, reward: false }
        }
    },

}
</script>

<style scoped>
.client-info {
    background-color: var(--gray-01);
    padding: 20px 100px;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 550px;
    box-sizing: border-box;
}

h4 {
    font-family: var(--font-title);
    font-size: 30px;
    font-weight: 700;
    color: var(--green-03);
    text-align: center;
}

p {
    color: var(--gray-03);
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
}

.button {
    margin: 0 auto;
}

.arrow-back {
    margin-bottom: 100px;
    margin-left: -470px;
    background-color: transparent;
    border: 0;
}

</style>