import TipTap from "../TipTap";
import { useState } from "react";
import ShowPost from "./ShowPost";

const NewPost = () => {
  const [htmlContent, setHtmlContent] = useState(" ");

  const handleEditorContentSave = (html) => {
    setHtmlContent(html);
  };
  return (
    <>
      <h1 id="title">TipTap Text Editor</h1>
      <TipTap onEditorContentSave={handleEditorContentSave} />
      <hr />
      <h2 id="output">Output</h2>
      <ShowPost Content={htmlContent} />
    </>
  );
};

export default NewPost;
