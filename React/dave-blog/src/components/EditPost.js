import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EditPost({
	posts,
	handleEdit,
	editBody,
	setEditBody,
	editTitle,
	setEditTitle,
}) {
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	useEffect(() => {
		if (post) {
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	}, [post, setEditTitle, setEditBody]);
	return (
		<main className="NewPost">
			{editTitle && (
				<>
					<h2>New Post</h2>
					<form
						onSubmit={(e) => e.preventDefault()}
						className="newPostForm"
					>
						<label htmlFor="postTitle">Title : </label>
						<input
							type="text"
							id="postTitle"
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
							required
						/>
						<label htmlFor="postBody">Post : </label>
						<textarea
							id="postBody"
							value={editBody}
							onChange={(e) => setEditBody(e.target.value)}
							required
						/>
						<button onClick={() => handleEdit(post.id)}>Submit</button>
					</form>
				</>
			)}
			{!editTitle && (
				<>
					<h2>Post Not Found</h2>
					<p>Well, that's disappointing.</p>
					<p>
						<Link to="/">Back to our Homepage</Link>
					</p>
				</>
			)}
		</main>
	);
}

export default EditPost;
