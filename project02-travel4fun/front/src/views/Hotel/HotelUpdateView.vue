<script>
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import AlertModal from "../../components/AlertModal.vue";
import { instance } from '../../services';

export default {
    components: {
        Header,
        Footer,
        AlertModal
    },
    data() {
        return {
            hotel: [],
            categories: [],
            amenities: [],
            activeClass: '',
            titleModal: '',
            messageModal: "Are you sure?",
            checkedAmenities: []
        }
    },
    methods: {
        showModal() {
            this.activeClass = 'is-active'
        },
        updateModal() {
            this.titleModal = "Update Hotel"
            this.showModal()
        },
        update() {
            instance.patch(`hotel/${this.$route.params.id}`,
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
                    amenities: this.checkedAmenities.filter(amenity => amenity.selected).map(amenity => amenity.id),
                    categories_id: this.hotel.categories_id,
                })
                .then((response) => {
                    this.activeClass = ''
                    this.$store.state.notification = 'Hotel updated successfully'
                    this.$store.state.show = true
                    this.$store.state.toastClass = 'is-success'
                    this.$store.dispatch('show')
                })
                .catch((error) => console.log(error))
        },
        deleteModal() {
            this.titleModal = "Delete"
            this.showModal()
        },
        delete() {
            instance.delete(`hotel/${this.$route.params.id}`)
                .then((response) => {
                    this.$router.push({
                        path: '/dashboard'
                    })
                })
                .catch((error) => console.log(error))
        }
    },
    async mounted() {
        const response = await instance.get('category')
        this.categories = response.data
        const response2 = await instance.get('amenity')
        this.amenities = response2.data
        const response3 = await instance.get(`hotel/${this.$route.params.id}`)
        this.hotel = response3.data
        console.log(this.hotel)
        this.checkedAmenities = [...this.amenities]
        this.checkedAmenities.forEach(amenity => {
            amenity.selected = false
            if (this.hotel.amenities.find(a => a.id === amenity.id)) {
                amenity.selected = true
            }
        });
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
                        <router-link :to="{ name: 'hoteldashboard', params: { id: hotel.id } }"
                            class="button is-link is-light is-size-5 px-6 mb-2">
                            Return
                        </router-link>
                        <button class="button is-link is-danger is-size-5" @click="deleteModal">
                            Delete Hotel
                        </button>
                    </nav>
                </section>
                <section class="column">
                    <div class="box">
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
                                <div class="control" v-for="amenity in checkedAmenities">
                                    <input class="mr-2" type="checkbox" :id="amenity.id" v-bind:value="amenity.id"
                                        v-model="amenity.selected">
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
                                        <select class="input" v-model="this.hotel.categories_id">
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
                                    <button type="submit" class="button is-info px-6" @click="updateModal">Update</button>
                                </div>
                            </div>
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
