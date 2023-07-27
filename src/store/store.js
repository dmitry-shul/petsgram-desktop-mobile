import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import petsSlice from "../features/pets/petsSlice"
import usersSlice from "../features/users/usersSlice"
import notificationSlice from "../features/notification/notificationSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    pets: petsSlice,
    users: usersSlice,
    notification: notificationSlice,
  },
})