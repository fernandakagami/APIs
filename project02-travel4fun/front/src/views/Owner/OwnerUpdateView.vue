<script>
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import AlertModal from "../../components/AlertModal.vue";
import axios from "axios";

export default {
    components: {
        Header,
        Footer,
        AlertModal
    },
    data() {
        return {
            user: [],
            activeClass: '',
            titleModal: '',
            messageModal: 'Are you sure?'
        }
    },
    created() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('http://127.0.0.1:8000/api/user/profile',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.$store.state.token
                    }
                })
                .then((response) => {
                    this.user = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        showModal() {
            this.activeClass = 'is-active'
        },
        updateModal() {
            this.titleModal = "Update Hotel"
            this.showModal()
        },
        update() {
            axios.patch(`http://127.0.0.1:8000/api/user/profile`,
                {
                    name: this.user.name,
                    email: this.user.email
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.$store.state.token
                    }
                })
                .then((response) => {
                    this.activeClass = ''
                })
                .catch((error) => console.log(error))
        },
        deleteModal() {
            this.titleModal = "Delete"
            this.showModal()
        },       
        delete() {
            axios.delete('http://127.0.0.1:8000/api/user/delete',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.$store.state.token
                    }
                })
                .then((response) => {
                    this.$router.push({
                        path: '/owner'
                    })
                })
                .catch((error) => console.log(error))
        }
    }
}
</script>

<template>
    <Header></Header>

    <main>
        <div class="container is-max-desktop my-4">
            <div class="columns">
                <section class="column is-one-quarter">
                    <nav>
                        <ul class="box pt-5">
                            <li class="has-text-centered mb-4">
                                <router-link to="/ownerpassword" class="button is-info is-link">Change Password</router-link>
                            </li>
                            <li class="has-text-centered">
                                <button class="button is-danger is-link" @click="deleteModal">Delete Account</button>                                
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="column">
                    <form class="box" @submit.prevent="updateModal">
                        <router-link to="/dashboard" class="button mb-5">Return</router-link>
                        <h1 class="has-text-centered is-size-4 has-text-weight-bold mb-5">Update Owner</h1>
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" v-model="this.user.name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" v-model="this.user.email">
                            </div>
                        </div>
                        <div class="field mt-5 is-grouped is-grouped-centered">
                            <div class="control">
                                <button type="submit" class="button is-info px-6">Update</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

            <AlertModal :activeClass="this.activeClass" :delete="deleteItem" :update="updateItem" :title="this.titleModal"
        :message="this.messageModal" />
           
        </div>
    </main>

    <Footer></Footer>
</template>