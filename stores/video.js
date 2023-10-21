import axios from "axios";
import { listVideos, listDataOther } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";
import moment from "moment";
export const getListVideo = async (pageIndex = 1, pageSize = 6) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/video?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    const listVideosGet =
      response.data.data &&
      response.data.data.map((item, index) => {
        return {
          image: `${BUNNY_URL}/${item.thumb}`,
          title: item.title,
          timer: moment(item.createdTime).local("vi").format("llll"),
          slug: item.slug,
          content: item?.content,
          createdTime: item.createdTime,
        };
      });
    return listVideosGet ? listVideosGet : [];
  } catch (error) {
    return [];
  }
};
export const getMostWatchPosts = async () => {
  const response = await axios.get(
    `${API_URL}/api/post/getPostsByViews?limit=${5}`
  );
  const mostWatchPosts =
    response &&
    response.data &&
    response.data.map((item, index) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        timer: moment(item.createdTime).local("vi").format("llll"),
        slug: item.slug,
        // content: item.content,
      };
    });

  return mostWatchPosts;
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) { }
};