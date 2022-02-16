

const Products = [
	{
		id: 0,
		name: 'LAPTOP LENOVO IDEAPAD 5I INTEL CORE I7 8GB RAM 512GB SSD 15.6 ',
		stars: 5,
		initial_price: '4,699.00',
		final_price: '4,099.00',
		hot: true,
		stock: 5,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004279544270/2004279544270_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004279544270/2004279544270-1.jpg'
	},
	{
		id: 1,
		name: 'LAPTOP ACER AN515-55-50U5 INTEL CORE I5 10300H 8GB 512GB 15.6',
		stars: 2,
		initial_price: '3,599.00',
		final_price: '3,099.00',
		hot: false,
		stock: 3,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004272777835/2004272777835_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004272777835/2004272777835-1.jpg'
	}
	,
	{
		id: 2,
		name: 'LAPTOP LENOVO IDEAPAD 3 AMD RYZEN 3 12GB RAM 256GB SSD 15.6',
		stars: 5,
		initial_price: '2,799.00',
		final_price: '1,999.00',
		hot: true,
		stock: 10,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004280106955/2004280106955_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004280106955/2004280106955-1.jpg'
	}
	,
	{
		id: 3,
		name: 'LAPTOP ASUS X571GT-HN1020T INTEL CORE I5 8GB RAM 512GB SSD 15.6',
		stars: 4,
		initial_price: '4,099.00',
		final_price: '3,099.00',
		hot: true,
		stock: 15,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004284359081/2004284359081_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004284359081/2004284359081-1.jpg'
	}
	,
	{
		id: 4,
		name: 'LAPTOP HP 15-DY2050LA INTEL CORE I3 8GB 256GB + 16GB 15.6',
		stars: 3,
		initial_price: '2,499.00',
		final_price: '2,099.00',
		hot: false,
		stock: 8,
		image1: 'https://home.ripley.com.pe/Attachment/WOP_5/2004270712128/2004270712128_2.jpg',
		image2: 'https://home.ripley.com.pe/Attachment/WOP_5/2004270712128/2004270712128-1.jpg'
	}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products);
        }, 2000);    // 2 s
    });
}




