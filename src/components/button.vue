<template>
    <button
        class="Button-contact"
        @click="sayHello"
        :style="{
            '--bg': color,
            '--border': outlined,
        }"
    >
        <span class="title">{{ titel }}</span>
    </button>
</template>

<script setup>
import { ref } from "vue";

const number = ref(0);

function sayHello() {
    number.value++;
    console.log("Haloo haliim", number.value);
}

defineProps({
    titel: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "transparent",
    },
    outlined: {
        type: String,
        default: "none", // contoh: "1px solid red"
    },
});
</script>

<style scoped>
.Button-contact {
    padding: 15px;
    margin: 10px;
    font-size: 15px;
    background: var(--bg);
    border-radius: 5px;
    display: flex;
    width: 200px;
    justify-content: center;
    border: var(--border);
    cursor: pointer;
    outline: var(--outlined);
}

.title {
    font-size: 14px;
    color: white;
    font-weight: 600;
}
</style>
