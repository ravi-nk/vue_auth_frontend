
import axios from 'axios';
const state = {
    user: null,
    // posts: null,
    users:null,
};
const getters = {
    isAuthenticated: state => !!state.user,    
    // StatePosts: state => state.posts,
    StateUser: state => state.user,
    StateUsers: state=>state.users
};
const actions = {
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('email', form.email)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
      },
      async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit('setUser', User.get('email'))
      },
      async getUsers({commit}){
        let response = await axios.get("users");
        commit("setUsers",response.data);
      },
   
      async LogOut({commit}){
        let user = null
        commit('logout', user)
      },
};
const mutations = {
    setUser(state, email){
        state.user = email
    },
    setPosts(state, posts){
        state.posts = posts
    },
    setUsers(state, users){
    state.users = users
    },
    logout(state,user){
        state.user = user
        // state.posts = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
