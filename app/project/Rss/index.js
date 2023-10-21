import fs from "fs";
import { Feed } from "feed";
import { SITE_URL } from "@function/wsCode";
import { getListNewsNew } from "../../../stores/tinmoinhat";
const generateRssFeed = async () => {
  const posts = await getListNewsNew(10, 1);
  const date = new Date();
  const author = {
    name: "The thao 789",
    email: "thethao789@gmail.com",
  };
  const feed = new Feed({
    title: "Thể thao 789",
    description: "",
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/logo.svg`,
    favicon: `${SITE_URL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, The thao 789`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${SITE_URL}/rss/feed.xml`,
      json: `${SITE_URL}/rss/feed.json`,
      atom: `${SITE_URL}/rss/atom.xml`,
    },
    author,
  });
  posts && posts.forEach((post) => {
    const url = `${SITE_URL}/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.createdTime),
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
export default generateRssFeed;
