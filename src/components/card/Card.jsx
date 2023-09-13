import PropTypes from 'prop-types'
import "./Card.css";
const Card = ({card,handleSelectActors}) => {
    const {image,name,role,salary} = card ;
  return (<>
    <div className="container">
        <div className="card">
           <img className="card-photo" src={image}></img>
           <h3>{name}</h3>
           <p><small>hellow there, i am a web developer and my skills is not enough to learn</small></p>
           <div className="info">
                <h4>Salery: {salary} $</h4>
                <h4>{role}</h4>
           </div>
           <button onClick={() =>handleSelectActors(card)} className="button">Select</button>
        </div>
    </div>
 </>
  );
};
Card.propTypes ={
    card:PropTypes.object.isRequired,
    handleSelectActors: PropTypes.func.isRequired
}
export default Card;
