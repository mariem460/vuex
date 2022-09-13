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
            counter: 7,
            prizes:['cola', 'dog', 'flower', 'table'],
            auth: false
        
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
        },
        setAuth(state, payload){
            state.auth = payload.value;
        }
    },
    getters:{
        getCount(state) {
            return state.counter
        },
        getPrize(state){
            let prize = '';
          
            for(let step=0 ;step<state.counter; step++){
               prize = state.prizes[Math.floor(Math.random()*state.prizes.length)];
            }
            return prize;

        }
        
    },
    actions:{
        authUser(context){
            console.log('context', context)
            setTimeout(()=> {
                context.commit('setAuth', {value: true})

            },5000)
        },
        signout(context, payload){
           
                context.commit('setAuth', {value: payload})



        }

    }
})

app.use(store)
app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(Router);
app.mount('#app')
