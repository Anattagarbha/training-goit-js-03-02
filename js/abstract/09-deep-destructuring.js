/* для деструктуризации свойств вложенных объектов используются 
те же принципы, что и в трёх предыдущих упражнениях */

"use strict";

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name: userName,
  tag,
  stats: { followers, views: userViews, likes: userLikes },
} = user;

console.log(userName, tag, followers, userViews, userLikes);
