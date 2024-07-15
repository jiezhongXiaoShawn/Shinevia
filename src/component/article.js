import React from "react";
import data from "./data";
import { useParams } from "react-router-dom";

import MarkdownRenderer from "./articleComponent/MarkdownRenderer";
import Top from "./articleComponent/top";
import End from "./articleComponent/end";
export default function Article() {
  const { id } = useParams();
  console.log(data);
  const article = data.find((x) => x.id == id);
  if (!article) {
    return <div>Article Not Found</div>;
  }

  return (
    <div>
      <Top
        title={article.title}
        subtitle={article.subtitle}
        topImg={article.topImg}
      />
      <MarkdownRenderer file={article.markdown} />
      <End />
    </div>
  );
}
