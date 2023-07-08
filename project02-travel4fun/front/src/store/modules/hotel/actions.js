import { useApi } from '../../../services'

export const actions = {
    listHotel(commit) {
        return useApi().get('hotel')
    },
    registerHotel(commit, { description, postalCode, countryName, regionName, city, address, name, shortDescription, photos, stars, checkedAmenities, category }) {
        useApi().post('hotel',
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
    updateHotel({commit}, { description, postalCode, countryName, regionName, city, address, name, shortDescription, photos, stars, checkedAmenities, category }) {        
        useApi().patch(`hotel/${this.getters.currentHotel.id}`,
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
            })
    }
}