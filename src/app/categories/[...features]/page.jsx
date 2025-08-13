import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    if(params.features.length === 3) {
        return (
            <div>
                <h1>Categories Details page</h1>
                <p>Feature: {params.features[0]}</p>
                <p>Sub-feature: {params.features[1]}</p>
                <p>Detail: {params.features[2]}</p>
            </div>
        );
    }
    if(params.features.length === 2) {
        return (
            <div>
                <h1>Categories Details page</h1>
                <p>Feature: {params.features[0]}</p>
                <p>Sub-feature: {params.features[1]}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Categories Details page</h1>
            <p>Feature: {params.features[0]}</p>
            <p>Sub-feature: {params.features[1]}</p>
            <p>Detail: {params.features[2]}</p>
        </div>
    );
};

export default CategoriesDetailsPage;