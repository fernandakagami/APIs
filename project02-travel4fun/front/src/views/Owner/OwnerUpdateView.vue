<script>
import AlertModal from "../../components/AlertModal.vue";
import { useApi } from '../../services';

export default {
    components: {
        AlertModal
    },
    data() {
        return {
            user: [],
            activeClass: '',
            titleModal: '',
            messageModal: 'Are you sure?',
            error: []
        }
    },
    methods: {
        showModal() {
            this.activeClass = 'is-active'
        },
        updateModal() {
            this.titleModal = "Update Owner"
            this.showModal()
        },
        update() {
            this.$store.dispatch('updateOwner', {
                name: this.user.name,
            })
                .then(() => {
                    this.error = ''
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'User updated successfully', cssClass: 'is-success' })
                })
                .catch((error) => {
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })
        },
        deleteModal() {
            this.titleModal = "Delete"
            this.showModal()
        },
        delete() {
            this.$store.dispatch('deleteOwner', {
            })
                .then(() => {
                    this.$router.push({
                        path: '/owner'
                    })
                })
                .catch(() => {
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })

        }
    },
    async created() {
        const response = await useApi().get('user/profile')
        this.user = response.data
    }
}
</script>

<template>
    <main>
        <div class="container is-max-desktop my-4">
            <div class="columns">
                <section class="column is-one-quarter">
                    <nav>
                        <ul class="box pt-5">
                            <li class="has-text-centered mb-4">
                                <router-link to="/dashboard" class="button has-text-centered mb-2">Return</router-link>
                            </li>
                            <li class="has-text-centered mb-4">
                                <router-link to="/ownerpassword" class="button is-info is-link">Change
                                    Password</router-link>
                            </li>
                            <li class="has-text-centered">
                                <button class="button is-danger is-link" @click="deleteModal">Delete Account</button>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="column">
                    <form class="box" @submit.prevent="updateModal">
                        <h1 class="has-text-centered is-size-4 has-text-weight-bold mb-5">Update Owner</h1>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" :class="[error?.name?.[0] ? 'is-danger' : '']" type="text"
                                    placeholder="Name" v-model="user.name">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                            <p class="help is-danger">{{ error?.name?.[0] }}</p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="email" placeholder="Email" v-model="user.email" disabled>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field mt-5 is-grouped is-grouped-centered">
                            <div class="control">
                                <button type="submit" class="button is-info px-6">Update</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

            <AlertModal :activeClass="activeClass" :delete="deleteItem" :update="updateItem" :title="titleModal"
                :message="messageModal" />
        </div>
    </main>
</template>