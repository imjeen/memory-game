

import Cherry from "../assets/cherry.svg?react"
import Watermelon from "../assets/watermelon.svg?react"
import Grape from "../assets/grape.svg?react"
import Mango from "../assets/mango.svg?react"
import Banana from "../assets/banana.svg?react"
import Carrot from "../assets/carrot.svg?react"
import Apple from "../assets/apple.svg?react"
import Strawberry from "../assets/strawberry.svg?react"
// import Blueberry from "../assets/blueberry.svg?react"
// import Peach from "../assets/peach.svg?react"
// import Pear from "../assets/pear.svg?react"
// import Orange from "../assets/orange.svg?react"
// import Lemon from "../assets/lemon.svg?react"
// import Kiwi from "../assets/kiwi.svg?react"
// import Coconut from "../assets/coconut.svg?react"
// import Avocado from "../assets/avocado.svg?react"
// import Cantaloupe from "../assets/cantaloupe.svg?react"
// import CherryTomato from "../assets/cherry-tomato.svg?react"
// import Olive from "../assets/olive.svg?react"


export default function Icon({ svgNo }: { svgNo: number; }) {
    switch (svgNo) {
        case 1:
            return <Grape />; // 🍇 葡萄 grape
        case 2:
            return <Cherry />; // 🍒 樱桃 cherry
        case 3:
            return <Watermelon />; // 🍉 水果水melon
        case 4:
            return <Mango />; // 🥭 芒果 mango
        case 5:
            return <Banana />; // 🍌 香蕉 banana
        case 6:
            return <Carrot />; // 🥕 胡萝卜 carrot
        case 7:
            return <Apple />; // 🍎 苹果 apple
        case 8:
            return <Strawberry />; // 🍓 草莓 strawberry
        case 9:
        //     return <Blueberry />; // 🫐 蓝莓 blueberry
        // case 10:
        //     return <Peach />; // 🍑 桃子 Peach
        // case 11:
        //     return <Pear />; // 🍐 梨 Pear
        // case 12:
        //     return <Orange />; // 🍊 橙子 orange
        // case 13:
        //     return <Lemon />; // 🍋 柠檬 Lemon
        // case 14:
        //     return <Kiwi />; // 🥝 猕猴桃 Kiwi
        // case 15:
        //     return <Coconut />; // 🥥 椰子 Coconut
        // case 16:
        //     return <Avocado />; // 🥑 牛油果 Avocado
        // case 17:
        //     return <Cantaloupe />; // 🍈 哈密瓜 cantaloupe
        // case 18:
        //     return <CherryTomato />; // 🍅 小番茄 cherry tomato
        // case 19:
        //     return <Olive />; // 🫒 橄榄 olive
        default:
            return null;
    }

}