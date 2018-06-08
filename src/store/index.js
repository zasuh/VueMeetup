import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://i2.wp.com/www.worldwanderista.com/wp-content/uploads/2018/01/One-day-in-Ljubljana-Slovenia.jpg?resize=715%2C400&ssl=1',
        id: 'blablabla',
        title: 'Meetup in Ljubljana',
        date: '2018-07-17'},
      { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f8/68/3d/big-bus-paris-hop-on.jpg',
        id: 'blablabla2',
        title: 'Meetup in Paris',
        date: '2018-07-18',
        location: 'Paris'},
    ],
    user: {
      id: 'haihwbfiawu',
      registeredMeetups: ['blablabla']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'agrgreer'
      }
      // Reach out to Firebase to store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) =>{
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})