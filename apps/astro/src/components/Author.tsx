import type { ArticleAuthor } from "../interfaces/article";

interface ArticleAuthorProps {
  author: ArticleAuthor;
  articlePublishedDate: string;
}
export default function ArticleAuthor({
  author,
  articlePublishedDate,
}: ArticleAuthorProps) {
  return (
    <div className="border-t">
      <div className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <image
            src={import.meta.env.STRAPI_URL + author.image.url}
            alt={author.name}
            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
            width={96}
            height={96}
          />
          <div className="flex-1 space-y-4">
            <div className="space-y-1 mt-3 text-left">
              <h2 className="text-xl font-medium">{author.name}</h2>
              <p className="text-sm text-gray-500">{author.email}</p>
              <p className="text-sm text-gray-500 ">
                <span className="font-medium text-gray-700">
                  Published on:{" "}
                </span>
                {new Date(articlePublishedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
