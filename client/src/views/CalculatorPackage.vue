<template>
  <section class="text-gray-700 body-font overflow-hidden md:bg-gris-default">
    <div class="container px-5 md:py-24 mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white">
        <img alt="ecommerce" class="w-full object-cover object-center"
          src="../assets/img/cajas-de-carton.webp" />
        </div>
        <div class="bg-white px-4 md:px-12 py-8">
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
          <div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert" v-if="msg.largo_pliego">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Alerta!</span> {{msg.largo_pliego[0]}}
            </div>
          </div>
          <div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert" v-if="msg.ancho_pliego">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Alerta!</span> {{msg.ancho_pliego[0]}}
            </div>
          </div>
          <form>
            <div class="block">
              <div class="form-group my-6">
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
                  <small class="text-red-400" v-if="msg.type_box">{{msg.type_box[0]}}</small>
                  <span
                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
                  <div>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Largo
                      </span>
                      <input 
                          type="number" 
                          id="largo" 
                          class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          v-model="quote.largo"/>
                    </div>
                    <small class="text-red-400" v-if="msg.largo">{{msg.largo[0]}}</small>
                  </div>
                  <div>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Ancho
                      </span>
                      <input 
                          type="number"
                          id="ancho" 
                          class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          v-model="quote.ancho"/>
                    </div>
                    <small class="text-red-400" v-if="msg.ancho">{{msg.ancho[0]}}</small>
                  </div>
                  <div>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Alto
                      </span>
                      <input 
                          type="number" 
                          id="alto"
                          class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          v-model="quote.alto"/>                       
                    </div>
                    <small class="text-red-400" v-if="msg.alto">{{msg.alto[0]}}</small>
                  </div>
                </div>
                <!-- <label class="form-label inline-block mb-2 text-gray-700">Largo</label>
                <input type="number" step="any" id="largo" name="largo"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  v-model="quote.largo"/>
                  <div class="text-sm text-red-700 dark:text-red-800">
                    <span>{{ validationMessage('largo') }}</span>
                  </div>
              </div> -->
              <!-- <div class="form-group mb-4">
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
                  </div> -->
              </div>
            </div>
            <!-- <div class="flex items-center py-8"> -->
                <!-- <label class="form-label mr-4 text-gray-700">Cantidad: </label> -->
              <!--<div class="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1"> -->
                <!-- <button data-action="decrement" class="bg-gris-default text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none">
                  <span class="m-auto text-2xl font-thin">−</span>
                </button> -->
                <!-- <vue-number-input  :model-value="0" inline center controls v-model="quote.cantidad"></vue-number-input> -->
                <!-- <button data-action="increment" class="bg-gris-default text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer">
                <span class="m-auto text-2xl font-thin">+</span>
                </button> -->
              <!-- </div> -->
              <!-- <input type="number" name="cantidad" id="cantidad" class="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                v-model="quote.cantidad" />-->
            <!-- </div> -->
          </form>
          <div v-if="Object.keys(quote_manufacturing).length === 0">
            <div class="py-12 text-center md:text-xl">
              Seleccione el tipo de caja, el largo, el ancho y el alto para realizar la cotización  <i class="fa-solid fa-box text-gray-300"></i>
            </div>
          </div>
          <div class="overflow-x-auto" v-else>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Minimo de fabricación
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Precio por caja
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{this.quote_manufacturing.fabricacion_minimo_boxes}}
                        </th>
                        <td class="py-4 px-6">
                          {{this.quote_manufacturing.precio_unitario_con_iva}}
                        </td>
                        <td class="py-4 px-6">
                          {{this.quote_manufacturing.precio_total_con_iva}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center py-8">
              <button type="button" class="ml-auto text-white bg-blue-pp border-0 py-2 px-8 focus:outline-none bg-blue-900 rounded" @click="showQuoteCalculator" v-if="Object.keys(msg).length === 0">
                  <i class="fa-solid fa-box"></i> Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-calculator :toogle="toogleModal">
      <template #header>
        <h2 class="text-xl">Enviar cotización</h2>
      </template>
      <template #content>
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
                    <li class="grid grid-cols-1 md:grid-cols-6 gap-2 border-b-1">
                        <div class="col-span-1 self-center">
                            <img src="../assets/img/cajas-de-carton.webp" alt="Product" class="rounded h-16 md:h-auto md:w-full">
                        </div>
                        <div class="flex flex-col col-span-2 pt-2">
                            <span class="text-gray-600 text-md font-semi-bold">Cajas de cartón</span>
                            <span class="text-gray-400 text-sm inline-block md:pt-2">para Fabricación</span>
                        </div>
                        <div class="col-span-3 pt-3">
                            <div class="flex items-center space-x-2 text-sm justify-between">
                                <span class="text-gray-400">Dimensiones</span>
                                <span class="text-gray-400 inline-block">Precio unitario</span>
                            </div>
                            <div class="flex items-center space-x-2 text-sm justify-between">
                                <span class="text-gray-400">{{this.quoteBox.largo}} x <span> {{this.quoteBox.ancho}} x <span> {{this.quoteBox.alto}}</span></span> </span>
                                <span class="text-blue-pp font-semibold inline-block">$ {{this.quote_manufacturing.precio_unitario_con_iva}}<span class="text-xs"> con iva</span></span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="px-8 border-b">
                    <div class="flex justify-between py-4 text-gray-600">
                        <span>Cantidad de cajas</span>
                        <span class="font-semibold text-blue-pp">{{this.quote_manufacturing.fabricacion_minimo_boxes}}</span>
                    </div>
                    <div class="flex justify-between py-4 text-gray-600">
                        <span>Costo total</span>
                        <span class="font-semibold text-blue-pp">$ {{this.quote_manufacturing.costo_total_con_iva}} <span class="text-xs"> con iva</span></span>
                    </div>
                </div>
                <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                    <span>Precio total</span>
                    <span>$ {{this.quote_manufacturing.precio_total_con_iva}} <span class="text-xs"> con iva</span></span>
                </div>
            </div>
          </div>
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
        ancho: ''
      },
      toogleModal: false,
      msg: {},
      errors_user: {},
      quote_manufacturing: {},
      user: {},
      loading: false,
      quoteBox: {},
      error: {}
    } 
  },

  watch: {
    quote: {
      handler(newValue) {
        if (newValue.type_box === '') {
          this.msg.type_box = ['El tipo de caja es obligatorio caja']
        }else if (newValue.largo === '') {
          this.msg.largo = ['El largo no puede estar vacio']
          this.msg.type_box = ''
        }else if (newValue.ancho === '') {
          this.msg.ancho = ['El ancho no puede estar vacio']
          this.msg.largo = ''
        }else if (newValue.alto === '') {
          this.msg.alto = ['El alto no puede estar vacio']
          this.msg.ancho = ''
        }else{
          const validacion_largo_pliego = this.lengthTotalSheetMilimeters(parseFloat(newValue.largo), parseFloat(newValue.ancho))
          const validacion_ancho_pliego = this.widthTotalSheetMilimeters(parseFloat(newValue.ancho), parseFloat(newValue.alto))
          if ( validacion_largo_pliego == 'El largo del pliego debe de ser menor') {
            this.msg.largo_pliego = ['El largo del pliego debe de ser menor']
          }else if (validacion_largo_pliego == 'El largo del pliego debe de ser mayor') {
            this.msg.largo_pliego = ['El largo del pliego debe de ser mayor']
          }else if(validacion_ancho_pliego == 'El ancho del pliego debe de ser menor') {
            this.msg.ancho_pliego = ['El ancho del pliego debe de ser menor']
          }else if (validacion_ancho_pliego == 'El ancho del pliego debe de ser mayor') {
            this.msg.ancho_pliego = ['El ancho del pliego debe de ser mayor']
          }else{
            this.calculateQuotation(newValue)
            this.msg = {}
          }
        }
      },
      deep: true
    }
  },
  
  methods: {
      showQuoteCalculator() {
        this.toogleModal = !this.toogleModal
      },

      async sendQuoteCalculate() {
        const order = {
          user: this.user,
          quote: this.quoteBox
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
          await PackageService.sendQuotation(order)
        .then(response => {
          console.log(response)
            // const quote = response.data.boxes
            Swal.fire({
            title: "¡Se ha enviado la contización!",
            icon: "success",
          })
          this.toogleModal = false
        }).catch(error => {
          Swal.fire({
              title: `Error al enviar la cotización`,
              icon: "error",
            })
          console.log(error)
        })
        } 
      },

      calculateQuotation({type_box, alto, largo, ancho}) {
        let type_box_value;
            switch (type_box) {
                case '26_ects_C': 
                    type_box_value = 16.41;
                break;
                case '32_ects_C': 
                    type_box_value= 19.11;
                break;
                case '36_ects_BC': 
                    type_box_value= 23.54;
                break;
                case '48_ects_BC': 
                    type_box_value= 28.18;
                break;
                case '61_ects_BC': 
                    type_box_value= 34.88;
                break;
          }
          this.quoteBox =  {
                type_box, 
                type_box_value,
                alto, 
                largo,
                ancho,
                largo_pliego_mm: this.lengthTotalSheetMilimeters(parseFloat(largo), parseFloat(ancho)),
                ancho_pliego_mm: this.widthTotalSheetMilimeters(parseFloat(ancho), parseFloat(alto)),
                costo_unitario_con_iva: this.priceWithIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                costo_unitario_sin_iva: this.priceWithoutIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                area: this.squareArea(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                peso_volumetrico: this.volumetricWeight(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                largo_pliego_cm: this.lengthTotalSheetCentimeters(parseFloat(largo), parseFloat(ancho)),
                ancho_pliego_cm: this.widthTotalSheetCentimeters(parseFloat(ancho), parseFloat(alto)),
                fabricacion: this.miniManufacturing(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho))
            }
          const { fabricacion } =  this.quoteBox
          console.log(this.quoteBox)
          this.quote_manufacturing = fabricacion
      },

      lengthTotalSheetCentimeters(largo, ancho) {
            const largo_total_pliego = ((largo * 2)+(ancho * 2)+ 6)
            return largo_total_pliego
        },
        
        lengthTotalSheetMilimeters(largo, ancho) {
          const largo1_extra = 5
          const largo2_extra = 3
          const largo_ceja = 35
          const largo1_pliego = ((largo * 10) +  largo1_extra)
          const largo2_pliego = ((ancho * 10) + largo2_extra)
          const length_total_sheet_milimeters = ((largo1_pliego * 2 ) + (largo2_pliego * 2)) + largo_ceja
          if ( length_total_sheet_milimeters > 2900 ) {
            return this.error = "El largo del pliego debe de ser menor"
              // Swal.fire({
              //   title: `El largo del pliego debe de ser menor`,
              //   icon: "error",
              // })
          }else if (length_total_sheet_milimeters < 900 ) {
            return this.error = "El largo del pliego debe de ser mayor" 
              // Swal.fire({
              //   title: `El largo del pliego debe de ser mayor`,
              //   icon: "error",
              // })
          }else{
              const data_length_total_sheet_milimeters = {
                  largo1_pliego,
                  largo2_pliego,
                  largo1_extra,
                  largo2_extra,
                  largo_ceja,
                  length_total_sheet_milimeters
              }
              return data_length_total_sheet_milimeters
          }
        },
        
        widthTotalSheetMilimeters(ancho, alto) {
          const ancho1_pliego = ((alto * 10) +  9)
          const ancho2_pliego = ((ancho * 5) + 4)
          const width_total_sheet_milimeters = ancho1_pliego + (ancho2_pliego * 2)
          if ( width_total_sheet_milimeters > 1400 ) {
            return this.error = "El ancho del pliego debe de ser menor"
            // Swal.fire({
            //   title: `El ancho del pliego debe de ser menor`,
            //   icon: "error",
            // })
          }else if ( width_total_sheet_milimeters < 400 ) {
            return this.error = "El ancho del pliego debe de ser mayor" 
            // Swal.fire({
            //   title: `El ancho del pliego debe de ser mayor`,
            //   icon: "error",
            // })
          }else{
              const data_length_total_sheet_milimeters = {
                  ancho1_pliego,
                  ancho2_pliego,
                  width_total_sheet_milimeters
              }
              return data_length_total_sheet_milimeters
          }
        },
        
        widthTotalSheetCentimeters(ancho, alto) {
            const ancho_total_pliego = ancho + alto + 3
            return ancho_total_pliego
        },
        
        priceWithIVA(type_box_value, alto, largo, ancho) {
            var price_with_iva = ((((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * (((((alto*10)+9)+((ancho*10)+8))/1000000) * type_box_value)) * 1.16);
            return price_with_iva.toFixed(2)
        },
        
        priceWithoutIVA(type_box_value, alto, largo, ancho) {
            var price_without_iva = (((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * (((((alto*10)+9)+((ancho*10)+8))/1000000) * type_box_value));
            return price_without_iva.toFixed(2)
        },
        
        squareArea(alto, largo, ancho) {
            var square_area =(((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * ((((alto*10)+9)+((ancho*10)+8)))/1000000);
            return square_area
        },
        
        volumetricWeight(alto, largo, ancho) {
            var volumetric_weight = (largo * ancho * alto)/ 5000;
            return `${parseInt(volumetric_weight)}`
        },

        miniManufacturing(type_box_value, alto, largo, ancho) {
          const area = this.squareArea(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
          margen = 0.20,
          costo_sin_iva =  this.priceWithoutIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
          fabricacion_minimo_boxes = Math.ceil(1500 / area),
          fabricacion_minimo_boxes_menos_10_porciento = Math.ceil(fabricacion_minimo_boxes * 0.9),
          fabricacion_minimo_boxes_mas_10_porciento =  Math.ceil(fabricacion_minimo_boxes * 1.1),
          costo_total_sin_iva = (fabricacion_minimo_boxes * costo_sin_iva).toFixed(2),
          costo_total_con_iva = (costo_total_sin_iva * 1.16).toFixed(2),
          precio_total_con_iva = (costo_total_con_iva / (1 - margen)).toFixed(2),
          precio_total_con_iva_menos_10_porciento = precio_total_con_iva * 0.9,
          precio_total_con_iva_mas_10_porciento = precio_total_con_iva * 1.1,
          precio_unitario_con_iva = (precio_total_con_iva / fabricacion_minimo_boxes).toFixed(2)
      
          const data_minimum_manufacturing = {
              fabricacion_minimo_boxes,
              fabricacion_minimo_boxes_menos_10_porciento,
              fabricacion_minimo_boxes_mas_10_porciento,
              costo_total_sin_iva,
              costo_total_con_iva,
              precio_total_con_iva,
              precio_total_con_iva_menos_10_porciento,
              precio_total_con_iva_mas_10_porciento,
              precio_unitario_con_iva
          }
          return data_minimum_manufacturing
      }
  }
}
</script>
