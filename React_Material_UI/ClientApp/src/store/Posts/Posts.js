const requestPostsType = 'REQUEST_POSTS';
const initialState = { posts: [], isLoading: false };

export const actionCreators = {
    requestPosts: startIndex => async(dispatch) => {

    const url = `api/Post/GetPosts`;
    const response = await fetch(url);
    const posts = await response.json();
        dispatch({ type: requestPostsType, startIndex, posts });
}
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestPostsType)
        return {
            ...state,
            startDateIndex: action.startIndex,
            posts: action.posts,
            isLoading: false
        };

    return state;
};
