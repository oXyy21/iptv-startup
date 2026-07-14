import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog & News | IPTV Startup",
  description: "Stay up to date with the latest IPTV news, guides, and updates.",
}

export default function BlogIndexPage() {
  const slugs = getAllPostSlugs("blog")
  
  // Fetch full post data and sort by date (descending)
  const posts = slugs
    .map((slug) => ({ slug, ...getPostBySlug("blog", slug) }))
    .filter((post) => post.meta) // ensure valid post
    .sort((a, b) => new Date(b.meta.date || 0).getTime() - new Date(a.meta.date || 0).getTime())

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-24 px-6 flex-1">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">Our <span className="text-lime-500">Blog</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Latest news, streaming guides, and updates from the team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-lime-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(132,204,22,0.2)]">
              {post.meta.image ? (
                <div className="w-full h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={post.meta.image} 
                    alt={post.meta.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
                  />
                </div>
              ) : (
                <div className="w-full h-56 bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-500 font-medium">No Image</span>
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-lime-500 text-sm font-bold tracking-wider uppercase mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{post.meta.date || 'Unknown Date'}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-lime-400 transition-colors leading-tight">{post.meta.title}</h2>
                <p className="text-slate-400 text-base mb-8 flex-1 line-clamp-3">
                  {post.meta.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-lime-500 transition-colors mt-auto">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-24 border border-slate-800 rounded-3xl bg-slate-900/50">
            <h2 className="text-2xl font-bold mb-2">No posts yet</h2>
            <p className="text-slate-400">Check back later for new articles and updates.</p>
          </div>
        )}
      </div>
    </div>
  )
}
