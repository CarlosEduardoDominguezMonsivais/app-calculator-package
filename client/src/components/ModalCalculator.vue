<template>
    <div>
        <div class="inline" @click="open = ! open">
            <slot name="trigger" />
        </div>

        <!-- Full Screen Dropdown Overlay -->
        <div v-show="open" class="fixed inset-0 z-4 bg-gray-100" @click="open = false"></div>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div v-show="open" class="fixed inset-0 sm:inset-8 z-50 flex">
                <div class="bg-white w-full rounded-md shadow-lg px-6 py-24 overflow-y-scroll">
                    <div class="absolute inset-x-0 top-0 bg-white py-4 px-6 border-b rounded-t-md">
                        <button type="button" class="float-right text-gray-500 hover:text-gray-700" @click="open = false"><i class="fa-solid fa-xmark"></i></button>
                        <slot name="header" />
                    </div>
                    <slot name="content" />
                    <div class="absolute inset-x-0 bottom-0 bg-white py-4 px-6 border-t rounded-b-md" v-if="$slots.footer">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
    props: [
        'toogle'
    ],
    setup() {
        let open = ref(false)

        const closeOnEscape = (e) => {
            if (open.value && e.keyCode === 27) {
                open.value = false
            }
        }

        onMounted(() => document.addEventListener('keydown', closeOnEscape))
        onUnmounted(() => document.removeEventListener('keydown', closeOnEscape))

        return {
            open,
        }
    },
    watch: {
        toogle: function (newValue, oldValue) {
            if (oldValue != newValue) {
                this.open = !this.open
            }
        }
    },
}
</script>
