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
        register() {
            axios.post('http://127.0.0.1:8000/api/hotel',
                {
                    description: this.description,
                    postal_code: this.postal_code,
                    country_name: this.country_name,
                    region_name: this.region_name,
                    city: this.city,
                    address: this.address,
                    name: this.name,
                    short_description: this.short_description,
                    photos: this.photos,
                    stars: this.stars,
                    amenities: this.amenities,
                    category: this.category,
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.token
                    }
                })
                .then((response) => {
                    console.log(response)                    
                    this.$router.push({
                        path: '/dashboard'
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
        <div class="container is-max-desktop">
            <form @submit.prevent="register">
                <h1 class="has-text-centered is-size-3 has-text-weight-bold mt-5">Register a Hotel</h1>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" v-model="name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Short Description</label>
                    <div class="control">
                        <input class="input" type="text" v-model="short_description">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="input" v-model="description"></textarea>
                    </div>
                </div>
                <div class="field-body">
                    <div class="field">
                        <label class="label">Postal Code</label>
                        <div class="control">
                            <input class="input" type="text" v-model="postal_code">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Country Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="country_name">
                        </div>
                    </div>
                </div>
                <div class="field-body">
                    <div class="field">
                        <label class="label">Region Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="region_name">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">City</label>
                        <div class="control">
                            <input class="input" type="text" v-model="city">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <textarea class="input" type="text" v-model="address"></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Photos</label>
                    <div class="control">
                        <input class="input" type="text" v-model="photos">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Amenities</label>
                    <div class="control">
                        <input class="input" type="text" v-model="amenities">
                    </div>
                </div>
                <div class="field-body">
                    <div class="field">
                        <label class="label">Stars</label>
                        <div class="control">
                            <input class="input" type="text" v-model="stars">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Category</label>
                        <div class="control">
                            <input class="input" type="text" v-model="category">
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
    </main>

    <Footer></Footer>
</template>

<style scoped>
main {
    height: calc(100vh - 100px);
}
</style>