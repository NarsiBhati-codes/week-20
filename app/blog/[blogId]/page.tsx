import axios from "axios";

export default async function ({
  params,
}: {
  params: {
    blogId: string;
  };
}) {
  const postId = params.blogId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.data;
  console.log(data);

  return (
    <div>
      <div>blog page : {data.id}</div>
      <div>title : {data.title}</div>
    </div>
  );
}
