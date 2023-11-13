import React from 'react'
import Product from '../Product';

const FilterProducts = ({ fetchedCategoryProducts, activeFilter_options, activeSub_category, activeSort_option }) => {
    const displayProducts = (() => {
        switch (true) {
            case activeFilter_options.some((filterOption) =>
                fetchedCategoryProducts.some((product) =>
                    Object.values(product).some((value) => {
                        if (typeof value === 'string' && typeof filterOption === 'string') {
                            return value.includes(filterOption);
                        }
                        return false;
                    })
                )
            ):
                return fetchedCategoryProducts
                    .filter((product) =>
                        activeFilter_options.some((filterOption) =>
                            Object.values(product).some((value) => {
                                if (typeof value === 'string' && typeof filterOption === 'string') {
                                    return value.includes(filterOption);
                                }
                                return false;
                            })
                        )
                    )
                    .map((product) => (
                        <Product product={product} key={product?.id} />
                    ));
            
            case activeFilter_options.some((filterOption) =>
                fetchedCategoryProducts.some((product) =>
                    activeSub_category === 'all' &&
                    Object.keys(product).includes('rating') &&
                    typeof filterOption === 'number' &&
                    product.rating >= filterOption
                )
            ):
                return fetchedCategoryProducts
                    .filter((product) =>
                        activeFilter_options.some((filterOption) =>
                            activeSub_category === 'all' &&
                            Object.keys(product).includes('rating') &&
                            typeof filterOption === 'number' &&
                            product.rating >= filterOption
                        )
                    )
                    .map((product) => (
                        <Product product={product} key={product?.id} />
                    ));
            
            case activeSub_category !== "all" &&
                activeFilter_options.some((filterOption) =>
                    fetchedCategoryProducts.some((product) =>
                        product.sub_category === activeSub_category &&
                        Object.keys(product).includes('rating') &&
                        typeof filterOption === 'number' &&
                        product.rating >= filterOption
                    )
                ):
                return fetchedCategoryProducts
                    .filter((product) =>
                        activeFilter_options.some((filterOption) =>
                            product.sub_category === activeSub_category &&
                            Object.keys(product).includes('rating') &&
                            typeof filterOption === 'number' &&
                            product.rating >= filterOption
                        )
                    )
                    .map((product) => (
                        <Product product={product} key={product?.id} />
                    ));
            
            case activeFilter_options.some((filterOption) =>
                fetchedCategoryProducts.some((product) => {
                    if (activeSub_category === 'all' && Object.keys(product).includes('discount_price') && product?.discount >= 0) {
                        if (filterOption === 'Under $150') {
                            return product?.discount_price >= 0 && product?.discount_price <= 149;
                        } else if (filterOption === 'From $150 to $350') {
                            return product?.discount_price > 150;
                        } else {
                            return product?.discount_price >= 351;
                        }
                    }
                    return false;
                    
                })
            ):
                return fetchedCategoryProducts.filter((product) =>  activeFilter_options.some((filterOption) => {
                    if (activeSub_category === 'all' && Object.keys(product).includes('discount_price')) {
                        if (filterOption === 'Under $150') {
                            return product?.discount_price <= 149;
                        } else if (filterOption === 'From $150 to $350') {
                            return product?.discount_price >= 150 && product?.discount_price <= 350;
                        } else if (filterOption === 'Over $350') {
                            return product?.discount_price > 350;
                        }
                    }
                    return false;
                }))
                .map((product) => (
                    <Product product={product} key={product?.id} />
                ));
            
            case activeSub_category !== "all" && activeFilter_options.some((filterOption) =>
                fetchedCategoryProducts.filter((product) => {
                    if (product.sub_category === activeSub_category && Object.keys(product).includes('discount_price') && product?.discount >= 0) {
                        if (filterOption === 'Under $150') {
                            return product?.discount_price <= 149;
                        } else if (filterOption === 'From $150 to $350') {
                            return product?.discount_price >= 150 && product?.discount_price <= 350;
                        } else if (filterOption === 'Over $350') {
                            return product?.discount_price > 350;
                        }
                    }
                    return false;
                })):
                return fetchedCategoryProducts.filter((product) => activeFilter_options.some((filterOption) => {
                    if (product.sub_category === activeSub_category && Object.keys(product).includes('discount_price') && product?.discount >= 0) {
                        if (filterOption === 'Under $150') {
                            return product?.discount_price <= 149;
                        } else if (filterOption === 'From $150 to $350') {
                            return product?.discount_price >= 150 && product?.discount_price <= 350;
                        } else if (filterOption === 'Over $350') {
                            return product?.discount_price > 350;
                        }
                    }
                    return false;
                }))
                .map((product) => (
                    <Product product={product} key={product?.id} />
                ));
            
            case activeSub_category !== "all" && !activeFilter_options.some((filterOption) =>
                fetchedCategoryProducts.some((product) =>
                    Object.values(product).includes(filterOption)
                )):
                return fetchedCategoryProducts
                    .filter((product) => product.sub_category === activeSub_category)
                    .map((product) => (
                        <Product product={product} key={product?.id} />
                    ));

            // Active Sort Option
            case activeSort_option === "Featured":
                return fetchedCategoryProducts
                    .map((product) => (
                        <Product product={product} key={product?.id} />
                    ));
            
            case fetchedCategoryProducts.some((product) => 
                    product?.level.some((level) => level.toLowerCase().split(' ').join('') === activeSort_option.toLowerCase().split(' ').join(''))
                ):
                return fetchedCategoryProducts
                    .filter((product) =>
                        product.level.some((level) => level.toLowerCase().split(' ').join('') === activeSort_option.toLowerCase().split(' ').join(''))
                        
                    )
                    .map((product) => (
                        <Product product={product} key={product?.id} />
                    ));
            
            default:
                return fetchedCategoryProducts.map((product) => (
                    <Product product={product} key={product?.id} />
                ));
        }})()
    return (
        <div className="category_products_container w-[100%] grid grid-cols-2 gap-2 gap-y-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-3">
            {displayProducts}
        </div>
    )
}

export default FilterProducts