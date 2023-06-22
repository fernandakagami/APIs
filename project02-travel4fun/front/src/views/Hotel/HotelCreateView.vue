<script>
import Header from "../../components/Owner/HeaderPage.vue";
import Footer from "../../components/Owner/FooterPage.vue";
import { instance, viacep } from '../../services';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            categories: [],
            category: 'default',
            amenities: [],
            checkedAmenities: [],
            country_name: 'Brazil',
            region_name: '',
            city: '',
            address: ''
        }
    },
    methods: {
        register() {
            this.$store.dispatch('registerHotel', {
                description: this.description,
                postalCode: this.postal_code,
                countryName: this.country_name,
                regionName: this.region_name,
                city: this.city,
                address: this.address,
                name: this.name,
                shortDescription: this.short_description,
                photos: this.photos,
                stars: this.stars,
                amecheckedAmenities: this.checkedAmenities,
                category: this.category,
            })
                .then(() => {
                    this.$store.dispatch('showNotification', { notification: 'Hotel created successfully', cssClass: 'is-sucess' })
                    this.$router.push({
                        path: '/dashboard'
                    })
                })
                .catch(() => {
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })
        },
        findAddress(cep) {
            viacep.get(`${cep}/json`)
                .then((response) => {
                    const address = response.data
                    this.region_name = address.uf
                    this.city = address.localidade
                    this.address = address.logradouro
                })
                .catch((error) => {
                    this.$store.dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
                })
        }
    },
    async mounted() {
        const response = await instance.get('category')
        this.categories = response.data
        const response2 = await instance.get('amenity')
        this.amenities = response2.data
    }
}
</script>

<template>
    <Header></Header>

    <main>
        <div class="container is-max-desktop">
            <router-link to="/dashboard" class="button mt-5">Return</router-link>
            <form @submit.prevent="register">
                <h1 class="has-text-centered is-size-3 has-text-weight-bold mt-3">Register a Hotel</h1>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" v-model="name" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Short Description</label>
                    <div class="control">
                        <input class="input" type="text" v-model="short_description" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="input" v-model="description" required></textarea>
                    </div>
                </div>
                <div class="field-body">
                    <div class="field">
                        <label class="label">Postal Code</label>
                        <div class="control">
                            <input class="input" type="text" v-model="postal_code" @blur="findAddress(postal_code)"
                                required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Country Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="country_name" required>
                        </div>
                    </div>
                </div>
                <div class="field-body">
                    <div class="field">
                        <label class="label">Region Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="region_name" required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">City</label>
                        <div class="control">
                            <input class="input" type="text" v-model="city" required>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <textarea class="input" type="text" v-model="address" required></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Photos</label>
                    <div class="control">
                        <input class="input" type="text" v-model="photos" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Amenities</label>
                    <div class="control" v-for="amenity in this.amenities">
                        <input class="mr-2" type="checkbox" :id="amenity.id" v-bind:value="amenity.id"
                            v-model="checkedAmenities">
                        <label :for="amenity.id">{{ amenity.name }}</label>
                    </div>
                </div>
                <div class="field-body">
                    <div class="field">
                        <label class="label">Stars</label>
                        <div class="control">
                            <input class="input" type="text" v-model="stars" required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Category</label>
                        <div class="control">
                            <select class="input" v-model="category" required>
                                <option disabled value="default">Choose a item</option>
                                <option v-for="category in this.categories" v-bind:value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
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
    </main>

    <Footer></Footer>
</template>

<style scoped></style>