<script>
import AlertModal from "../../../components/AlertModal.vue";
import Loader from "../../../components/Loader.vue";
import { instance, useApi, viacep } from '../../../services';

export default {
    components: {
        AlertModal,
        Loader
    },
    data() {
        return {
            hotel: [],
            categories: [],
            amenities: [],
            activeClass: '',
            titleModal: '',
            messageModal: "Are you sure?",
            checkedAmenities: [],
            showLoader: true,
        }
    },
    methods: {
        findAddress(cep) {            
            viacep.get(`${cep}/json`)
                .then((response) => {                    
                    const address = response.data
                    this.hotel.region_name = address.uf
                    this.hotel.city = address.localidade
                    this.hotel.address = address.logradouro
                })
                .catch((error) => {
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
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
            this.showLoader = true
            this.$store.dispatch('updateHotel',
                {
                    description: this.hotel.description,
                    postalCode: this.hotel.postal_code,
                    countryName: this.hotel.country_name,
                    regionName: this.hotel.region_name,
                    city: this.hotel.city,
                    address: this.hotel.address,
                    name: this.hotel.name,
                    shortDescription: this.hotel.short_description,
                    photos: this.hotel.photos,
                    stars: this.hotel.stars,
                    amenities: this.checkedAmenities.filter(amenity => amenity.selected).map(amenity => amenity.id),
                    category: this.hotel.categories_id,
                })
                .then((response) => {                    
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'Hotel updated successfully', cssClass: 'is-success' })
                })
                .catch((error) => {
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })
                .finally(() => {
                    this.showLoader = false                    
                })
        },
        deleteModal() {
            this.titleModal = "Delete"
            this.showModal()
        },
        delete() {
            useApi().delete(`hotel/${this.$route.params.id}`)
                .then((response) => {
                    this.$store.dispatch('showNotification', { notification: 'Hotel deleted successfully', cssClass: 'is-success' })
                    this.$router.push({
                        path: '/dashboard'
                    })
                })
                .catch((error) => {
                    this.activeClass = ''
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })
        }
    },
    async created() {
        const response = await instance.get('category')
        this.categories = response.data
        const response2 = await instance.get('amenity')
        this.amenities = response2.data
        this.checkedAmenities = [...this.amenities]
        useApi().get(`hotel/${this.$route.params.id}`)
            .then((response) => {
                this.$store.state.hotel.currentHotel = response.data
                this.hotel = response.data
                this.checkedAmenities.forEach(amenity => {
                    amenity.selected = false
                    if (this.hotel.amenities.find(a => a.id === amenity.id)) {
                        amenity.selected = true
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                this.showLoader = false
            })

    }
}
</script>

<template>
    <main>        
        <div class="container is-max-desktop my-4">
            <div class="columns">
                <section class="column is-one-quarter">
                    <nav class="box pt-5 has-text-centered">
                        <router-link :to="{ name: 'hoteldashboard', params: { id: hotel.id } }" class="button mb-2">
                            Return
                        </router-link>
                        <button class="button is-link is-danger" @click="deleteModal">
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
                                        <input class="input" type="text" v-model="this.hotel.postal_code" @blur="findAddress(this.hotel.postal_code)">
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
    
    <Loader v-if="showLoader"></Loader>
    
    <AlertModal :activeClass="this.activeClass" :delete="deleteItem" :update="updateItem" :title="this.titleModal"
        :message="this.messageModal" />
</template>
