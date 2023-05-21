import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/AuthSlice"
import userReducer from "../feature/user/UserSlice"
import walletReducer from "../feature/wallet/WalletSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    wallet: walletReducer,
  },
});
