<script>
import axios from 'axios';
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";

export default {
    components: {
        Header,
        Footer
    },
    methods: {
        logout() {
            axios
                .post(
                    'http://127.0.0.1:8000/api/logout',
                    { api_token: '4|miQLVuKpcydjZRnIU2XFnXlWLCXPWF20spKEb8sv' },
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: "Bearer " + localStorage.token
                        }
                    })
                .then((response) => {
                    console.log(response)
                    localStorage.token = '';
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

    <main class="container is-max-desktop">
        <div class="columns">
            <section class="column is-one-quarter">
                <nav>
                    <ul class="box">
                        <li>
                            <router-link to="/hotelcreate">Register New Hotel</router-link>                            
                        </li>
                        <li>
                            <a>
                                Update Account
                            </a>
                        </li>
                        <li>
                            <a>
                                Delete Account
                            </a>                            
                        </li>
                    </ul>
                </nav>
            </section>
            <section class="column">
                <div class="box">

                </div>

            </section>
        </div>

    </main>

    <Footer></Footer>
</template>

<style scoped>
main {
    height: calc(100vh - 100px);
}
</style>