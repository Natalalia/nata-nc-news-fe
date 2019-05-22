import { createPreview } from "../components/ArticleCard";

describe("createPreview", () => {
  it("returns 25 words of a given article", () => {
    const article =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum rutrum urna vulputate eleifend. Proin nunc augue, euismod a volutpat nec, faucibus et nisi. Praesent consequat interdum faucibus. Quisque tempus.";
    const brief =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum rutrum urna vulputate eleifend. Proin nunc augue, euismod a volutpat nec, faucibus et nisi. Praesent";
    expect(createPreview(article)).toEqual(brief);
  });
});
