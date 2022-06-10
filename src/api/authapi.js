import axios from "axios"

const baseAuthUrl = '/api/auth'


export const signupHandler = async (userData) => {
    try {
        const response = await axios.post(`${baseAuthUrl}/signup`, userData);
        localStorage.setItem("token", response.data.encodedToken);
        return response;
    } catch (error) {
        console.log(error);
    }
};


export const LoginHandler = async (userLogdata) => {
    console.log('login user info', userLogdata)
    try {
        const response = await axios.post(`${baseAuthUrl}/login`, userLogdata);
        localStorage.setItem("token", response.data.encodedToken);
        return response;
    } catch (error) {
        console.log(error);
    }
}