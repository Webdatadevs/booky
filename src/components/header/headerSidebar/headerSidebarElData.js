import { RiShoppingBasketFill } from "react-icons/ri"; 
import { GiBookshelf } from "react-icons/gi"; 
import { BsFillBookmarkFill } from "react-icons/bs"; 
import { GiBookmarklet } from "react-icons/gi"; 
import { AiFillHome } from "react-icons/ai"; 
import ShortAudio from "../../pages/ShortAudio";
import Save from "../../pages/Save";
import Basket from "../../pages/Basket/Basket";
import MyBooks from "../../pages/MyBooks";
const headerSideabrElData= [
    {
        id: 1,
        title: 'Bas bet',
        pathName: '/',
        icon: AiFillHome
    },
    {
        id: 2,
        title: 'Jáhán ádebiyatı',
        pathName: '/jahanadebiyati',
        icon: GiBookmarklet
    },
    {
        id: 3,
        title: 'Ózbek ádebiyatı',
        pathName: '/ozbekadebiyati',
        icon: GiBookmarklet
    },
    {
        id: 4,
        title: 'Qaraqalpaq ádebiyatı',
        pathName: '/qaraqalpaqadebiyati',
        icon: GiBookmarklet
    },
    {
        id: 5,
        title: 'Qaraqalpaq folklorı',
        pathName: '/qaraqalpaqfolk',
        icon: GiBookmarklet,
    },
    {
        id: 6,
        title: 'Qısqa audiolar',
        pathName: '/qisqaaudiolar',
        icon: GiBookmarklet,
        componentName: ShortAudio
    },
    {
        id: 7,
        title: 'Saylanǵanlar',
        pathName: '/saylanganlar',
        icon: BsFillBookmarkFill,
        componentName: Save
    },
    {
        id: 8,
        title: 'Sebet',
        pathName: '/sebet',
        icon: RiShoppingBasketFill,
        componentName: Basket
    },
    {
        id: 9,
        title: 'Kitaplarım',
        pathName: '/kitaplarım',
        icon: GiBookshelf,
        componentName: MyBooks
    },

]

export default headerSideabrElData