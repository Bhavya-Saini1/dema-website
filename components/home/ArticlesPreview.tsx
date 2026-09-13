import Image from "next/image";
import Link from "next/link";
import { getFeaturedArticle, getIndexArticles } from "@/lib/articles";

export default function ArticlesPreview() {
  const featured = getFeaturedArticle();
  const index = getIndexArticles();

  return (
    <section id="articles" className="px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-sans text-5xl font-light leading-[0.9] tracking-tight text-navy md:text-6xl lg:text-7xl">
            Articles
          </h2>
          <a
            href="https://dema-logue.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:text-red"
          >
            Subscribe on DEMALOGUE
          </a>
        </div>

        <article className="mt-12 grid grid-cols-1 gap-8 border-t border-navy/20 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-red">
              {featured.dateLabel} · {featured.topic}
            </p>
            <h3 className="mt-4">
              <Link
                href={`/articles/${featured.slug}`}
                className="font-sans text-3xl font-bold leading-[1.1] tracking-tight text-navy transition-colors duration-150 hover:text-red md:text-4xl"
              >
                {featured.title}
              </Link>
            </h3>
            <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-500">
              By {featured.authors.join(", ")}
            </p>
            <p className="mt-5 text-base font-light leading-relaxed text-navy">
              {featured.dek}
            </p>
            <Link
              href={`/articles/${featured.slug}`}
              className="mt-6 inline-block font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:text-red"
            >
              Read article
            </Link>
          </div>

          {featured.coverImage ? (
            <Link
              href={`/articles/${featured.slug}`}
              className="relative block aspect-[16/10] w-full overflow-hidden border border-navy/20 bg-neutral-100 lg:col-span-7"
            >
              <Image
                src={featured.coverImage.src}
                alt={featured.coverImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority
              />
            </Link>
          ) : null}
        </article>

        <ol className="mt-4">
          {index.map((article) => (
            <li key={article.slug} className="border-t border-navy/20">
              <Link
                href={`/articles/${article.slug}`}
                className="group grid grid-cols-[5.5rem_1fr] items-start gap-x-5 gap-y-2 py-6 md:grid-cols-[7rem_minmax(0,1fr)_auto] md:gap-x-8"
              >
                {article.coverImage ? (
                  <span className="relative col-start-1 row-span-2 aspect-square w-full overflow-hidden border border-navy/20 bg-neutral-100 md:row-span-1 md:self-center">
                    <Image
                      src={article.coverImage.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </span>
                ) : (
                  <span className="col-start-1 row-span-2 md:row-span-1" />
                )}

                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <time
                      dateTime={article.date}
                      className="font-mono text-[0.65rem] font-bold tracking-[0.14em] text-neutral-500"
                    >
                      {article.dateLabel}
                    </time>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-red md:hidden">
                      {article.topic}
                    </span>
                  </span>
                  <span className="mt-2 block font-sans text-lg font-bold leading-snug text-navy transition-colors duration-150 group-hover:text-red md:text-xl">
                    {article.title}
                  </span>
                  <span className="mt-2 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-500">
                    By {article.authors.join(", ")}
                  </span>
                </span>

                <span className="hidden self-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-red md:block">
                  {article.topic}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
