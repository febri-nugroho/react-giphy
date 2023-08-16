import {React, useEffect, useState} from "react";
import ReactGiphySearchbox from 'react-giphy-searchbox';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = "https://api.giphy.com/v1/gifs/";

const IronmanPages = () => {
    // const [giphyData, setGiphyData] = useState([]);
    // const [isError, setIsError] = useState(false);
    // const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     const fetchGifs = async () => {
    //         setIsError(false);
    //         try {
    //             let endpoint = "";

    //             endpoint = `${API_URL}search?api_key=${API_KEY}&q=iron+man&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    //             const results = await axios.get(endpoint);
    //             setGiphyData(results.data.data);
    //         } catch (error) {
    //             setIsError(true);
    //             console.error(error);
    //         }
    //     };
    //     fetchGifs();
    // }, [searchTerm]);
    // searchText() {
    //     return "iron man";
    // }
    
    return (
        <div>
            <header>
                <h1>IRON MAN GIPHY</h1>
            </header>
            <div className='searchBoxWrapper'>
                <ReactGiphySearchbox 
                apiKey="5jW02lYrcNexOTuk652L0fVbKXjaWVcm"
                onSelect={(item) => console.log(item)}
                onSearch={() => console.log("iron man")}
                masonryConfig={[
                    {columns:4, imageWidth:110, gutter:5},
                    {mq:"800px", columns:3, imageWidth:120, gutter:5}
                ]}
                />
            </div>
        </div>
    );
};

export default IronmanPages;