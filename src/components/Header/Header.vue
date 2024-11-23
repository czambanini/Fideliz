<template>
    <div class="header">
        <div class="logo">Fideliz</div>
        <div class="navigation">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.header {
    height: 70px;
    padding: 0 20px 0 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--green-02);
}

.logo {
    font-family: var(--font-brand);
    font-size: 40px;
    color: var(--black);
    margin-top: 5px;
    height: 65px;
}

.navigation {
    display: flex;
}
</style>