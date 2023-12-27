import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tech = () => {
    const [Tnews, setTNews] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=32df40bc5cde4da38ae64deda880308b')
            .then((response) => {
                console.log(response.data);
                setTNews(response.data.articles);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {
                Tnews && Tnews.map((item, index) => (
                    <div key={index}>
                        <div key={index} className='newsS'>
                            <div className='NC'>
                                <h1>{item.title}</h1>
                                <strong><p className='description'>{item.description}</p></strong>
                                <p className='content'>{item.content}</p>
                                <Link to={item.url}> Read here </Link>
                                <p>Publihed: {item.publishedAt} </p>
                            </div>

                            <img src={item.urlToImage} alt={item.title} />
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Tech;
