<template>
    <header class="AppBar">
        <div class="logo">
            <span class="first-sentence">bY</span>
            <span class="second-sentence">Haliim</span>
        </div>

        <nav class="navBar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Portofolio">Portofolio</a></li>
                <li><a href="#sosial-media">Sosial Media</a></li>
                <li>
                    <Button titel="Contact Me"></Button>
                </li>
            </ul>
        </nav>
    </header>

    <div class="text-welcoming">
        <h1 class="first-text">Hello Lads</h1>
        <div class="welcome">
            <h3>I am</h3>
            <h3 class="second-text">Haliim Pamungkas</h3>
        </div>
        <h4 class="role">Mobile Developer (Flutter) - Physics - Go -Rust</h4>
        <h4>-------------</h4>
        <div class="text-description">
            <p>
                Mobile Developer with 1 year and 4 months of experience in
                building and maintaining Flutter applications deployed in
                production and published on Google Play Store, Apple App Store,
                and Huawei App Store. Strong experience in BLoC state
                management, REST API integration, WebSocket/Socket.IO, Firebase
                Notifications, and application performance optimization.
                Familiar with Golang backend and MySQL databases. Passionate
                about building scalable, maintainable, and high-performance
                mobile applications.Mobile Developer with 1 year and 4 months of
                experience in building and maintaining Flutter applications
                deployed in production and published on Google Play Store, Apple
                App Store, and Huawei App Store. Strong experience in BLoC state
                management, REST API integration, WebSocket/Socket.IO, Firebase
                Notifications, and application performance optimization.
                Familiar with Golang backend and MySQL databases. Passionate
                about building scalable, maintainable, and high-performance
                mobile applications.
            </p>
        </div>

        <ul class="button-bg">
            <li>
                <ButtonHome titel="Download CV" color="steelblue"></ButtonHome>
            </li>

            <li>
                <ButtonHome
                    titel="More"
                    color="transparant"
                    outlined="solid"
                ></ButtonHome>
            </li>
        </ul>
    </div>
</template>

<!-- Script javascript -->
<script setup>
import { ref } from "vue";
import Button from "@/components/button-contact.vue";
import ButtonHome from "@/components/button.vue";
</script>

<!-- CSS ELEMENT -->
<style scoped>
.first-sentence {
    color: steelblue;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
}

.text-description {
    display: flex;
    max-width: 55%;
    word-break: break-word;
    overflow-wrap: break-word;
}

.second-sentence {
    color: white;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    padding-top: 2px;
}

.role {
    line-height: 0.2;
    font-family: Poppins;
}

.second-text {
    color: blue;
    padding-top: 2px;
}

.first-text {
    font-family: Poppins;
    font-size: 50px;
    font-weight: 600px;
}

.welcome {
    display: flex;
    flex-direction: row;
    gap: 8px;
    line-height: 0.2;
    font-family: Poppins;
    font-size: 33px;
    font-weight: 600px;
}

.text-welcoming {
    padding-left: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 200px;
}

.AppBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    background: transparant;

    color: white;
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
}

.navBar {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.button-bg {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: row;
}

.navBar ul {
    list-style-type: none;
    display: inline-flex;
    gap: 20px;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 5px;
    padding-right: 50px;
}
</style>
