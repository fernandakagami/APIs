<script>
import { useApi } from '../../../services';

export default {   
    methods: {
        register() {
            useApi().post('room', {
                name: this.name,
                description: this.description,
                capacity: this.capacity,
                photos: this.photos,
                price: this.price,
                hotel_id: this.$route.params.id
            })
                .then((response) => {
                    this.$store.dispatch('showNotification', { notification: 'Room created successfully', cssClass: 'is-success' })
                    this.$router.push({
                        name: 'hoteldashboard', params: { id: this.$route.params.id }
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<template>
    <main>
        <div class="container is-max-desktop my-4">
            <div class="columns">
                <section class="column is-one-quarter">
                    <nav class="box pt-5 has-text-centered">
                        <ul>
                            <li>
                                <router-link :to="{ name: 'hoteldashboard', params: { id: this.$route.params.id } }"
                                    class="button mb-2">
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
</template>