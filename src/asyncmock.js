

const Products = [
	{
		id: 0,
		name: 'LAPTOP LENOVO IDEAPAD 5I INTEL CORE I7 8GB RAM 512GB SSD 15.6 ',
		category: 'Laptop',
		brand: 'Lenovo',
		description: "Description consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
		color: "Negro",
		initial_price: '4,699',
		final_price: '4,099',
		hot: true,
		stock: 5,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004279544270/2004279544270_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004279544270/2004279544270-1.jpg'
	},
	{
		id: 1,
		name: 'LAPTOP ACER AN515-55-50U5 INTEL CORE I5 10300H 8GB 512GB 15.6',
		category: 'Laptop',
		brand: 'Acer',
		description: "Description consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
		color: "Negro y Rojo",
		initial_price: '3,599',
		final_price: '3,099',
		hot: false,
		stock: 3,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004272777835/2004272777835_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004272777835/2004272777835-1.jpg'
	}
	,
	{
		id: 2,
		name: 'LAPTOP LENOVO IDEAPAD 3 AMD RYZEN 3 12GB RAM 256GB SSD 15.6',
		category: 'Laptop',
		brand: 'Lenovo',
		description: "Description consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
		color: "Azul",
		initial_price: '2,799',
		final_price: '1,999',
		hot: true,
		stock: 10,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004280106955/2004280106955_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004280106955/2004280106955-1.jpg'
	}
	,
	{
		id: 3,
		name: 'LAPTOP ASUS X571GT-HN1020T INTEL CORE I5 8GB RAM 512GB SSD 15.6',
		brand: 'Asus',
		category: 'Laptop',
		description: "Description consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
		color: "Plateado",
		initial_price: '4,099',
		final_price: '3,099',
		hot: true,
		stock: 15,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004284359081/2004284359081_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004284359081/2004284359081-1.jpg'
	},
	{
		id: 4,
		name: 'LAPTOP HP 15-DY2050LA INTEL CORE I3 8GB 256GB + 16GB 15.6',
		brand: 'HP',
		category: 'Laptop',
		description: "Description consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
		color: "Blanco",
		initial_price: '2,499',
		final_price: '2,099',
		hot: false,
		stock: 80,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004270712128/2004270712128_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004270712128/2004270712128-1.jpg'
	},
	{
		id: 5,
		name: 'IPHONE 13 6.1" 128GB 12MP + 12MP',
		brand: 'Apple',
		category: 'Celular',
		description: "¡Disfruta de una gran experiencia y eficiencia incomparable con el iPhone 13 que Apple tiene para ti! Lo mejor en tecnología está en Ripley.com",
		color: "AZUL MEDIANOCHE",
		initial_price: '5,099',
		final_price: '4,899',
		hot: false,
		stock: 25,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2065287752910/2065287752910_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2065287752910/2065287752910-1.jpg'
	},
	{
		id: 6,
		name: 'CELULAR SAMSUNG GALAXY A12 6.5" 64GB 48MP+5MP+2MP+2MP',
		brand: 'Samsung',
		category: 'Celular',
		description: "Samsung tiene para ti el modelo Galaxy A12 que está equipado con un potente procesador Octa Core y con 4GB de RAM para que puedas ejecutar sin problemas todas las aplicaciones que desees",
		color: "NEGRO",
		initial_price: '699',
		final_price: '649',
		hot: true,
		stock: 30,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2065277358078/2065277358078_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2065277358078/2065277358078-1.jpg'
	},
	{
		id: 7,
		name: 'CELULAR XIAOMI REDMI NOTE 11 128GB DOBLE CHIP 50MP+8MP+2MP+2MP',
		brand: 'Xiaomi',
		category: 'Celular',
		description: "Nuevo Xiaomi Redmi note 11 con memoria interna de 128GB doble chip y cámara posterior cuádrupe",
		color: "NEGRO",
		initial_price: '899',
		final_price: '879',
		hot: true,
		stock: 76,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2065288160233/2065288160233_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2065288160233/2065288160233-1.jpg'
	},
	{
		id: 8,
		name: 'CELULAR HUAWEI NOVA 8I 6GB 128GB DUAL SIM',
		brand: 'Huawei',
		category: 'Celular',
		description: "Nuevo smartphone Huawei Nova 8I, memoria RAM 6GB, memoria interna 128GB y sistema operativo EMUI 11.0 (basado en Android 10).",
		color: "Azul",
		initial_price: '1,199',
		final_price: '1,099',
		hot: false,
		stock: 100,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2065282729719/2065282729719_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2065282729719/2065282729719-1.jpg'
	},
	{
		id: 9,
		name: 'OMEN 30L Desktop GT13-0001la i5-10600K 16GB 1TB SSD 256GB RTX2060 6GB',
		brand: 'Intel',
		category: 'Computadora',
		description: "Déjate sorprender con la increíble computadora de escritorio Gamer Ryzen 7-3700X 3.7GHZ Ram 16GB Disco 1TB SSD 240GB Video GTX 1650 4GB Case 600W Led. Encuentra este increíble producto en La Curacao web.",
		color: "Ninguno",
		initial_price: '7,929',
		final_price: '6,189',
		hot: false,
		stock: 100,
		image1: 'https://falabella.scene7.com/is/image/FalabellaPE/18220271_1?wid=750&hei=500&qlt=70',
		image2: 'https://falabella.scene7.com/is/image/FalabellaPE/18220271_3?wid=750&hei=500&qlt=70'
	},
	{
		id: 10,
		name: 'TARJETA GRAFICA GIGABYTE NVIDIA GEFORCE GT 730 2GB DDR3',
		brand: 'NVIDIA',
		category: 'Hardware',
		description: "Desarrollado por NVIDIA GeForce GT 730 GPU",
		color: "Negro",
		initial_price: '499',
		final_price: '445',
		hot: true,
		stock: 80,
		image1: 'https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/12/22170741/140-9.jpg',
		image2: 'https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/12/22170647/2-6.jpg'
	}

]

/* export const getCategories = () => {
	return new Promise((resolve) => {
		setTimeout(() => {

		}, 200);
	})
} */

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products);
        }, 500);    // 2 s
    });
}

export const getProduct = (id) => {
    return new Promise((res) => {
		const prod = Products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            res(prod);
        }, 500);
    });
}

export const getByCategory = (category) => {
    return new Promise((res) => {
        const cate = Products.filter(p => p.category === category);
        setTimeout(() => {
            res(cate)
        }, 500)
})};
