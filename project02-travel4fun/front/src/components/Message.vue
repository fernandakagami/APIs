<script>
export default {
    props: ['message', 'class'],
    methods: {
        close() {
            this.$store.state.show = false
        }
    }
}
</script>

<template>
    <div class='notification-container'>
        <div class="notification is-light" :class="class">
            <button class="delete" @click="close"></button>
            <p>{{  message }}</p>
        </div>
    </div>
</template>

<style scoped>
.notification-container {
    width: 300px;
    position: absolute;
    right: 0;
    top: 110px;
    z-index: 99;
}

p {
    font-size: 15px;
}
</style>