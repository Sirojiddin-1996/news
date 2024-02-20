// import { createReducer } from "@reduxjs/toolkit";
// import { newsCreated, newsDeleted, newsFetched, newsFetching, newsFetchingError } from "../actions";

// const initialState = {
//     news: [],
//     newsLoadingStatus: "sam"
// };

// const news = createReducer(initialState, builder => {
//     builder
//         .addCase(newsFetching, (state) => { state.newsLoadingStatus = 'loading' })
//         .addCase(newsFetched, (state, action) => {
//             state.news = action.payload;
//             state.newsLoadingStatus = 'sam';
//         })
//         .addCase(newsFetchingError, state => { state.newsLoadingStatus = 'error' })
//         .addCase(newsCreated, (state, action) => { state.news.push(action.payload) })
//         .addCase(newsDeleted, (state, action) => { state.news = state.news.filter(s => s.id !== action.payload) })
//         .addDefaultCase(() => { })
// })

// export default news