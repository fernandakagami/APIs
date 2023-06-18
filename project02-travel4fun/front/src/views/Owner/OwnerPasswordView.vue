<script>
import Header from '../../components/Owner/HeaderPage.vue'
import Footer from '../../components/Owner/FooterPage.vue'
import AlertModal from '../../components/AlertModal.vue'

export default {
    components: {
        Header,
        Footer,
        AlertModal
    },
    data() {
        return {
            password: '',
            password_confirmation: '',
            activeClass: '',
            titleModal: '',
            messageModal: 'Are you sure?'
        }
    },
    methods: {
        updateModal() {
            this.titleModal = 'Change Password'
            this.activeClass = 'is-active'            
        },
        update() {            
            this.$store.dispatch('updatePassword', {
                password: this.password,
                confirmationPassword: this.confirmationPassword,
            })
                .then(() => {
                    this.error = ''
                    this.activeClass = ''
                    this.password = ''
                    this.password_confirmation = ''
                    this.$store.dispatch('showNotification', { notification: 'Password updated successfully', cssClass: 'is-success' })
                })
                .catch((error) => {
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })
        }
    }
}
</script>

<template>
    <Header></Header>

    <main>
        <div class="container is-max-desktop my-4">
            <form class="box" @submit.prevent="updateModal">
                <router-link to="/ownerupdate" class="button mb-5">Return</router-link>
                <h1 class="has-text-centered is-size-4 has-text-weight-bold mb-5">Change Password</h1>
                <div class="field-body">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" :class="[error?.password?.[0] ? 'is-danger' : '']" type="password"
                                placeholder="Password" v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        <p class="help is-danger">{{ error?.password?.[0] }}</p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" :class="[error?.password_confirmation?.[0] ? 'is-danger' : '']"
                                type="password" placeholder="Confirmation password" v-model="confirmationPassword">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        <p class="help is-danger">{{ error?.password_confirmation?.[0] }}</p>
                    </div>
                </div>
                <div class="field my-5 is-grouped is-grouped-centered">
                    <div class="control">
                        <button type="submit" class="button is-info px-6">Change Password</button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <Footer></Footer>

    <AlertModal :activeClass="this.activeClass" :update="updateItem" :title="this.titleModal" :message="this.messageModal">
    </AlertModal>
</template>