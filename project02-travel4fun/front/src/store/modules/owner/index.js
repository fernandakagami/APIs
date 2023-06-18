import { instance } from '../../../services';

export const owner = {
    actions: {        
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
            instance.patch(`user/profile`,
                {
                    name: name,
                })
        },
        updatePassword(commit, { password, confirmationPassword }) {
            instance.patch('http://127.0.0.1:8000/api/user/password',
                {
                    password: password,
                    password_confirmation: confirmationPassword,
                })
        },
    }
}