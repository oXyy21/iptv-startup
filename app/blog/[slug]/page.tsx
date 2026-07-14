import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug("blog", slug)
  if (!post) return { title: "Not Found" }
  return {
    title: `${post.meta.title} | IPTV Startup`,
    description: post.meta.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug("blog", slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-slate-950 pb-24 flex-1 flex flex-col">
      {/* Hero Image Section */}
      {post.meta.image && (
        <div className="w-full h-[40vh] md:h-[60vh] relative flex-shrink-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10"></div> {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
          <img src={post.meta.image} alt={post.meta.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className={`container mx-auto px-6 max-w-4xl relative z-20 flex-1 ${post.meta.image ? '-mt-32' : 'pt-32'}`}>
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-lime-500 hover:text-lime-400 font-medium mb-8 transition-colors bg-slate-950/80 px-4 py-2 rounded-full backdrop-blur border border-slate-800">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight">{post.meta.title}</h1>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            {post.meta.date && (
              <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-lime-500" />
                {post.meta.date}
              </span>
            )}
          </div>
        </header>
        
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:text-white prose-a:text-lime-500 hover:prose-a:text-lime-400 prose-img:rounded-2xl pb-16 border-b border-slate-800">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  )
}
