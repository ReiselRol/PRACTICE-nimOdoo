import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'AppGlobals',
  initialState: {
    UI: {
      isOpened: false,
      appName: "",
      isLogged: false,
      isUserInfoOppened: false,
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
    handleUserInfo: (state) => { state.UI.isUserInfoOppened = !state.UI.isUserInfoOppened },
    closeUserInfo: (state) => { state.UI.isUserInfoOppened = false },
    closeAll: (state) => { state.UI.isUserInfoOppened = state.UI.isOpened = false},

    //User
    setUser: (state, action) => { state.User = JSON.parse(action.payload)},
    handleLogin: (state, action) => { state.User = action.payload},
    handleLogOut: (state) => {
      state.User = null
      state.UI.isLogged = false
    }
  },
})

export const { 
  handleLateralBarPosition,
  setAppName,
  setIsLoged,
  setUser,
  handleUserInfo,
  closeUserInfo,
  handleLogOut,
  handleLogin,
  closeAll
} = appSlice.actions
export default appSlice.reducer