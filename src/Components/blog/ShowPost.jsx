import parse from "html-react-parser";

const ShowPost = ({ Content }) => {
  return <div class="Output">{parse(Content)}</div>;
};

export default ShowPost;
