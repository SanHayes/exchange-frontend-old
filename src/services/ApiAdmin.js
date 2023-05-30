// axios
import axios from 'axios'
import config from '@/config';

export default () => {
    return axios.create({
        baseURL: `${config.domain}`,
        headers: {
            Authorization: `Sky ${localStorage.getItem('token')}`
        }
    })
}