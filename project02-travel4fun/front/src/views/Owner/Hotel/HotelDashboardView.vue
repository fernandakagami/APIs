<script>
import { useApi } from '../../../services';

export default {
    data() {
        return {   
            hotel: [],
            rooms: []
        }
    },
    async created() {
        const hotelResponse = await useApi().get(`hotel/${this.$route.params.id}`)
        this.$store.state.currentHotel = hotelResponse.data
        this.hotel = this.$store.state.currentHotel
        const roomResponse = await useApi().get(`/room/list/${this.$route.params.id}`)
        this.rooms = roomResponse.data
    },
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
                                <router-link to="/dashboard" class="button mb-2">Return</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'hotelupdate', params: { id: hotel.id } }">Update
                                    Hotel</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'roomcreate', params: { id: hotel.id } }">Include a New
                                    Room</router-link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="column">
                    <div class="box">
                        <div class="is-flex is-justify-content-space-between is-align-items-center mb-3">
                            <div>
                                <h2 class="is-size-3 has-text-weight-bold">{{ hotel.name }}</h2>
                                <p class="is-size-7 is-flex is-align-items-center">
                                    <img class="pin-image" src="@/assets/pin.png">
                                    {{ hotel.address }}, {{ hotel.city }}, {{ hotel.region_name }}, {{ hotel.country_name }}
                                </p>
                            </div>
                            <small class="score-star is-size-6">{{ hotel.stars }}</small>
                        </div>
                        <img class="hotel-image mb-2" :style="{ backgroundImage: `url(${hotel.photos})` }">
                        <p class="description has-text-justified mb-4">{{ hotel.description }}</p>
                        <h4 class="has-text-weight-semibold is-size-6">Main Amenities</h4>
                        <ul class="mb-5">
                            <li v-for="amenity in hotel.amenities" class="amenities">{{ amenity.name }}</li>
                        </ul>
                        <table class="table is-fullwidth is-hoverable">
                            <thead>
                                <tr>
                                    <th>Type of Room</th>
                                    <th>Capacity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="room in rooms" style="cursor: pointer;">
                                    <td>{{ room.name }}</td>
                                    <td>{{ room.capacity }}</td>
                                    <td>{{ room.price }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    </main>
    <AlertModal :activeClass="this.activeClass" :delete="deleteItem" :update="updateItem" :title="this.titleModal"
        :message="this.messageModal" />
</template>

<style scoped>
.pin-image {
    width: 15px;
}

.score-star {
    background-color: #003b95;
    color: #fff;
    padding: 8px;
    border-radius: 5px;
}

.hotel-image {
    height: 100%;
    min-height: 430px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
}

.description {
    font-size: 14px;
}

.amenities {
    font-size: 14px;
}
</style>