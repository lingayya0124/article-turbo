import { useEffect, useState, useCallback } from "react";
import type Article from "../interfaces/article";
import ArticleCard from "./ArticleCard";
import qs from "qs";
import { STRAPI_URL } from "../lib/urlConfig";
import "../styles/global.css";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <>
      <div className=" mb-10 w-full">
        <div className="">
          <div className="w-full px-4 sm:px-6 lg:px-8 min-h-[400px]">
            {articles.length === 0 ? (
              <div className="w-full flex justify-center items-center py-8">
                <p className="text-gray-500">No articles found</p>
              </div>
            ) : (
              <div className="w-full grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {articles.map((article: Article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    className={""}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
