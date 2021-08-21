import React from 'react';
import Category from '../components/category/Category'
import Images from '../components/images/Images'

function HomePage({match} : {match:any}) {
    return (
        <div>
            <Category id={match.params.id} />
            <Images />
        </div>
    );
}

export default HomePage;
