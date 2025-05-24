import Link from "next/link";

const blogCategories = [
  {
    title: "Company Updates",
    description:
      "Announcements, milestones, team expansions, new features, etc.",
    slug: "company-updates",
    icon: "📢",
  },
  {
    title: "How-To Guides",
    description: "Step-by-step help on problems your audience likely faces.",
    slug: "how-to-guides",
    icon: "📚",
  },
  {
    title: "Industry News",
    description: "Your take on recent developments in your industry.",
    slug: "industry-news",
    icon: "📰",
  },
  {
    title: "Behind the Scenes",
    description: "Show the process behind your product or content creation.",
    slug: "behind-the-scenes",
    icon: "🎬",
  },
  {
    title: "Case Studies",
    description:
      "Highlight how users have succeeded with your product or service.",
    slug: "case-studies",
    icon: "📊",
  },
  {
    title: "Tips & Tricks",
    description: "Share short, practical insights.",
    slug: "tips-tricks",
    icon: "💡",
  },
  {
    title: "FAQs",
    description: "Turn common customer questions into detailed posts.",
    slug: "faqs",
    icon: "❓",
  },
  {
    title: "Interviews",
    description: "Talk with experts, clients, or team members.",
    slug: "interviews",
    icon: "🎤",
  },
  {
    title: "Opinion Pieces",
    description: "Share your perspective on trends, tools, or methodologies.",
    slug: "opinion-pieces",
    icon: "💭",
  },
  {
    title: "Event Summaries",
    description: "Post about events youve hosted or attended",
    slug: "event-summaries",
    icon: "🎪",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogCategories.map((category) => (
          <Link
            href={`/#`}
            // href={`/blog/${category.slug}`}
            key={category.slug}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
