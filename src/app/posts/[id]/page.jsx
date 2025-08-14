import React from "react";

const getPostDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getPostDetails(params.id);
  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>Description: {body}</h2>
    </div>
  );
};

export default PostDetailsPage;
