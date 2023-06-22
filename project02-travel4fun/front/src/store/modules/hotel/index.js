import { instance } from '../../../services';

export const hotel = {
    state: {
        hotelsList: []
    },
    mutations: {
        changeHotelList(state, payload) {
            state.hotelsList = payload
        },
    },
    actions: {
        listHotel(commit) {
            return instance.get('hotel')   
        },
        registerHotel(commit, { description, postalCode, countryName, regionName, city, address, name, shortDescription, photos, stars, checkedAmenities,category }) {
            instance.post('hotel',
                {
                    description: description,
                    postal_code: postalCode,
                    country_name: countryName,
                    region_name: regionName,
                    city: city,
                    address: address,
                    name: name,
                    short_description: shortDescription,
                    photos: photos,
                    stars: stars,
                    amenities: checkedAmenities,
                    categories_id: category,
                }
            )
        },        
    }
}