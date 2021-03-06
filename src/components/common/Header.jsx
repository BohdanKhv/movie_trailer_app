import { useRef } from 'react';
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = ({ item }) => {

    const bgImage = useRef()
    
    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;
        if(bgImage.current) {
            bgImage.current.style.transform = `translateY(${(scrolled * 0.4 )}px)`
        }
    });


    return (
        <>
        {item &&
            <header>
                <div className="img-wrapper">
                    <img ref={bgImage} src={item.poster_path != '' ? 'https://image.tmdb.org/t/p/w1280'+item.poster_path : "https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg"} alt="" />
                    <div className="concord-img-gradient"></div>
                </div>
                <div className="container">
                    <h1>
                        {item.original_title}
                    </h1>
                    <div className="info">
                        <h3>{item.release_date}</h3>
                        {item.adult &&
                            <>
                                <span></span>
                                <h3 className="is-edult">18+</h3>
                            </>
                        }
                        <span></span>
                        <h3>{item.media_type.slice(0,1).toUpperCase() + item.media_type.slice(1) }</h3>
                        <span></span>
                        <h3>⭐{item.vote_average}</h3>
                    </div>
                    <div className="actions">
                        <Link to={`/watch/${item && item.media_type}/${item && item.id}`} className="btn btn-danger">Play</Link>
                        <div className="btn btn-dark">My List</div>
                    </div>
                    <p>
                        {item.overview}
                    </p>
                </div>
            </header>
        }
        </>
    )
}

export default Header