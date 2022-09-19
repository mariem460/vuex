import {createStore} from 'vuex';
import authModule from './admin';
import countModule from './counter';

const Store = createStore({
    modules:{
     admin: authModule,
     counter: countModule
    }
 })

 export default Store;