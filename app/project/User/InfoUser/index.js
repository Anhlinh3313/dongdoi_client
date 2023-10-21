import React, { useContext, useMemo, useState } from 'react'
import Img from 'app/assets/images/user.png';
import styled from 'styled-components';
import { Avatar } from 'antd'
import { useRouter } from 'next/router';
import { API_URL } from '@function/wsCode';
import { followUser } from 'stores/authentication';
import { UserContext } from 'context/userContext';
import { unFollowUser } from 'stores/authentication';
import Notication from 'helpers/Notication'
function InfoUser({ user: dataUser, tipsWin }) {
  const [user, setUser] = useState(dataUser);
  const router = useRouter();
  const { user: userCurrent } = useContext(UserContext);
  const AvatarImg = useMemo(() => {
    let url = ''
    if (user?.avatar) {
      if (user.avatar.includes("http")) {
        url = user.avatar
      } else {
        url = `${API_URL}/images/` + user.avatar
      }
    } else {
      url = Img.src;
    }
    return url;
  }, [user])


  const isFollowed = useMemo(() => {
    return user.follower.find(i => i._id === userCurrent?._id);
  }, [user.follower, userCurrent?._id])
  const handleFollow = () => {
    if (!userCurrent) {
      Notication("Bạn chưa đăng nhập")
      return;
    }
    followUser(user._id, { userId: userCurrent?._id })
      .then((res) => {
        if (res.status === 'success') {
          setUser(res.data)
        }
      })
  }
  const handleUnFollow = () => {
    unFollowUser(user._id, { userId: userCurrent?._id })
      .then((res) => {
        if (res.status === 'success') {
          setUser(res.data)
        }
      })
  }
  return (
    <Wrapper className="bg-white rounded-md p-2 shadow-sm">
      <div className="text-center">
        <Avatar onClick={() => router.push(`/user/${user._id}`)} className='avatar' src={AvatarImg} />
        <div onClick={() => router.push(`/user/${user._id}`)} className="font-bold text-base cursor-pointer">{user.fullName}</div>
        <div className="text-gray-400 text-xs">
          Cấp độ: <span className="quantity">{user.level}</span>
        </div>
        <div className="text-gray-400 text-xs">
          Kinh nghiệm: <span className="quantity">{user.exp}/{10 * Math.pow(3, user.level - 1)}</span>
        </div>
        {user.description && <Description className="text-xs text-left">
          {user.description}
        </Description>}

        <Content className="mt-5 flex justify-between px-5">
          <div className="item-info">
            <span className="quanity">{user.numArticle}</span>
            <span className="title">Bài viết</span>
          </div>
          <div className="item-info">
            <span className="quanity">{user.like}</span>
            <span className="title">Thích</span>
          </div>
          <div className="item-info">
            <span className="quanity">{user.follower.length}</span>
            <span className="title">Lượt theo dõi</span>
          </div>
        </Content>
        <Content className="mt-5 flex justify-between px-5">
          <div className="item-info">
            <span className="quanity color2">{tipsWin.tips}</span>
            <span className="title">Tips</span>
          </div>
          <div className="item-info">
            <span className="quanity color2">{tipsWin.winTips / tipsWin.tips * 100}%</span>
            <span className="title">Tỉ lệ win</span>
          </div>
        </Content>
        {userCurrent?._id == user._id ? ""
          :
          isFollowed ?
            <Btn onClick={handleUnFollow} className="error display-center mt-3">
              Bỏ theo đõi
            </Btn>
            :
            <Btn onClick={handleFollow} className="display-center mt-3">
              Theo dõi
            </Btn>
        }
      </div>
    </Wrapper>
  )
}

export default InfoUser;

const Wrapper = styled.div`
  .avatar {
    width: 56px;
    height: 56px;
  }
`;

const Description = styled.div`
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    margin-top: 5px;
    color: gray;
`;
const Content = styled.div`
  .item-info {
    display: flex;
    flex-direction: column;

    .quanity {
      font-size: 20px;
      font-weight: bold;
      color: #52a22d;
      line-height: 16px;
      &.color2 {
        color: #ff7f09;
      }
    }
    .title {
      color: #999;
      font-size: 12px;
    }
  }
`;

const Btn = styled.div`
    border: 1px solid #52a22d;
    border-radius: 4px;
    color: #52a22d;
    cursor: pointer;
    font-size: 12px;
    background: #f7f7f7;
    font-weight: 500;
    background: -o-linear-gradient(top, #ffffff, #f7f7f7);
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f7f7f7));
    background: linear-gradient(to bottom, #ffffff, #f7f7f7);
    -webkit-box-shadow: 2px 2px 0 rgb(0 0 0 / 6%);
    box-shadow: 2px 2px 0 rgb(0 0 0 / 6%);
    line-height: 26px;
    height: 27px;
    &:hover {
      background: #f60;
      color: white !important;
    }
    &.error {
      border: 1px solid #f60;
      color: #f60;
    }
`;