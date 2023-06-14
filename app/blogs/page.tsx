import Link from "next/link";

// interface Post {
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   slug: string;
//   tags: string[];
// }

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Blogs</h1>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Link
          className="text-blue-600 hover:text-blue-800"
          href="/blogs/first-post"
        >
          First Post
        </Link>
      </div>
    </div>
  );
}
