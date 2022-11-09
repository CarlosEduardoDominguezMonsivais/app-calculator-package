import axios from "axios";
// const url = '/calculator/';
const url2 = '/calculator/send';

class PackageService {
    // Post Package
    // static postPackage(body) {
    //     const {largo, ancho, alto, type_box, cantidad} = body
    //     return axios.post(url, {
    //       largo, ancho, alto, type_box, cantidad
    //     });
    // }

    // send quotation
    static sendQuotation(order) {
      const { user, quote } = order
      return axios.post(url2, {
        user, quote
      });
  }
}

export default PackageService