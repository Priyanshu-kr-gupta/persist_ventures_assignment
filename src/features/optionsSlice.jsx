import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name:"options",
    initialState:{
        category:"general",
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category=action.payload
        },
    },
});
export const {setCategory} = optionsSlice.actions
export default optionsSlice.reducer