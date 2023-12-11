import { RiDashboardLine, RiLogoutCircleRLine, RiSettings5Line, RiLoginCircleLine } from "react-icons/ri";
import { BsBookmarkStar, BsList } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'

const { currentUser, loading, error } = useSelector((state:RootState)=>state.user);

const Menus = [
    { title: "Dashboard", icon: <RiDashboardLine/> },
    { title: "Categories",  icon: <BsList />, submenu: true,
        submenuItems: [
            {title: "Programming"},
            {title: "Machine Learning"},
            {title: "Cybersecurity"},
        ],
    },
    {title: "Wishlist",  icon: <BsBookmarkStar /> },
    {title: "Contact",  icon: <AiTwotoneMail /> },
    {title: "Settings", spacing: true, icon: <RiSettings5Line /> },
    ...(currentUser
        ? [{ title: "Logout",  icon: <RiLogoutCircleRLine /> }]
        : [{ title: "Login",  icon: <RiLoginCircleLine /> }]
      ),
    
];

export default Menus;