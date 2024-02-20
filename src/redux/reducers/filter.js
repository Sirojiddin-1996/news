const initialState = {
    filters: [],
    filtersLoadingStatus: 'sam',
    activeFilter: 'all'
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case "FILTERS_FETCHING":
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case "FILTERS_FETCHED":
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'sam'
            }
        case "FILTERS_FETCHING_ERROR":
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case "ACTIVE_FILTER_CHANGED":
            return {
                ...state,
                activeFilter: action.payload,
            }
        default:
            return state
    }
}
export default filter