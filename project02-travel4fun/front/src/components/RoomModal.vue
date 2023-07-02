<template>
    <template>
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box px-6">
                <h2 class="my-4 has-text-centered is-size-3">Quarto</h2>
                <form @submit.prevent="login">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="email" placeholder="Email" v-model="email">                            
                        </p>                        
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" v-model="password">                            
                        </p>                        
                    </div>
                    <div class="field mt-5 is-grouped is-grouped-centered">
                        <div class="control">
                            <button type="submit" class="button is-info px-6">Sign in</button>
                        </div>
                    </div>
                </form>
                <div>New account? <router-link to="/ownercreate">Sign up</router-link></div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
    </template>
</template>