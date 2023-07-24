import { defineStore } from "pinia"
import {options} from "kolorist";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
        count.value++
    }
    const doubleCount = computed(() => count.value * 2)

    return { count, increment, doubleCount }
}, {
    persist: true
})
