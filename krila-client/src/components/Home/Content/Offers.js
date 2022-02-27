import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className="container">
            <div className="home-content">
                <div className="cat-offers">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="cat-sec-1">
                                <img src="images/cat-1.jpg" className="img-responsive" alt="" />
                                <div className="cat-desc">
                                    <div className="cat-inner">
                                        <div className="cat-title">Мъже</div>
                                        <Link to="/men" className="btn btn-border">Пазарувай</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cat-sec-2">
                                <img src="images/cat-2.jpg" className="img-responsive" alt="" />
                                <div className="cat-desc">
                                    <div className="cat-inner">
                                        <div className="cat-title">Жени</div>
                                        <Link to="/women" className="btn btn-border">Пазарувай</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cat-sec-3">
                                <img src="images/cat-3.jpg" className="img-responsive" alt="" />
                                <div className="cat-desc">
                                    <div className="cat-inner">
                                        <div className="cat-title">Деца</div>
                                        <Link to="/kids" className="btn btn-border">Пазарувай</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;