import React from "react";
import ReactGiphySearchbox from 'react-giphy-searchbox';

const SearchPage = () => {
    return (
        <div>
            <header>
                <h1>SEARCH YOUR GIPHY</h1>
            </header>
            <div className='searchBoxWrapper'>
                <ReactGiphySearchbox 
                apiKey="5jW02lYrcNexOTuk652L0fVbKXjaWVcm"
                onSelect={(item) => console.log(item)}
                masonryConfig={[
                    {columns:3, imageWidth:110, gutter:5},
                    {mq:"700px", columns:3, imageWidth:120, gutter:5}
                ]}
                />
            </div>
        </div>
    );
};

export default SearchPage;