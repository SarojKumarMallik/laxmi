import './Blogs.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Blogitem from './Blogitem';
import blogsContext from '../../../context/blogs/blogscontext';

function Blogs() {
    const { blogs } = useContext(blogsContext);

    const options = {
        responsive: {
            0: {
                items: 1,
            },
            1024: {
                items: 3,
                itemsFit: 'contain',
            },
            770: {
                items: 2,
                itemsFit: 'contain',
            }
        },
        autoPlay: true,
        animationType: "fadeout",
        infinite: true,
        autoPlayInterval: 2000
    };

    return (
        <section id="blogs" className="blogs">
            <div className="container">
                <div className="section-title">
                    <h2>Blogs</h2>
                </div>
                <AliceCarousel {...options}>
                    {blogs.map(item => <Blogitem blog={item} key={item.id}></Blogitem>)}
                </AliceCarousel>
            </div>
        </section>
    );
}

export default Blogs;