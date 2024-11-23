<template>
    <div class="header-link">
        <a :href="link">
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    name: 'HeaderLink',
    props: {
        link: {
            type: String,
            default: 'http://'
        }
    }
}
</script>

<style>
.header-link {
 height: 70px;
 padding: 0 20px;
 color: var(--green-03);
 font-family: var(--font-title);
 font-weight: 600;
 font-size: 24px;
 align-content: center;
}

.header-link:hover {
 color: var(--green-04);
}
</style>