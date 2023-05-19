<script>
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import axios from "axios";

export default {
    components: {
        Header,
        Footer
    },
    methods: {
        getUser() {
            axios.get('')
        }
    }
}
</script>

<template>
    <Header></Header>

    <div class="container is-max-desktop">
        <form class="section is-medium" @submit.prevent="register">
            <h1 class="has-text-centered is-size-4 has-text-weight-bold">Update Owner</h1>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" v-model="name">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="email">
                </div>
            </div>
            <div class="field-body">
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Confirmation password</label>
                    <div class="control">
                        <input class="input" type="password" v-model="confirmationPassword">
                    </div>
                </div>
            </div>
            <div class="field mt-5 is-grouped is-grouped-centered">
                <div class="control">
                    <button type="submit" class="button is-info px-6">Register</button>
                </div>
            </div>
        </form>
    </div>

    <Footer></Footer>
</template>