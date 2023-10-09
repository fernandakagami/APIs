import { instance, useApi } from '../../../services';

export const actions = {

    registerOwner(commit, { name, email, password, confirmationPassword }) {
        instance.post('user',
            {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmationPassword,
                role: "owner"
            }
        )
    },
    updateOwner(commit, { name }) {
        useApi().patch(`user/profile`,
            {
                name: name,
            })
    },
    updatePassword(commit, { password, confirmationPassword }) {
        useApi().patch('http://127.0.0.1:8000/api/user/password',
            {
                password: password,
                password_confirmation: confirmationPassword,
            })
    },
    deleteOwner(commit) {
        useApi().delete('user/delete')
    }

}