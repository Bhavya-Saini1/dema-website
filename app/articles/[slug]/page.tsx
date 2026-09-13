import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, type ArticleBlock } from "@/lib/articles";

type ArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticle(params.slug);
  if (!article) {
    return { title: "Article" };
  }
  return {
    title: article.title,
    description: article.dek,
    openGraph: {
      title: article.title,
      description: article.dek,
      type: "article",
      publishedTime: article.date,
      ...(article.coverImage
        ? {
            images: [
              {
                url: article.coverImage.src,
                alt: article.coverImage.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      ...(article.coverImage ? { images: [article.coverImage.src] } : {}),
    },
  };
}

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-10 space-y-7 border-t border-navy/20 pt-10">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "h2") {
          return (
            <h2
              key={key}
              className="scroll-mt-24 pt-6 font-sans text-2xl font-bold leading-snug tracking-tight text-navy first:pt-0 md:text-[1.75rem]"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={key}
              className="pt-2 font-sans text-lg font-bold leading-snug tracking-tight text-navy md:text-xl"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={key}
              className="border-l-2 border-red pl-5 text-[1.05rem] font-light leading-8 text-navy"
            >
              {block.text}
            </blockquote>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={key}
              className="list-disc space-y-3 pl-5 text-[1.05rem] font-light leading-8 text-navy"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={key} className="my-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-navy/20 bg-neutral-100">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42rem"
                />
              </div>
              {block.caption ? (
                <figcaption className="mt-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-500">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        return (
          <p
            key={key}
            className="text-[1.05rem] font-light leading-8 text-navy"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);
  if (!article) {
    notFound();
  }

  const byline = article.authors.join(", ");

  return (
    <main>
      <article className="px-6 py-14 md:px-12 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#articles"
            className="font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:text-red"
          >
            Articles
          </Link>

          <p className="mt-8 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red">
            {article.dateLabel} · {article.topic}
          </p>

          <h1 className="mt-4 font-sans text-4xl font-bold leading-[1.1] tracking-tight text-navy md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            By {byline}
          </p>

          <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600">
            {article.dek}
          </p>

          {article.coverImage ? (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden border border-navy/20 bg-neutral-100">
              <Image
                src={article.coverImage.src}
                alt={article.coverImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48rem"
              />
            </div>
          ) : null}

          <ArticleBody blocks={article.body} />

          <p className="mt-14 font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            Source:{" "}
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy transition-colors duration-150 hover:text-red"
            >
              DEMALOGUE
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}
