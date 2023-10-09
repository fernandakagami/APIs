import { useApi } from '../../../services'
import router from '@/router';

export const actions = {
    listHotel(commit) {
        return useApi().get('hotel')
            .then((response) => {                
                return response.data
            })
    },
    registerHotel( {commit, dispatch}, { description, postalCode, countryName, regionName, city, address, name, shortDescription, photos, stars, checkedAmenities, category }) {
        return useApi().post('hotel',
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
        .then(() => {
            dispatch('showNotification', { notification: 'Hotel created successfully', cssClass: 'is-sucess' })
            router.push({
                path: '/dashboard'
            })
        })
        .catch(() => {            
            dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })
        })
    },
    updateHotel({commit, dispatch}, { description, postalCode, countryName, regionName, city, address, name, shortDescription, photos, stars, checkedAmenities, category }) {        
        return useApi().patch(`hotel/${this.getters.currentHotel.id}`,
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
            .then(() => {                    
                dispatch('showNotification', { notification: 'Hotel updated successfully', cssClass: 'is-success' })                                
            })
            .catch(() => {                
                dispatch('showNotification', { notification: 'Something went wrong', cssClass: 'is-danger' })                
            })            
    }
}