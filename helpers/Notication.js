import { notification } from "antd";

export default function Notication (title) {
  notification["error"]({
    message: title? title: "Có lỗi xảy ra vui lòng thử lại sau",
    duration: 2
  })
}
