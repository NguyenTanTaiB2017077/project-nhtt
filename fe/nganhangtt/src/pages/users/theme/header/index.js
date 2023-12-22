import { memo, useState } from "react"
import "./style.scss";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineTwitter,
    AiOutlineUser
} from "react-icons/ai"
import { Link } from "react-router-dom"
import { formatter } from "../../../../utils/fomater";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chu",
            path: "",
        },
        {
            name: "Cua hang",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "San pham",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Thit",
                    path: "",
                },
                {
                    name: "Rau cu",
                    path: "",
                },
                {
                    name: "Thuc an nhanh",
                    path: "",
                },
            ]
        },
        {
            name: "Bai viet",
            path: "",
        },
        {
            name: "Lien he",
            path: "",
        }

    ])

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hello@gmail.com
                                </li>
                                <li>
                                    Crop and livestock information bank
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Dang nhap</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 ">
                        <div className="header__logo">
                            <h1>Crop and Livestock</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <nav className="header__menu">
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>
                                            {menu?.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                    </div>
                    <div className="col-xl-3 ">
                        <div className="header__cart">
                            <div header__cart_price>
                                <span>{formatter(1234567)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};


export default memo(Header);