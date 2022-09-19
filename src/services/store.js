//import {createStore} from 'redux'
//here we are importing toolkit 
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

//const store = createStore(rootReducer)

const store = configureStore({reducer:rootReducer})


export default store;