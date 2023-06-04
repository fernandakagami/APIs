<script type="module">
import LoginModal from '../components/LoginModal.vue';
import Footer from '../components/Owner/FooterPage.vue';
import Message from '../components/Message.vue';

export default {
    components: {
        LoginModal,
        Footer,
        Message
    },
    data() {
        return {
            activeClass: '',
        }
    },
    created () {
        this.$store.dispatch('show')
    },
    methods: {
        showModal() {
            this.activeClass = this.activeClass ? '' : 'is-active'
        }
    }
}
</script>

<template>
    <header>
        <div class="container is-max-desktop">
            <Message v-show="this.$store.state.show" :message="this.$store.state.notification" :class="this.$store.state.toastClass"></Message>
            <div class="is-flex is-justify-content-space-between is-align-items-center header-content">
                <div>
                    <img src="../assets/logo.png" alt="logo" class="logo" />
                </div>
                <div class="is-flex is-justify-content-flex-end is-align-items-center">
                    <p class="login-title">Already a partner?</p>
                    <button class="js-modal-trigger login-button" data-target="modal-js-example" @click="showModal">
                        <span class="icon is-small">
                            <i class="fas fa-user"></i>
                        </span>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="section-one is-flex is-justify-content-space-between is-align-items-center">
            <section
                class="container is-max-desktop is-flex is-justify-content-space-between is-align-items-center section-one-container">
                <section class="is-flex is-justify-content-center is-flex-direction-column section-container-one">
                    <h3 class="section-container-one-title">Register in <em>Sunday</em> and increase your client rate now!!!
                    </h3>
                    <p class="section-container-one-text">The register is free and take only 15 minutes</p>
                </section>
                <section class="is-flex is-justify-content-flex-end section-container-two">
                    <div class="box">
                        <h3 class="section-container-two-title">Create a new register</h3>
                        <p class="section-container-two-text">Create a partner account to begin</p>
                        <button class="section-container-two-button">
                            <router-link to="/ownercreate">Begin -></router-link>
                        </button>
                        <div
                            class="is-flex is-justify-space-between is-align-items-center is-flex-direction-row section-container-two-login">
                            <p>Already register?</p>
                            <a @click="showModal">Login</a>
                        </div>
                    </div>
                </section>
            </section>
        </section>
        <section class="section-two">
            <div class="is-flex is-justify-content-center is-align-items-center container is-max-desktop">
                <button class="button is-large px-6 button-contact-us">Contact Us</button>
            </div>

        </section>
    </main>

    <Footer></Footer>

    <div :class="['modal', activeClass]">
        <LoginModal :showModal="closeModal" />
    </div>    
</template>

<style scoped>
header {
    background-color: #003b95;
}

.header-content {
    height: 100px;
}

.logo {
    width: 100px;
}

.login-title {
    color: white;
    margin-right: 20px;
}

.login-button {
    color: white;
    border: 1px solid white;
    padding: 3px 30px 5px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
}

.section-one {
    background-color: #003b95;
    height: 50vh;
}

.section-one-container {
    max-height: 100%;
}

.section-container-one {
    width: 120%;
    color: white;
}

.section-container-one-title {
    font-size: 50px;
    line-height: 1.2;
}

em {
    color: rgb(247, 54, 93);
    font-weight: 800;
}

.section-container-one-text {
    font-size: 25px;
    margin-top: 20px;
}

.section-container-two {
    width: 80%;
}

.section-container-two-title {
    font-size: 25px;
    text-align: start;
    font-weight: bold;
    margin-bottom: 20px;
}

.section-container-two-text {
    font-size: 15px;
    text-align: start;
    margin-bottom: 5px;
}

.section-container-two-button {
    font-size: 18px;
    width: 100%;
    background-color: #003b95;
    border: none;
    padding: 8px 0;
    margin-bottom: 20px;
    cursor: pointer;
}

.section-container-two-button a {
    color: white;
}

.section-container-two-login p {
    font-size: 13px;
    margin-right: 5px;
}

.section-container-two-login a {
    font-size: 13px;
}

.section-two {
    height: 50%;
}

.button-contact-us {
    background-color: #003b95;
    color: white;
    border-radius: 6px;
}</style>
