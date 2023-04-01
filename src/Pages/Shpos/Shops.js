import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { verifiedShopsAPI } from '../../Api/api';
import ShopCard from '../../Components/share/Cart/ShopCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
const ShopsAll = () => {
    const { data: dates = [] } = useQuery({
        queryKey: ['shops'],
        queryFn: () => verifiedShopsAPI()
    })
    return (
        <TemplateCPS
            type={'Shops'}
            py={8}
        >
            <ShopCard
                shopsData={dates} />
        </TemplateCPS>
    );
};

export default ShopsAll;