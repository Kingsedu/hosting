interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // This would typically fetch the post content from your CMS or database
  const post = {
    title: "Sample Blog Post",
    content: "This is the full content of the blog post...",
    date: "2024-03-20",
    author: "John Doe",
    category: "Company Updates",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="text-gray-500 mb-2">
            {post.date} • {post.category}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600">By {post.author}</div>
        </header>
        <div className="prose prose-lg">{post.content}</div>
      </article>
    </div>
  );
}
