export const dataPrd = [
    {
        id: 1,
        title: 'Bàn uống nước 1',
        price: '2.000.000',
        price2: '2000000',
        linkImg: 'https://noithatluongson.vn/wp-content/uploads/2019/06/b1.png',
    },
    {
        id: 2,
        title: 'Bàn uống nước 2',
        price: '2.500.000',
        price2: '2500000',
        linkImg: 'https://hoaphatmiennam.vn/wp-content/uploads/2018/04/ban-tra-bet-mau-trang.jpg',
    },
    {
        id: 3,
        title: 'Bàn uống nước 3',
        price: '2.600.000',
        price2: '2600000',
        linkImg: 'https://hoaphatmiennam.vn/wp-content/uploads/2018/04/ban-tra-cao-cap-kieu-nhat.jpg',
    },
    {
        id: 4,
        title: 'Bàn uống nước 4',
        price: '1.800.000',
        price2: '1800000',
        linkImg: 'https://hoaphatmiennam.vn/wp-content/uploads/2018/04/ban-tra-chan-sat-hinh-tron.jpg',
    },
    {
        id: 5,
        title: 'Bàn uống nước 5',
        price: '1.890.000',
        price2: '1890000',
        linkImg: 'https://hoaphatmiennam.vn/wp-content/uploads/2018/04/ban-tra-F3177A.jpg',
    },
    {
        id: 6,
        title: 'Trang trí',
        price: '2.500.000',
        price2: '2500000',
        linkImg: 'https://anandecor.vn/wp-content/uploads/2020/10/Layer-88.png',
    },
    {
        id: 7,
        title: 'Bàn ghế văn phòng',
        price: '2.000.000',
        price2: '2000000',
        linkImg: 'https://noithatkienhung.vn/wp-content/uploads/2023/04/cum-ban-lam-viec-6-nguoi-blv-34-768x768.jpg',
    },
    {
        id: 8,
        title: 'Bàn ăn',
        price: '2.500.000',
        price2: '2500000',
        linkImg: 'https://bizweb.dktcdn.net/100/153/764/products/ban-an-mat-da-161s.jpg?v=1591234722027',
    },
    {
        id: 9,
        title: 'Bồn rửa tay',
        price: '5.500.000',
        price2: '5500000',
        linkImg: 'http://api.vibavietnam.vn/storage/images/originals/b5a146c9a842917daadfa4feaf66cc95.webp',
    },
    {
        id: 10,
        title: 'Giường tầng trẻ em',
        price: '4.800.000',
        price2: '4800000',
        linkImg: 'https://azfuni.com/wp-content/uploads/2022/04/giuong-tang-cho-be-gai-2-768x768.jpg',
    },
];

const initial = {
    products: dataPrd,
    isDisplayCart: false,
    cart: [],
};

export const reducer = (state = initial, action) => {
    switch (action.type) {
        case 'togglecart':
            return {
                ...state,
                isDisplayCart: action.status,
            };
        case 'addtocart':
            let { cart } = state;
            let product = action.product;
            let prod = cart.find((x) => x.id == product.id);
            if (prod) {
                prod.quantity++;
            } else {
                product.quantity = 1;
                cart.push(product);
            }

            return {
                ...state,
                isDisplayCart: true,
                cart: [...cart],
            };
        case 'deleteprod':
            let newcart = state.cart.filter((x) => x.id != action.id);

            return {
                ...state,
                cart: [...newcart],
            };
        case 'addquantity':
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.id ? { ...item, quantity: action.quantity + 1 } : item,
                ),
            };
        case 'minusquantity':
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.id ? { ...item, quantity: action.quantity - 1 } : item,
                ),
            };
        default:
            return state;
    }
};

export const toggleCart = (status) => {
    return {
        type: 'togglecart',
        status: status,
    };
};

export const addToCart = (prod) => {
    return {
        type: 'addtocart',
        product: prod,
    };
};

export const deleteProd = (id) => {
    return {
        type: 'deleteprod',
        id: id,
    };
};

export const plusQuantity = (itemId, quantity) => {
    return {
        type: 'addquantity',
        id: itemId,
        quantity,
    };
};

export const minusQuantity = (itemId, quantity) => {
    return {
        type: 'minusquantity',
        id: itemId,
        quantity,
    };
};
