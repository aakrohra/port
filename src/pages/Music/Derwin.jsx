import bandImage from '../../assets/derwin-bampot.JPG';

import './Music.css';

function Derwin() {
    return (
        <>
            <div className="band">
                <img src={bandImage} />
                <p className='bandText'>
                    Derwin was a garage-rock band formed in my first year. What set it apart was the unique backgrounds of every member,
                    pursuing the varying fields of Cognitive Science, Economics, Environmental Studies, and Engineering.
                    This introduced me to cross-sections between disciplines as we would discuss our academic pursuits alongside our
                    collective passion for the arts.
                    
                    <br></br>You can listen to the Derwin EP <i>Tendon</i> below.<br></br><br></br>Photo by Crystal Zhu.
                </p>
            </div>
            <div className="spotifyWrapper">
                <iframe 
                    src="https://open.spotify.com/embed/album/6tDXBXWre38efkZgtvkoVp"
                    allow="encrypted-media"
                    title="Derwin EP"
                    frameBorder="0"
                    width="300"
                    height="380"
                />
            </div>
        </>
    )
}

export default Derwin;