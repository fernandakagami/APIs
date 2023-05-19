<script>
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import axios from "axios";

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            hotels: []
        }
    },
    created() {
        this.getHotels()
    },
    methods: {
        getHotels() {
            axios.get('http://127.0.0.1:8000/api/hotel',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.token
                    }
                }
            )
                .then((response) => {
                    this.hotels = response.data
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
                        <ul class="mt-5">
                            <li v-for="hotel in this.hotels" class="box mb-5">
                                <router-link to="/dashboard" class="columns">
                                    <section class="column is-one-third">
                                        <div class="hotel-image" :style="{ backgroundImage: `url(${hotel.photos})` }"></div>
                                    </section>
                                    <section
                                        class="column is-flex is-flex-direction-column is-justify-content-space-between">
                                        <div
                                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mb-3">
                                            <h2 class="is-size-3">{{ hotel.name }}</h2>
                                            <p class="is-size-5 hotel-score px-3 py-2">{{ hotel.stars.toFixed(2) }}</p>
                                        </div>
                                        <div class="mb-2">
                                            <p class="is-size-6">{{ hotel.short_description }}</p>
                                        </div>
                                        <div class="is-flex is-justify-content-flex-end is-align-items-center">
                                            <button class="button is-info">Available</button>
                                        </div>
                                    </section>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </main>

    <Footer></Footer>
</template>

<style scoped>
.hotel-image {
    height: 100%;
    min-height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
}

.hotel-score {
    background-color: #003b95;
    color: white;
    border-radius: 5px;
}

li {
    cursor: pointer;
}
</style>