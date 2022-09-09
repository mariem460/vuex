import { createApp } from 'vue';
import App from './App.vue';
import {createStore} from 'vuex';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Router from './routes';
const app =  createApp(App);
const store = createStore({
    state() {
        return {
            counter: 7
        }
    },
    mutations:{
        add(state, payload) {
            if(payload){
                state.counter = state.counter + payload.valyeToadd
            }else{
                state.counter++

            }

        },
        sub(state, payload) {
            if(payload){
                state.counter= state.counter - payload.valyeToadd
            }else{
                state.counter--

            }
        }
    }
})

app.use(store)
app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(Router);
app.mount('#app')
