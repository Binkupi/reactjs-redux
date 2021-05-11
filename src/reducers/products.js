var initialstate=[
    {
        id:1,
        name:'Iphone 12',
        image:'https://cellphones.com.vn/sforum/wp-content/uploads/2020/09/anh-render-iPhone12-1.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price:500,
        inventory:10,
        rating:3,
    },
    {
        id:2,
        name:'Xiaomi note 10 pro',
        image:'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-600x600.jpg',
        description: 'Sản phẩm do xiaomi sản xuất',
        price:400,
        inventory:7,
        rating:5,
    },
    {
        id:3,
        name:'SamSung Galaxy Note 8',
        image:'https://viostore.vn/wp-content/uploads/2017/12/galaxy-note-8-co-them-mau-xanh-nuoc-bien-dam-ra-mat-16-11-768x512.jpg',
        description: 'Sản phẩm do SamSung sản xuất',
        price:1500,
        inventory:16,
        rating:2,
    }
];

const products=(state=initialstate,action)=>{
    switch(action.type){
        default:
            return [...state];
    }

}

export default products;