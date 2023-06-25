import { getbanner } from '@/api/banner';
export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
       
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchbanner(ctx) {
            const res = await getbanner()
            ctx.commit("setData",res)
        }
    }
}