<script>
import Header from '../../components/Owner/HeaderPage.vue'
import Footer from '../../components/Owner/FooterPage.vue'
import Modal from '../../components/AlertModal.vue'
import { instance } from '../../services';

export default {
    components: {
        Header,
        Footer,
        Modal
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
            this.titleModal = 'Update Password'
            this.activeClass = 'is-active'
        },
        update() {
            instance.patch('http://127.0.0.1:8000/api/user/profile',
                {
                    password: this.password,
                    password_confirmation: this.confirmationPassword,
                })
                .then((response) => {
                    this.activeClass = ''
                    this.password = ''
                    this.password_confirmation = ''
                })
                .catch((error) => {
                    console.log(error)
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
                <router-link to="/dashboard" class="button mb-5">Return</router-link>
                <h1 class="has-text-centered is-size-4 has-text-weight-bold mb-5">Update Password</h1>
                <div class=field-body>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" v-model="this.password">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password Confirmation</label>
                        <div class="control">
                            <input class="input" type="password" v-model="this.password_confirmation">
                        </div>
                    </div>
                </div>
                <div class="field mt-5 is-grouped is-grouped-centered">
                    <div class="control">
                        <button type="submit" class="button is-info px-6">Change Password</button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <Footer></Footer>

    <Modal :activeClass="this.activeClass" :update="updateItem" :title="this.titleModal" :message="this.messageModal">
    </Modal>
</template>