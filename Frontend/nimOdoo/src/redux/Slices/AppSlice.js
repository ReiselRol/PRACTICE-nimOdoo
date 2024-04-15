import { createSlice } from '@reduxjs/toolkit'
import { useMutation } from '@apollo/client'

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
    },
    Modules: {
      Actived: ["user"]
    }
  },
  reducers: {

    // Navbar 
    handleLateralBarPosition: (state) => { state.UI.isOpened = !state.UI.isOpened },
    handleOpenLateralBarPosition: (state) => { state.UI.isOpened = true},
    setAppName: (state, action) => { state.UI.appName = "~    " + action.payload},
    setIsLoged: (state, action) => { state.UI.isLogged = action.payload },
    handleUserInfo: (state) => { state.UI.isUserInfoOppened = !state.UI.isUserInfoOppened },
    closeUserInfo: (state) => { state.UI.isUserInfoOppened = false},
    closeAll: (state) => { state.UI.isUserInfoOppened = state.UI.isOpened = false},

    //User
    setUser: (state, action) => { state.User = JSON.parse(action.payload)},
    handleLogin: (state, action) => { state.User = action.payload},
    handleLogOut: (state) => {
      localStorage.removeItem('user')
      state.User = null
      state.UI.isLogged = false
    },

    //Modules
    setAllModules: (state, action) => { state.Modules.Actived = action.payload },
    setNewModul: (state, action) => {
      var actuallConfig = [...state.Modules.Actived]
      if (!actuallConfig.includes(action.payload)) actuallConfig.push(action.payload)
      state.Modules.Actived = actuallConfig
    },
    deleteModul: (state,action) => { 
      var actuallConfig = [...state.Modules.Actived]
      if (actuallConfig.includes(action.payload)) actuallConfig = actuallConfig.filter(item => item !== action.payload)
      state.Modules.Actived = actuallConfig
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
  closeAll,
  handleOpenLateralBarPosition,
  setNewModul,
  deleteModul,
  setAllModules
} = appSlice.actions
export default appSlice.reducer