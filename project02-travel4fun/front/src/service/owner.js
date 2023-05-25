import axios from "axios";

export async function userCreate(user) {
    const response = await axios
        .post('http://127.0.0.1:8000/api/user',
            {
                name: user.name,
                email: user.email,
                password: user.password,
                password_confirmation: user.confirmationPassword,
                role: "owner"
            }
        )
        .catch((error) => {
            console.log(error)
        })

    return response
}
