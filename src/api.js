import Axios from "axios";

const url = "https://nata-nc-news.herokuapp.com/api";

export const getArticles = query => {
  return Axios.get(`${url}/articles`, { params: query }).then(({ data }) => {
    return data;
  });
};

export const getComments = article_id => {
  return Axios.get(`${url}/articles/${article_id}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    }
  );
};

export const getTopics = () => {
  return Axios.get(`${url}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getAuthors = () => {
  return Axios.get(`${url}/users`).then(({ data: { users } }) => {
    return users;
  });
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

export const submitTopic = topic => {
  return Axios.post(`${url}/topics/`, topic).then(({ data: { topic } }) => {
    return topic;
  });
};

export const submitComment = (id, comment) => {
  return Axios.post(`${url}/articles/${id}/comments`, comment).then(
    ({ data: { comment } }) => {
      return comment;
    }
  );
};

export const submitUser = user => {
  return Axios.post(`${url}/users`, user).then(({ data: { user } }) => {
    return user;
  });
};

export const patchArticle = (id, voteDirection) => {
  return Axios.patch(`${url}/articles/${id}`, {
    inc_votes: voteDirection
  }).then(({ data: { article } }) => {
    return article;
  });
};

export const patchComment = (id, voteDirection) => {
  return Axios.patch(`${url}/comments/${id}`, {
    inc_votes: voteDirection
  }).then(({ data: { comment } }) => {
    return comment;
  });
};

export const deleteComment = id => {
  return Axios.delete(`${url}/comments/${id}`).then(({ data: { comment } }) => {
    return comment;
  });
};

export const deleteArticle = id => {
  return Axios.delete(`${url}/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};
