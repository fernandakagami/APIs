<script>
export default {
    props: ['activeClass', 'delete', 'update', 'title', 'message'],
    methods: {
        closeModal() {
            this.$parent.activeClass = ''
        },
        deleteItem() {
            this.$parent.delete();
        },
        updateItem() {
            this.$parent.updateHotel();
        }
    }
}
</script>

<template>
    <div :class="['modal', activeClass]">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box px-6">
                <h2 class="my-4 has-text-centered is-size-3">{{ title }}</h2>
                <form @submit.prevent class="has-text-centered">
                    <p class="mb-5">{{ message }}</p>
                    <div>
                        <button class="button is-danger mr-3" v-if="this.title == 'Delete'" @click="deleteItem">Delete</button>
                        <button class="button is-danger mr-3" v-else @click="updateItem">Update</button>
                        <button class="button is-info" @click="closeModal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
    </div>
</template>

<style scoped>
.modal {
    position: fixed !important;
}
.modal-content {
    width: 450px !important;
}
</style>
