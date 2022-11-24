<template>
    <section class="bg-gris-default h-screen">
        <div class="py-8 md:py-14">
            <div class="container px-5 mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center">
                    <div class="bg-white px-4 md:px-12 py-8 md:py-24">
                        <h2 class="text-xl">Enviar cotización</h2>
                        <div class="text-left">
                            <div class="grid gap-2 grid-cols-1 sm:grid-cols-6">
                                <div class="mt-4 col-span-6">
                                    <input id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Nombre" required v-model="user.name" />
                                    <small class="text-red-400" v-if="errors_user.name">{{errors_user.name[0]}}</small>
                                </div>
                                <div class="mt-4 col-span-6">
                                    <input id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Apellido" required v-model="user.lastname" />
                                    <small class="text-red-400" v-if="errors_user.lastname">{{errors_user.lastname[0]}}</small>
                                </div>  
                                <div class="mt-4 col-span-6">
                                    <input id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Empresa (Opcional)" required v-model="user.company" />
                                    <small class="text-red-400" v-if="errors_user.company">{{errors_user.company[0]}}</small>
                                </div>  
                                <div class="mt-4 col-span-6 sm:col-span-3">
                                    <input id="eamil" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="email" placeholder="Correo electrónico" required v-model="user.email"/>
                                    <small class="text-red-400" v-if="errors_user.email">{{errors_user.email[0]}}</small>
                                </div>
                                <div class="mt-4 col-span-6 sm:col-span-3">
                                    <input id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="tel" placeholder="Teléfono" required v-model="user.phone"/>
                                    <small class="text-red-400" v-if="errors_user.phone">{{errors_user.phone[0]}}</small>
                                </div>  
                                <div class="mt-4 col-span-6 sm:col-span-2">
                                    <input id="suburb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Colonia" required v-model="user.suburb"/>
                                    <small class="text-red-400" v-if="errors_user.suburb">{{errors_user.suburb[0]}}</small>
                                </div>
                                <div class="mt-4 col-span-6 sm:col-span-2">
                                    <input id="street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="text" placeholder="Calle y número exterior" required v-model="user.street"/>
                                    <small class="text-red-400" v-if="errors_user.street">{{errors_user.street[0]}}</small>
                                </div>
                                <div class="mt-4 col-span-6 sm:col-span-2">
                                    <input id="postal_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1" type="number" placeholder="Código postal" required v-model="user.postal_code"/>
                                    <small class="text-red-400" v-if="errors_user.postal_code">{{errors_user.postal_code[0]}}</small>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="flex items-center justify-start pt-4">
                                    <button type="button" @click="returnCalculation" class="px-8 py-2 font-semibold text-white border-0 bg-gray-400 rounded">
                                        <i class="fa-solid fa-arrow-left"></i> Volver
                                    </button>
                                </div>
                                <div class="flex items-center justify-end pt-4">
                                    <button type="button"  class="ml-auto text-white border-0 py-2 px-8 focus:outline-none bg-blue-900 rounded" @click="sendQuoteCalculate">
                                        <i class="fa-solid fa-paper-plane"></i> Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white px-4 md:px-12 py-8 md:py-24 lg:block">
                        <h2 class="text-xl">Resumen del pedido</h2>
                        <ul class="py-6 border-b space-y-6 px-4">
                            <li class="grid grid-cols-1 md:grid-cols-6 gap-2 border-b-1">
                                <div class="col-span-1 self-center">
                                    <img src="@/assets/img/cajas-de-carton.webp" alt="Product" class="rounded h-16 md:h-auto md:w-full">
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
                                        <span class="text-gray-400">{{quote_calculated.largo}} x <span> {{quote_calculated.ancho}} x <span> {{quote_calculated.alto}}</span></span> </span>
                                        <span class="text-blue-pp font-semibold inline-block">{{quote_calculated.fabricacion.precio_unitario_con_iva}}<span class="text-xs"> con iva</span></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="px-4 border-b">
                            <div class="flex justify-between py-4 text-gray-600">
                                <span>Cantidad de cajas</span>
                                <span class="font-semibold text-blue-pp">{{quote_calculated.fabricacion.fabricacion_minimo_boxes}} pza</span>
                            </div>
                            <div class="flex justify-between py-4 text-gray-600">
                                <span>Subtotal</span>
                                <span class="font-semibold text-blue-pp">{{quote_calculated.fabricacion.precio_total_sin_iva}} <span class="text-xs"> sin iva</span></span>
                            </div>
                        </div>
                        <div class="font-semibold text-xl px-4 flex justify-between py-8 text-gray-600">
                            <span>Precio total</span>
                            <span>{{quote_calculated.fabricacion.precio_total_con_iva}} <span class="text-xs"> con iva</span></span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import PackageService from '@/PackageService'

export default {
    data() {
        return {
            errors_user: {},
            user: {},
        }
    },

    computed: {
        ...mapState('calculation', ['quote_calculated'])
    },

    methods: {
        returnCalculation () {
        this.$store.commit('calculation/createCalculation', {})
        this.$router.push({ path: '/' })
      },

      async sendQuoteCalculate() {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        const order = {
          user: this.user,
          quote: this.quote_calculated
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
        if(!emailRegex.test(this.user.email)) {
            this.errors_user.email = ['El campo tiene que ser un email válido']
            return false
        }
        if(!this.user.phone) {
            this.errors_user.phone = ['El campo del teléfono es requerido']
            return false
        }
        if(!phoneRegex.test(this.user.phone)){
          this.errors_user.phone = ['El campo tiene que ser un teléfono válido']
            return false
        }
        if(!this.user.suburb) {
          this.errors_user.suburb = ['El campo de colonia es requerido']
          return false
        }if(!this.user.street) {
          this.errors_user.street = ['El campo de calle es requerido']
          return false
        }  if(!this.user.postal_code) {
          this.errors_user.postal_code = ['El campo de código postal es requerido']
          return false
        }else{
          await PackageService.sendQuotation(order)
        .then(response => {
            // const quote = response.data.boxes
            console.log(response)
            Swal.fire({
            title: "¡Tu solicitud ha sido enviada exitosamente!",
            text: 'En las siguientes 24 horas hábiles un ejecutivo de ventas se comunicará para darle seguimiento a tu solicitud.',            
            footer: '<a href="https://parapaquetes.com/pages/contacto" target="_blank" style="font-weight: 700; text-decoration: underline; text-decoration-thickness: 1px; text-align: center;"> Para cualquier duda o comentario, haz click aqui para contactarnos</a>',
            icon: "success",
          })
            this.$store.commit('calculation/createCalculation', {})
            this.$router.push({ path: '/' })
        }).catch(error => {
          Swal.fire({
              title: `Error al enviar la cotización`,
              icon: "error",
            })
          console.log(error)
        })
        } 
      },
    },
}


</script>