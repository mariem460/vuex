const authModule = {
    state() {
        return {
            auth: false
        
        }
    },

    mutations:{
        setAuth(state, payload){
            state.auth = payload.value;
        }
    },
    getters:{
        isAuth(state){
            return state.auth

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
}
export default authModule;