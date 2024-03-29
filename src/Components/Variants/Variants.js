import React, { useEffect, useState } from 'react';
import { useAddToCart } from '../../Context/AddToCatd';

const Variants = ({ product, setVariantsPrice, setVariants }) => {
    const { setAmount } = useAddToCart()
    const [active, setActive] = useState(product?.variants[0]?.variant);

    useEffect(() => {
        setVariantsPrice(product?.variants[0].price);
        setVariants(product?.variants[0].variant);
    }, [product?.variants, setVariantsPrice, setVariants])

    return (
        <dl className="flex gap-4 mb-1">
            <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">variants</dt>
            {product?.variants.map((variant, i) =>
                <div
                    key={i}
                    onClick={() => {
                        setAmount(1)
                        setActive(variant?.variant)
                        setVariantsPrice(variant?.price)
                        setVariants(variant?.variant)
                    }}
                    className={`${active === variant.variant ? "bg-black text-white" : "bg-white"} border-2 px-4 rounded-lg cursor-pointer `}>
                    <dd className="flex-1 text-gray-500">{variant.variant}</dd>
                </div>
            )}
        </dl>

    );
};

export default Variants;
