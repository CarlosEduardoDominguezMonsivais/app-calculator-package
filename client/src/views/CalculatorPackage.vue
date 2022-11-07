<template>
  <section class="text-gray-700 body-font overflow-hidden bg-gris-default">
    <div class="container px-5 py-24 mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white">
        <img alt="ecommerce" class="w-full object-cover object-center"
          src="../assets/img/cajas-de-carton.webp" />
      </div>
      <div class="bg-white px-12 py-8">
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
          <div class="flex">
            <button type="button" class="ml-auto text-white bg-blue-pp border-0 py-2 px-8 focus:outline-none bg-blue-900 rounded" @click="createdQuote">
              <i class="fa-solid fa-box"></i> Cotizar
            </button>
          </div>
        </form>
      </div>

      </div>
    </div>
    <modal-calculator :toogle="toogleModal">
      <template #header>
        <h2 class="text-xl">Enviar cotización</h2>
      </template>
      <template #content>
          <div class="flex justify-between text-gray-600 text-sm mb-6">
              <div class="flex items-center space-x-4">
                  <!-- <span class="text-base">Numero de la orden: #{{products.number}}</span> -->
              </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div class="text-left">
                <div class="grid gap-2 grid-cols-1">
                  <div class="mt-4 col-span-6">
                      <label for="name" value="Nombre *" />
                      <input id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Nombre" required v-model="user.name" />
                      <small class="text-red-400" v-if="errors_user.name">{{errors_user.name[0]}}</small>
                  </div>
                  <div class="mt-4 col-span-6">
                      <label for="lastname" value="Apellido *" />
                      <input id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Apellido" required v-model="user.lastname" />
                      <small class="text-red-400" v-if="errors_user.lastname">{{errors_user.lastname[0]}}</small>
                  </div>  
                  <div class="mt-4 col-span-6">
                      <label for="email" value="Email *" />
                      <input id="eamil" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="email" placeholder="Correo electrónico" required v-model="user.email"/>
                      <small class="text-red-400" v-if="errors_user.email">{{errors_user.email[0]}}</small>
                  </div>  
                  <div class="mt-4 col-span-6">
                      <label for="address" value="Dirección *" />
                      <textarea id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Colonia, Calle, Número exterior" required v-model="user.address"></textarea>
                      <small class="text-red-400" v-if="errors_user.address">{{errors_user.address[0]}}</small>
                  </div>
                  <div class="col-span-5"></div>
                  <div class="flex items-center justify-end pt-4">
                    <button type="button"  class="ml-auto text-white border-0 py-2 px-8 focus:outline-none bg-blue-900 rounded" @click="sendQuoteCalculate">
                    <i class="fa-solid fa-paper-plane"></i> Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white lg:block">
                <ul class="py-6 border-b space-y-6 px-8">
                    <li class="grid grid-cols-6 gap-2 border-b-1">
                        <div class="col-span-1 self-center">
                            <img src="../assets/img/cajas-de-carton.webp" alt="Product" class="rounded w-full">
                        </div>
                        <div class="flex flex-col col-span-3 pt-2">
                            <span class="text-gray-600 text-md font-semi-bold">Cajas de cartón</span>
                            <span class="text-gray-400 text-sm inline-block pt-2">para Fabricación</span>
                        </div>
                        <div class="col-span-2 pt-3">
                            <div class="flex items-center space-x-2 text-sm justify-between">
                                <span class="text-gray-400">{{this.quote_calulate.largo}} x <span> {{this.quote_calulate.ancho}} x <span> {{this.quote_calulate.alto}}</span></span> </span>
                                <span class="text-blue-pp font-semibold inline-block">{{this.quote_manufacturing.precio_unitario_con_iva}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="px-8 border-b">
                    <div class="flex justify-between py-4 text-gray-600">
                        <span>Cantidad de cajas minimas a fabricar</span>
                        <span class="font-semibold text-blue-pp">{{this.quote_manufacturing.fabricacion_minimo_boxes}}</span>
                    </div>
                    <div class="flex justify-between py-4 text-gray-600">
                        <span>Costo total de fabricacion</span>
                        <span class="font-semibold text-blue-pp">$ {{this.quote_manufacturing.costo_total_con_iva}}</span>
                    </div>
                </div>
                <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                    <span>Precio total</span>
                    <span>$ {{this.quote_manufacturing.precio_total_con_iva}}</span>
                </div>
            </div>
          </div>
          <!-- <div class="pt-16 overflow-x-auto overflow-y-auto">
                  <table class="table-auto w-full whitespace-nowrap">
                    <thead class="text-left text-sm">
                        <tr class="border-b border-gray-200">
                            <th class="px-2 py-3">Cantidad de cajas minimas a fabricar</th>
                            <th class="px-2">Costo por caja</th>
                            <th class="px-2">Costo total de fabricación</th>
                        </tr>
                    </thead>
                    <tbody class="text-xs">
                        <tr v-for="item in products.items" :key="item.id" class="odd:bg-gray-50">
                            <td class="px-2 py-3">{{item.sku}}</td>
                            <td class="px-2">{{item.name}}</td>
                            <td class="px-2">{{item.quantity}}</td>
                            <td class="px-2">{{item.price}}</td>
                            <td class="px-2" v-if ="item.total != null">{{item.total}}</td>
                            <td class="px-2" v-else>{{item.price}}</td>
                        </tr> 
                    </tbody>
                  </table>
          </div> -->
      </template>
      <template #footer>
          <!-- <div class="flex items-center justify-end">
              <button type="button" class="ml-4" elementColor="bg-celeste-default text-white" @click="sendQuoteCalculate">
                <span class="hidden sm:inline ml-2">Pagar</span>
              </button>
          </div> -->
      </template>
  </modal-calculator>
  </section>
</template>

<script>
import PackageService from '../PackageService'
import Swal from 'sweetalert2'
import ModalCalculator from '../components/ModalCalculator.vue'

export default {
  name: 'CalculatorPackage',

  components: {
    ModalCalculator 
  },

  data() {
    return {
      quote: {
        type_box: '',
        alto: '',
        largo: '',
        ancho: '',
      },
      toogleModal: false,
      errors: [],
      error_calculation: [],
      errors_user: {},
      quote_calulate: {},
      quote_manufacturing: {},
      user: {}
    } 
  },
  
  methods: {
      async createdQuote() {
        await PackageService.postPackage(this.quote)
        .then(response => {
          const quote = response.data.boxes
          this.showQuoteCalculator(quote)   
          // this.$router.push({ name: 'confirmQuote', state: { quote: quote_calulate }})
        }).catch(error => {
          // console.log(error.response.status)
          if(error.response.status == 403) {
            let errorsQuery = error.response.data
            this.errors = errorsQuery.validaciones
          }else if(error.response.status == 400) {
            let errorsQueryCalculation = error.response.data
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
      },
      
      showQuoteCalculator(quote) {
        this.toogleModal = !this.toogleModal
        this.quote_calulate = quote
        const { minimo_fabricacion } = quote
        this.quote_manufacturing = minimo_fabricacion
      },

      async sendQuoteCalculate() {
        const order = {
          user: this.user,
          quote: this.quote_calulate
        }
        this.errors_user = {}
        if (!this.user.name) {
          this.errors_user.name = ['El campo nombre es requerido']
          return false
        }
        if(!this.user.lastname) {
          this.errors_user.lastname = ['El campo apellido es requerido']
          return false
        }
        if(!this.user.email) {
          this.errors_user.email = ['El campo email es requerido']
          return false
        }
        if(!this.user.address) {
          this.errors_user.address = ['El campo dirección es requerido']
          return false
        }else{
          await PackageService.sendQuote(order)
        .then(response => {
          console.log(response)
            // const quote = response.data.boxes
            Swal.fire({
            title: "¡Se ha efectuado el pago!",
            icon: "success",
          })
          this.toogleModal = !this.toogleModal     
        }).catch(error => {
          Swal.fire({
              title: `Error al enviar la cotización`,
              icon: "error",
            })
          console.log(error)
        })
        } 
    }

  }

}

</script>
