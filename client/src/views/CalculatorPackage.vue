<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src="../assets/img/cajas-de-carton.webp" />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            Cotizador de cajas de cartón
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" class="w-4 h-4 text-yellow-pp" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                </path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" class="w-4 h-4 text-yellow-pp" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                </path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" class="w-4 h-4 text-yellow-pp" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                </path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" class="w-4 h-4 text-yellow-pp" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                </path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 text-yellow-pp" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                </path>
              </svg>
              <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <a href="https://www.facebook.com/parapaquetes" target="_blank" class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/parapaquetes" target="_blank" class="ml-2 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a href="https://www.instagram.com/parapaquetes/" target="_blank" class="ml-2 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed pb-8">
            Envía tus productos en nuestras cajas de cartón con pestañas
            especialmente diseñadas para envíos por paquetería, máxima
            protección a tus productos, reduce el riesgo de daño.
          </p>
          <!-- <div v-for="error in this.errors" :key="error">
            <div class="text-sm text-red-700 dark:text-red-800">
                <i class="fa-solid fa-circle-info"></i> <span>{{ error.msg }}</span>
            </div>
          </div>      -->
          <form>
            <div class="block">
              <div class="form-group mb-4">
                <label class="form-label inline-block mb-2 text-gray-700">Tipo de Caja</label>
                <div class="relative">
                  <select id="type_box" name="type_box"
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    v-model="quote.type_box">
                    <option value="26_ects_C" selected>26 ECTs C</option>
                    <option value="32_ects_C">32 ECTs C</option>
                    <option value="36_ects_BC">36 ECTs BC</option>
                    <option value="48_ects_BC">48 ECTs BC</option>
                    <option value="61_ects_BC">61 ECTs BC</option>
                  </select>
                  <div class="text-sm text-red-700 dark:text-red-800">
                    <span>{{ validationMessage('type_box') }}</span>
                  </div>
                  <span
                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label inline-block mb-2 text-gray-700">Largo</label>
                <input type="number" step="any" id="largo" name="largo"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  v-model="quote.largo"/>
                  <div class="text-sm text-red-700 dark:text-red-800">
                    <span>{{ validationMessage('largo') }}</span>
                  </div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label inline-block mb-2 text-gray-700">Ancho</label>
                <input type="number" step="any" id="ancho" name="ancho"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  v-model="quote.ancho"/>
                  <div class="text-sm text-red-700 dark:text-red-800">
                    <span>{{ validationMessage('ancho') }}</span>
                  </div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label inline-block mb-2 text-gray-700">Altura</label>
                <input type="number" step="any" id="alto" name="alto"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  v-model="quote.alto"/>
                  <div class="text-sm text-red-700 dark:text-red-800">
                    <span>{{ validationMessage('alto') }}</span>
                  </div>
              </div>
            </div>
            <div class="title-font font-medium text-lg text-gray-900">
              Area: <strong id="area_total"></strong>
            </div>
            <div class="title-font font-medium text-lg text-gray-900">
              Peso volumetrico: <strong id="peso_volumetrico"></strong>
            </div>
            <div class="title-font font-medium text-lg text-gray-900">
              Total sin IVA: <strong id="costo_sin_iva"></strong>
            </div>
            <div class="flex">
              <span class="font-medium text-2xl text-gray-900">Total con IVA:<strong class="text-red-500" id="costo_con_iva"></strong></span>
              <button type="button" class="ml-auto text-white bg-blue-pp border-0 py-2 px-8 focus:outline-none bg-blue-900 rounded" @click="createdQuote">
                <i class="fa-solid fa-box"></i> Cotizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PackageService from '../PackageService'
import Swal from 'sweetalert2'
export default {
    name: 'CalculatorPackage',

data() {
  return {
    quote: {
      type_box: '',
      alto: '',
      largo: '',
      ancho: '',
    },
    errors: [],
    error_calculation: '',
  } 
},
methods: {
    async createdQuote() {
      await PackageService.postPackage(this.quote)
      .then(response => {
        console.log(response)
      }).catch(error => {
        // console.log(error.response.status)
        if(error.response.status == 403) {
          var errorsQuery = error.response.data
          this.errors = errorsQuery.validaciones
        }else if(error.response.status == 400) {
          var errorsQueryCalculation = error.response.data
          this.error_calculation = errorsQueryCalculation.error
          Swal.fire({
            title: `${this.error_calculation}`,
            icon: "error",
          })
        }
      })
    },
    validationMessage(field) {
      var validation = this.errors.find(error => error.param == field)
      if( validation == undefined )return ''
      return validation.msg
    }
  }

}

</script>
