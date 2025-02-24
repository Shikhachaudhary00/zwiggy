import { TiThSmallOutline } from "react-icons/ti";
import { GiCoffeeCup } from "react-icons/gi";
import { TbSoupFilled } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";
import { BsFillCake2Fill } from "react-icons/bs";
import { RiDrinks2Fill } from "react-icons/ri";
import { IoIosIceCream } from "react-icons/io";
import { LuIceCreamBowl } from "react-icons/lu";

const Categories=[
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:2,
        name:"Breakfast",
        image:<GiCoffeeCup className="w-[80px] h-[70px] text-orange-500 px-1 m-3" />

    },
    {
        id:3,
        name:"Soup",
        image:<TbSoupFilled  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:4,
        name:"Pasta",
        image:<GiNoodles  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:5,
        name:"main_course",
        image:<GiMeal  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:6,
        name:"Pizza",
        image:<GiFullPizza  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:7,
        name:"Burger",
        image:<SiBurgerking  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:8,
        name:"Cake",
        image:<BsFillCake2Fill  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:9,
        name:"Beverages", 
        image:<RiDrinks2Fill  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:10,
        name:"ice-cream",
        image:<IoIosIceCream  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },
    {
        id:11,
        name:"Dessert",
        image:<LuIceCreamBowl  className="w-[80px] h-[70px] text-orange-500 px-1 m-3"/>
    },

]
export default Categories