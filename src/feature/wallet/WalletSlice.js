import { createSlice } from "@reduxjs/toolkit";
import { getUserWallet } from "./WalletActions";

const initialState = {
    loading: false,
    balance: [], // for wallet array
    error: null,
    success: false, // for monitoring the registration process.
  }

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers:{
        [getUserWallet.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.success = true
            state.balance = payload
        },
        [getUserWallet.pending]: (state, {payload}) => {
            state.loading = true
        },
        [getUserWallet.rejected]: (state, {payload}) => {
            state.loading = false
            state.balance = payload
        }
    }
})

export default walletSlice.reducer