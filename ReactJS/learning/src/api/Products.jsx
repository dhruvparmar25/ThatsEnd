import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
            console.log(data);

            setProducts(data)
        })
    }, [])
    return (
        <div className='grid grid-cols-6 gap-2 p-3 overflow-hidden h-fit'>
            {products.map((product) => (
                <>
                    <div className=' border-1  rounded  p-[20px] w-[250px] h-fit mt-[5px] m-auto mb-[5px] '>
                        <img src={product.image} height={100} width={100} />
                        <h3>{product.title}</h3>
                        <h4>{product.category}</h4>
                        <p><b>$ {product.price}</b></p>
                    </div>
                </>

            ))}
        </div>
    )
}

export default Products