import React, {useEffect} from 'react';
import Category from '../components/category/Category'
import Images from '../components/images/Images'

function CategoryPage({match} : {match:any}) {
    return (
        <div>
            <Category id={match.params.id} />
            <Images />
        </div>
    );
}

export default CategoryPage;
