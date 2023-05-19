<script>
export default {
  props: ['showModal', 'delete', 'title', 'message'],
  methods: {
    closeModal() {
      this.$parent.showModal();
    },   
    deleteItem() {        
        this.$parent.delete();        
    }
  }
}
</script>

<template>
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box px-6">
            <h2 class="my-4 has-text-centered is-size-3">{{ title }}</h2>
            <form @submit.prevent class="has-text-centered">
                <p class="mb-5">{{ message }}</p>
                <div>
                    <button class="button is-danger mr-3" @click="deleteItem">Delete</button>
                    <button class="button is-info" @click="closeModal">Cancel</button>
                </div>                
            </form>           
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
</template>

<style scoped>
.modal-content {
    width: 450px !important;
}
</style>
