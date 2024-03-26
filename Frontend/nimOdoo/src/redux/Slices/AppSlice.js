import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'AppGlobals',
  initialState: {
    UI: {
      isOpened: false,
      appName: "",
      isLogged: false,
    },
    User: {
      ID: "",
      admin: false,
      email: "",
      password: "",
      name: "",
      surname:"",
    }
  },
  reducers: {

    // Navbar 
    handleLateralBarPosition: (state) => { state.UI.isOpened = !state.UI.isOpened },
    setAppName: (state, action) => { state.UI.appName = "~    " + action.payload},
    setIsLoged: (state, action) => { state.UI.isLogged = action.payload },

    //User
    setUser: (state, action) => { state.User = action.payload }
  },
})

export const { 
  handleLateralBarPosition,
  setAppName,
  setIsLoged,
  setUser
} = appSlice.actions
export default appSlice.reducer