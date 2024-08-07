import React from "react";
import data from "./data";
import { useParams } from "react-router-dom";

import MarkdownRenderer from "./articleComponent/MarkdownRenderer";
import ActivityTop from "./articleComponent/ActivityTop";
import ArticleTop from "./articleComponent/ArticleTop";
import End from "./articleComponent/end";
export default function Article() {
  const { id } = useParams();
  console.log(data);
  const article = data.find((x) => x.id == id);
  if (!article) {
    return <div>Article Not Found</div>;
  }
  if (article.isArticle == true) {
    return (
      <div>
        <ArticleTop
          title={article.title}
          subtitle={article.subtitle}
          background={article.background}
          imgtitle={article.imgtitle}
        />
        <MarkdownRenderer file={article.markdown} />
        <End />
      </div>
    );
  } else {
    return (
      <div>
        <ActivityTop
          title={article.title}
          subtitle={article.subtitle}
          topImg={article.topImg}
        />
        <MarkdownRenderer file={article.markdown} />
        <End />
      </div>
    );
  }
}
