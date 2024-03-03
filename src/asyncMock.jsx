const products = [
    {
        id: '1',
        name: 'Argollas Aila 30 mm bañadas en oro',
        price: 32990,
        category: 'Aros',
        img:'https://www.boazjoyas.com/cdn/shop/products/6_0375b848-3bdd-4465-8a46-ef3b39a86776_1800x1800.jpg?v=1631284140',
        stock: 10,
        description: 'Argollas Aila, para que tu look sea perfecto. Nuestras Argollas Aila de 30 mm son la pieza perfecta! Si antes ya estabas llena de brillo y cargada de buenas energías, estas argollas te llevarán a otro nivel. Tienen el tamaño perfecto, son de 30mm, así no te verás sobrecargada con tus accesorios pero tampoco sentirás que algo te falta. es que estos aros los creamos para que cualquier prenda que uses se vea diferente a las demás y tu personalidad brille más. Y para que sigas siendo única, las hicimos en baño de oro de 18 quilates - que es muy resistente. Estas hermosas argollas logran:  Cuidar tu piel, porque la calidad es importante para ti, nuestras joyas no contienen Níquel (es el componente que generalmente causa las reacciones alérgicas en la piel)    Te acompañarán mucho tiempo y en muchos recuerdos porque son resistentes.  ¿Ocasión ideal para usarlas? Te recomendamos usarlas de forma casual o llevarlas a un evento especial si las combinas con un vestido que te encante.  Sumar un accesorio a tu colección que puedes usar con cualquier look y repartir su belleza durante toda la semana.',
    },
    {
        id: '2',
        name: 'Collar Carol bañado en oro',
        price: 34990,
        category: 'Collares',
        img:'https://www.boazjoyas.com/cdn/shop/products/DSC09893_1_1800x1800.jpg?v=1647092313',
        stock: 10,
        description: 'El Collar Carol es tiene un diseño largo que adorna tu escote y lo llena de vida  Crear combinaciones con escotes profundos puede ser muy complicado, este collar tiene el tamaño y forma perfecta para que no te veas sobrecargada.  Bañado en Oro de 18 quilates, la cadena está adornada con barras lisas que caen como cascada en tu escote. Al medio se encuentran los circones llenos de brillo  para que tú look se vea más elegante y con vida. Ideal para eventos, días de oficina y salidas nocturnas. Crea nuevas combinaciones con este collar que además cuida tu piel al no contener níquel dentro de sus materiales. Material: Plata 925 libre de níquel, baño de oro de 18 quilates y Circones blancos Medida: 40cm + 8cm de extensor y 7cm de colgante',
    },
    {
        id: '3',
        name: 'Pulsera Valentines bañada en oro',
        price: 38990,
        category: 'Pulseras',
        img:'https://www.boazjoyas.com/cdn/shop/files/9_3dd29dc1-5e86-45c5-b58d-0f8cd9aeab3d_1080x1080.jpg?v=1690563439',
        stock: 10,
        description: 'Cuando tu corazón elige a una persona, su presencia te acompaña a todas partes” Esta pulsera está inspirada en los amores incondicionales que marcan tu vida. Hecha en plata 925, es libre de níquel para cuidar tu piel. Con baño de oro de 18 quilates. Tiene un hermoso colgante de corazón  con esmalte rojo y un circón blanco que brilla intensamente. Y podrás acompañarlo con la inicial de esa persona especial O con tu inicial, para que la persona que amas lleve siempre tu recuerdo. Este es un hermoso regalo para cumpleaños, aniversarios, san Valentin o para conmemorar una fecha especial entre ustedes. Material: Plata 925 con baño de oro de 18 quilates libre de níquel. Medida: 17 cm + 3 cm de extensor.',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};
