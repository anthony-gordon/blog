export function updatePostIndex(postindex) {
  console.log("post-action", postindex);
  return {
    type: "UPDATE_POST_INDEX",
    postindex
  };
}
