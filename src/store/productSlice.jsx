import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});
const productSlice = createSlice(
    {
        name: 'product',
        initialState: {
            data: [],
            status: STATUSES.IDLE,
            
        },
        //reducers are for simple thunk
        reducers: {
            // setProducts(state, action) { 
            //     //Redux Principle
            //     //return [...state,action.payload]

            //     //This one is directory allowed in CreateSlice()
            //     //state.push(action.payload);

            //     //DONT EVER DO THIS HERE
            //     //const result = await fetch('https://fakestoreapi.com/products');
            //     state.data = action.payload;

            // },
            //  setStatus(state, action) {
            // state.status = action.payload;
            // },
        },
        extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
    }
);
export const { setProducts,setStatus } = productSlice.actions;
export default productSlice.reducer;



//Thunks Middleware (Returns a New function from inside)



//Latest Redux Tool Kit Function
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
    
});


// //Thunk is basically a Normal Function (More specifally for Error handling manual Version)

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//        // const prodId = getState().data;
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }