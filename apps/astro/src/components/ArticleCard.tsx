import React from "react";
import type Article from "../interfaces/article";
import { STRAPI_URL } from "../lib/urlConfig";

function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <a href={`/blog/${article.slug}/`} className="block group no-underline">
      <article
        className={`flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md 
          transform transition-all duration-300 ease-in-out
          group-hover:shadow-xl group-hover:-translate-y-1 
          group-hover:border-orange-200 ${className}`}
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            alt={article.title}
            src={STRAPI_URL + article.image.url}
            className="w-full h-48 object-cover transform transition-transform duration-300 
              group-hover:scale-105"
          />
        </div>

        <div className="mt-5 justify-between px-4 pb-1 flex items-center gap-x-4 text-xs text-gray-500">
          <time dateTime={article.createdAt}>
            {new Date(article.createdAt).toLocaleDateString()}
          </time>
          <div className="flex gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-0.5 bg-orange-400 text-amber-50 rounded-full text-xs font-semibold
                  transform transition-transform duration-300 group-hover:scale-105"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-4 px-4 flex-grow">
          <h3
            className="text-xl font-semibold text-gray-900 transition-colors duration-300
            group-hover:text-orange-500"
          >
            {article.title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 line-clamp-3">
            {article.description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-x-4 px-4 pb-4">
          <div className="overflow-hidden rounded-full">
            <img
              alt={article.author.name}
              src={`${STRAPI_URL + article.author.image.url}`}
              className="w-10 h-10 object-cover transform transition-transform duration-300 
                group-hover:scale-110"
            />
          </div>
          <div className="text-sm">
            <p
              className="font-semibold text-gray-900 transition-colors duration-300
              group-hover:text-orange-500"
            >
              {article.author.name}
            </p>
            <p className="text-gray-500">{article.author.role || "Author"}</p>
          </div>
        </div>
      </article>
    </a>
  );
}

export default ArticleCard;
