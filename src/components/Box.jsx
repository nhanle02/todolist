import { Link } from "react-router-dom";

function Box() {
    return (  
        <>
        
        <div className="broad__item__content-box">
            {/* <div className="broad__item__content__box-img">
                <img className="image" src="" alt="" />
            </div> */}
            <div className="broad__item__content__box-wrap">
                <Link to="/update-broad">
                <h3 className="broad__item__content__box-title">redux</h3>
                </Link>
                <div className="broad__item__content__box-assign">
                    <i className="fas fa-user"></i>
                    <select name="assign" id="assign" className="broad__item__content__box-select">
                    <option value="nhan">nhan</option>
                    </select>
                </div>
                <div className="broad__item__content__box-state">
                    <span className="broad__item__content__box__state-text">State</span>
                    <select name="state" id="state" className="broad__item__content__box-select">
                    <option value="todo">To do</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    );
}

export default Box;