import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "1",
		title: "Learning Redux Toolkit",
		content: "I've heard good things.",
	},
	{
		id: "2",
		title: "Slices...",
		content: "The more I say slice, the more I want pizza.",
	},
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducer: {},
});

export default postsSlice.reducer; // reducer for posts
export const {} = postsSlice.actions; // posts actions
export const selectAllPosts = (state) => state.posts; // selector for useSelector hook
