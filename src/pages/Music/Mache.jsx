import bandImage from '../../assets/mache-burdock.JPEG';

import './Music.css';

function Mache() {
    return (
        <div className="band">
            <img src={bandImage} />
            <p className='bandText'>
                mache is an indie rock band I joined when it started 2 years ago. It taught me a great deal
                about collaborating with new people, and introduced me to a vibrant local creative community.
                The band’s growing local presence has helped me build a network of creatives that I tap into frequently.
                <br></br><br></br>mache has played a number of benefit, charity, and diversity shows.<br></br><br></br>Photo by Olivia Dans.
            </p>
        </div>
    )
}

export default Mache;