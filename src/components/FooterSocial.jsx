import { DIRECTIONS } from "../constants";

const FooterSocial = () => {
    return <div className="address">
        <div className="logo">
            <h3>Retrotons tees</h3>
        </div>
        {
            DIRECTIONS?.map((item, i) => (
                <div className="item" key={i}>
                    <div className="logo">
                        <img src={item.icon} alt="" />
                    </div>
                    <div className="info">
                        <span>{item.type}</span>
                        <p>{item.address}</p>
                    </div>
                </div>
            ))
        }
    </div>
}
export default FooterSocial;