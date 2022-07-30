import axios from 'axios'

export default async function getAllProducts() {
    try {
        const response = await axios.get('http://10.0.2.2:3006/posts')
        const items = response.data
        return items
    } catch (err) {
        console.log("err : " + err)
    }
}