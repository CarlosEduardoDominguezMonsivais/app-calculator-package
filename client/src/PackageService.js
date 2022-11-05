import axios from "axios";
const url = 'http://localhost:3000/calculator';

class PackageService {
    // Post Package
    static postPackage(body) {
        const {largo, ancho, alto, type_box} = body
        return axios.post(url, {
          largo, ancho, alto, type_box
        });
    }
}

export default PackageService