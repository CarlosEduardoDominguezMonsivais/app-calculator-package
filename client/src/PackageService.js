import axios from "axios";
const url = '/calculator/';
const url2 = '/calculator/send';


class PackageService {
    // Post Package
    static postPackage(body) {
        const {largo, ancho, alto, type_box} = body
        return axios.post(url, {
          largo, ancho, alto, type_box
        });
    }

    static sendQuote(order) {
      const { user, quote } = order
      return axios.post(url2, {
        user, quote
      });
  }
}

export default PackageService