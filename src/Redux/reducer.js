export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return posts.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    case "LIKE":
      return posts.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    case "DELETE":
      return posts.filter((item) => item._id !== action.payload);

    default:
      return posts;
  }
};
