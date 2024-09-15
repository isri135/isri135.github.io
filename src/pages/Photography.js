import './Photography.css';

export default function Photography() {
    return (
        <div className="photogrid">
            <h2>Photography Portfolio</h2>
            <div className="grid-container">
                <img src='../../img/Photography/CN Tower.NEF' alt="Photography 1" className="grid-item"/>
                <img src="/path/to/image2.jpg" alt="Photography 2" className="grid-item"/>
                <img src="/path/to/image3.jpg" alt="Photography 3" className="grid-item"/>
                <img src="/path/to/image4.jpg" alt="Photography 4" className="grid-item"/>
                <img src="/path/to/image5.jpg" alt="Photography 5" className="grid-item"/>
                <img src="/path/to/image6.jpg" alt="Photography 6" className="grid-item"/>
            </div>
        </div>
    );
}
