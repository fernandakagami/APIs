<script>
import axios from 'axios';
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import AlertModal from "../../components/AlertModal.vue";

export default {
    components: {
        Header,
        Footer,
        AlertModal
    },
    data() {
        return {
            hotel: [],
            activeClass: '',
            titleModal: '',
            messageModal: "Are you sure?",
            categories: [],
            amenities: [],
            checkedAmenities: []
        }
    },
    created() {
        this.getCategory()
        this.getAmenity()
        this.getHotel()
    },
    methods: {
        getHotel() {
            axios.get(`http://127.0.0.1:8000/api/hotel/${this.$route.params.id}`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.$store.state.token
                    }
                }
            )
                .then((response) => {
                    console.log(response.data)
                    this.hotel = response.data
                })
                .catch((error) => console.log(error))
        },
        showModal() {
            this.activeClass = 'is-active'
        },
        updateModal() {
            this.titleModal = "Update Hotel"
            this.showModal()
        },
        update() {
            axios.patch(`http://127.0.0.1:8000/api/hotel/${this.$route.params.id}`,
                {
                    description: this.hotel.description,
                    postal_code: this.hotel.postal_code,
                    country_name: this.hotel.country_name,
                    region_name: this.hotel.region_name,
                    city: this.hotel.city,
                    address: this.hotel.address,
                    name: this.hotel.name,
                    short_description: this.hotel.short_description,
                    photos: this.hotel.photos,
                    stars: this.hotel.stars,
                    amenities: this.checkedAmenities,
                    categories_id: this.hotel.category.id,
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
            axios.delete(`http://127.0.0.1:8000/api/hotel/${this.$route.params.id}`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.$store.state.token
                    }
                })
                .then((response) => {
                    this.$router.push({
                        path: '/dashboard'
                    })
                })
                .catch((error) => console.log(error))
        },
        getCategory() {
            axios.get('http://127.0.0.1:8000/api/category')
                .then((response) => {
                    this.categories = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getAmenity() {
            axios.get('http://127.0.0.1:8000/api/amenity')
                .then((response) => {                    
                    this.amenities = response.data
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
                        <button class="button is-link is-danger is-size-5" @click="deleteModal">
                            Delete Hotel
                        </button>
                    </nav>
                </section>
                <section class="column">
                    <div class="box">
                        <router-link :to="{ name: 'hoteldashboard', params: { id: hotel.id } }"
                            class="button is-link is-light is-size-5">Return</router-link>
                        <form>
                            <form @submit.prevent>
                                <h1 class="has-text-centered is-size-3 has-text-weight-bold mt-3">Update Hotel</h1>
                                <div class="field">
                                    <label class="label">Name</label>
                                    <div class="control">
                                        <input class="input" type="text" v-model="this.hotel.name">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Short Description</label>
                                    <div class="control">
                                        <input class="input" type="text" v-model="this.hotel.short_description">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Description</label>
                                    <div class="control">
                                        <textarea class="input" v-model="this.hotel.description"></textarea>
                                    </div>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <label class="label">Postal Code</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="this.hotel.postal_code">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Country Name</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="this.hotel.country_name">
                                        </div>
                                    </div>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <label class="label">Region Name</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="this.hotel.region_name">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">City</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="this.hotel.city">
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Address</label>
                                    <div class="control">
                                        <textarea class="input" type="text" v-model="this.hotel.address"></textarea>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Photos</label>
                                    <div class="control">
                                        <input class="input" type="text" v-model="this.hotel.photos">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Amenities</label>                                    
                                    <div class="control" v-for="amenity in this.amenities">
                                        <input class="mr-2" type="checkbox" :id="amenity.id" v-bind:value="amenity.id" v-model="checkedAmenities" :selected="selected.indexOf(amenity.id) != -1">
                                        <label :for="amenity.id">{{ amenity.name }}</label>
                                    </div>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <label class="label">Stars</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="this.hotel.stars">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Category</label>
                                        <div class="control">
                                            <select class="input" v-model="this.hotel.category.id">
                                                <option disabled>Choose a item</option>
                                                <option v-for="category in this.categories" v-bind:value="category.id">
                                                    {{ category.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="field my-6 is-grouped is-grouped-centered">
                                    <div class="control">
                                        <button type="submit" class="button is-info px-6"
                                            @click="updateModal">Update</button>
                                    </div>
                                </div>
                            </form>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </main>
    <Footer></Footer>

    <AlertModal :activeClass="this.activeClass" :delete="deleteItem" :update="updateItem" :title="this.titleModal"
        :message="this.messageModal" />
</template>
