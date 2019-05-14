import Axios from "axios";

const url = "https://nata-nc-news.herokuapp.com/api";

export const getArticles = query => {
  return Axios.get(`${url}/articles`, { params: query }).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
};

export const getComments = article_id => {
  return Axios.get(`${url}/articles/${article_id}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    }
  );
};

export const fetchArticle = id => {
  return Axios.get(`${url}/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchUser = userName => {
  return Axios.get(`${url}/users/${userName}`).then(({ data: { user } }) => {
    return user;
  });
};

export const submitArticle = article => {
  return Axios.post(`${url}/articles/`, article).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};
