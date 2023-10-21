import axios from "axios";
import { listNewsNew, listDataOther } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";

export const getListNewsNew = async (pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getPaging?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    const listNewsNew = response.data.data?.map((item, index) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        id: item._id,
        createdTime: item.createdTime,
        description: item.description,
        slug: item.slug,
        // content: item.content,
      };
    });

    return listNewsNew;
  } catch (error) {
    return [];
  }
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) {}
};

// {
//   image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
//   title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
//   description:
//     "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
// }
