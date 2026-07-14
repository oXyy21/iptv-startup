import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug("use-cases", slug)
  if (!post) return { title: "Not Found" }
  return {
    title: post.meta.title,
    description: post.meta.description,
  }
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug("use-cases", slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-invert lg:prose-xl mx-auto py-12 px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.meta.title}</h1>
      </header>
      <div className="mdx-content">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
