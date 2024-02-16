import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice.js'

export default configureStore({
    reducer: {
        counter: counterSlice
    },

})