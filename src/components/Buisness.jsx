import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Business = () => {
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32df40bc5cde4da38ae64deda880308b')
            .then((response) => {
                console.log(response.data);
                setNews(response.data.articles);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {
                news && news.map((item, index) => (
                    <>
                        <div key={index} className='newsS'>
                            <div className='NC'>
                                <h1>{item.title}</h1>
                                <strong><p className='description'>{item.description}</p></strong>
                                <p className='content'>{item.content}</p>
                                <Link to={item.url}> Read here</Link>
                                <p>Publihed: {item.publishedAt} </p>
                            </div>

                            <img src={item.urlToImage} alt={item.title} />
                        </div>
                        <hr />
                    </>
                ))
            }
        </div>
    );
}

export default Business;
