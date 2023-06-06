<script>
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import { instance } from '../../services';

export default {
    components: {
        Header,
        Footer
    },
    methods: {
        register() {
            instance.get('room')
            .then((response) => {
                console.log(response)
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
            <div class="columns">
                <section class="column is-one-quarter">
                    <nav class="box pt-5 has-text-centered">
                        <ul>
                            <li>
                                <router-link class="button is-link is-light is-size-5 px-6 mb-2">
                                    Return
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="column">
                    <div class="box">
                        <form @submit.prevent="register">
                            <h1 class="has-text-centered is-size-3 has-text-weight-bold mt-3">Register a Room</h1>
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="name" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Description</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="description" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Capacity</label>
                                <div class="control">
                                    <textarea class="input" v-model="capacity" required></textarea>
                                </div>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <label class="label">Photos</label>
                                    <div class="control">
                                        <input class="input" type="text" v-model="photos" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Price</label>
                                    <div class="control">
                                        <input class="input" type="text" v-model="price" required>
                                    </div>
                                </div>
                            </div>
                            <div class="field my-6 is-grouped is-grouped-centered">
                                <div class="control">
                                    <button type="submit" class="button is-info px-6">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </main>

    <Footer></Footer>
</template>