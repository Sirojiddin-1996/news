import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/useHttp"

const newsAdapter = createEntityAdapter()

// const initialState = {
//     news: [],
//     newsLoadingStatus: "sam"
// };

const initialState = newsAdapter.getInitialState({
    newsLoadingStatus: "sam"
});
console.log(initialState);

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async () => {
        const { request } = useHttp()
        return await request("http://localhost:3001/news")
    }
)

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        newsCreated: (state, action) => { newsAdapter.addOne(state, action.payload) },
        newsDeleted: (state, action) => { newsAdapter.removeOne(state, action.payload) }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, state => { state.newsLoadingStatus = 'loading' })
            .addCase(fetchNews.fulfilled, (state, action) => {
                newsAdapter.setAll(state, action.payload)
                state.newsLoadingStatus = 'sam';
            })
            .addCase(fetchNews.rejected, state => { state.newsLoadingStatus = 'error' })
            .addDefaultCase(() => { })

    }
})

const { actions, reducer } = newsSlice;

const { selectAll } = newsAdapter.getSelectors(state => state.news)
export const filteredNewsSelector = createSelector(
    (state) => state.filter.activeFilter,
    selectAll,
    (filter, news) => {
        if (filter === 'all') {
            return news
        } else {
            return news.filter(s => s.category === filter)
        }
    }
)

export default reducer;

export const { newsFetching, newsFetched, newsFetchingError, newsCreated, newsDeleted } = actions;