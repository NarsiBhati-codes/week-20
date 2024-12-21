import axios from "axios";

type BlogPageProps = {
  params: Promise<{
    blogId: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = await params;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`
    );
    const data = response.data;

    return (
      <div>
        <h1>Blog Page: {data.id}</h1>
        <h2>Title: {data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return <div>Error loading blog post. Please try again later.</div>;
  }
}
