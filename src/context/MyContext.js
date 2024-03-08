import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cards, setCards] = useState([
        {
            id: 1,
            image:
                "https://th.bing.com/th/id/R.7f3c8507b9d5eea32869a0124674a63d?rik=ffNo1E8ILppazQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcar_logo%2fcar_logo_PNG1667.png&ehk=bHVzvjpqTKRVFQHVicQgtIsdIsneSZTad4bCD5yDCNI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id: 2,
            image:
                "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0",
        },
        {
            id: 3,
            image:
                "https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial-300x300.png",
        },
        {
            id: 4,
            image:
                "https://www.freepngimg.com/thumb/adidas/58144-logo-brand-clothing-adidas-swoosh-free-download-png-hd.png",
        },
        {
            id: 5,
            image:
                "https://proyectosbeta.net/wp-content/uploads/2016/10/Logo-StackOverFlow.png",
        },
        {
            id: 6,
            image:
                "https://www.deepnetsecurity.com/wp-content/uploads/2014/03/linux-logo.jpg",
        },
        {
            id: 11,
            image:
                "https://th.bing.com/th/id/R.7f3c8507b9d5eea32869a0124674a63d?rik=ffNo1E8ILppazQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcar_logo%2fcar_logo_PNG1667.png&ehk=bHVzvjpqTKRVFQHVicQgtIsdIsneSZTad4bCD5yDCNI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id: 12,
            image:
                "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0",
        },
        {
            id: 13,
            image:
                "https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial-300x300.png",
        },
        {
            id: 14,
            image:
                "https://www.freepngimg.com/thumb/adidas/58144-logo-brand-clothing-adidas-swoosh-free-download-png-hd.png",
        },
        {
            id: 15,
            image:
                "https://proyectosbeta.net/wp-content/uploads/2016/10/Logo-StackOverFlow.png",
        },
        {
            id: 16,
            image:
                "https://www.deepnetsecurity.com/wp-content/uploads/2014/03/linux-logo.jpg",
        },
        {
            id: 17,
            image:
                "https://pluspng.com/img-png/github-logo-png-github-logos-and-usage-github-800x665.png",
        },
        {
            id: 18,
            image:
                "https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png",
        },
        {
            id: 19,
            image:
                "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
        },
        {
            id: 20,
            image:
                "https://th.bing.com/th/id/R.00c7ba407f63326adbc636a14bdffdb0?rik=LgGfaDT%2fumH6hQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcar_logo%2fcar_logo_PNG1641.png&ehk=ByeXUfk72MxoL7kICjT1EAkxd6RKw7MUWUHckwncphQ%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id: 21,
            image:
                "https://pluspng.com/img-png/github-logo-png-github-logos-and-usage-github-800x665.png",
        },
        {
            id: 22,
            image:
                "https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png",
        },
        {
            id: 23,
            image:
                "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
        },
        {
            id: 24,
            image:
                "https://th.bing.com/th/id/R.00c7ba407f63326adbc636a14bdffdb0?rik=LgGfaDT%2fumH6hQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcar_logo%2fcar_logo_PNG1641.png&ehk=ByeXUfk72MxoL7kICjT1EAkxd6RKw7MUWUHckwncphQ%3d&risl=&pid=ImgRaw&r=0",
        },
    
    ]);

    let myShuffle = cards;
    
    const [openCards, setOpenCards] = useState([]);
    
    const [moves, setMoves] = useState(0);

    const values = {
        cards,
        setCards,
        openCards,
        setOpenCards,
        moves,
        setMoves
    };
    return <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>;
};
export default MyContext;
