import { instance } from '../../../services';

export const hotel = {
    mutations: {
        changeHotelList(state, payload) {
            state.hotelsList = payload
        },
    },
    actions: {
        listHotel(commit) {
            instance.get('hotel')
            .then((response) => {
                console.log(response)
            })
        },       
    }
}