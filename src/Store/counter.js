const countModule = {
    state() {
        return {
            counter: 7,
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
}
export default countModule;