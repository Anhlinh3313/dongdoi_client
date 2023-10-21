import { scrollView, SizeOfElement } from "@function";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import { API_URL } from "@function/wsCode";
import { useRouter } from 'next/router';
import axios from 'axios';

const MenuPC = () => {
  const [menuScroll, setMenuScroll] = useState(false);
  const [menuBottom, setMenuBottom] = useState([]);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [totalMoney, setTotalMoney] = useState(0);

  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });

  useEffect(() => {
    const fetchDataDonate = async () => {
      try {
        const [response] = await Promise.all([
          axios.get(`${API_URL}/api/transaction/getAll`),
        ]);
        const data = response?.data;
        let inMoney = 0;
        let outMoney = 0;
        data?.map(item => {
          item.type === "in" ? inMoney += parseInt(item.money) : outMoney += parseInt(item.money)
        });
        const calculatedTotalMoney = inMoney - outMoney;
        setTotalMoney(calculatedTotalMoney);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataDonate();
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let { elementBottom } = SizeOfElement(document.body);
      if (elementBottom > 110) {
        setMenuScroll(true);
      } else {
        setMenuScroll(false);
      }
    });
  }, [typeof window !== "undefined" && window]);

  useEffect(() => {
    const isActive = (path) => {
      return router.pathname.includes(path);
    };

    axios.get(`${API_URL}/api/menu/getAll`)
      .then((response) => {
        const data = response.data;
        const menuList = data?.map((item, i) => {
          const active = isActive(item.menuSlug) ? stylesCss["menu_bottom_item_active"] : "";
          return {
            element: (
              <a onClick={() => router.push(`/${item.menuSlug}`)}>
                <div className={`${stylesCss["menu_bottom_item"]} ${active}`}>{item.menuName}</div>
              </a>
            ),
            event: () => { },
            status: true,
            path: `${item.menuSlug}`,
          };
        });
        setMenuBottom(menuList);
      })
      .catch((error) => {
        console.error('Error fetching menu:', error);
      });
  }, [router.pathname]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={stylesCss["menu-container"]}>
        <div className={stylesCss["navMenu-container"]}>
          <a onClick={() => router.push("/")}>
            <img className={stylesCss.logo} src="/logo.png" alt="logo" width="85" height="35" />
          </a>

          <div className={stylesCss["menu-warpper"]}>
            {menuBottom?.map((val, key) => {
              return <Fragment key={key}>{val.element}</Fragment>;
            })}
          </div>

          <div className={stylesCss["total-remaining-money"]}><span>Tổng tiền còn lại: {formatter.format(totalMoney)}</span></div>
          <div className={stylesCss["menu-toggle"]}>
            <svg
              onClick={toggleMenu}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
            <div className={showMenu ? stylesCss["menu-toggle-show"] : stylesCss["menu-toggle-hide"]}>
              <span>
                {menuBottom?.map((val, key) => {
                  return val.element;
                })}
              </span>
            </div>
          </div>
        </div>

      </nav >
      {menuScroll && (
        <div
          onClick={() => {
            scrollView.top();
          }}
          className={stylesCss.arowTop}>
          <IconTop />
        </div>
      )
      }
    </>
  );
};

export default MenuPC;
