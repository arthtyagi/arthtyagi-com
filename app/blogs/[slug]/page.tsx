export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>{params.slug}</p>
    </div>
  );
}
