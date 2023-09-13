
import { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Header.css'

const Header = () => {

    const [card, setCard] = useState([]);
    const [selectActors,setSelectActors] = useState([])
    const [remainingSalary,setRemainingSalary] = useState(20000);
    const [constSalary,setConstSalary] = useState(0) ;
    
    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
   
const handleSelectActors = (actor) =>{
    const isExist = selectActors.find((exist) => exist.id == actor.id);

    let costSalary = actor.salary ;
    
    if(isExist){
        return alert('this person already selected!')
    }
    else{
        selectActors.forEach(item =>{
            costSalary = costSalary + item.salary
        });

        const remainingSalary = 20000 - costSalary ;
        // console.log(remainingSalary);
        if(remainingSalary < 0){
            return alert('tomar taka nai re vai!')
        }
        else{
            setRemainingSalary(remainingSalary)
            setConstSalary(costSalary);
            setSelectActors([...selectActors, actor]);
        }
    } 
}

    // console.log(remainingSalary);
    return (
        <div>
            <h3>this is header</h3>
           <div className='container'>
              <div className='card-container'>
                {
                    card.map((card)=> <Card key={card.id} 
                    card={card}
                    handleSelectActors={handleSelectActors}
                    ></Card>)
                }
              </div>
              <div className="card-details">
                <h2>Selector Actors: {selectActors.length}</h2>
                <h4>Remaining: {remainingSalary} $</h4>
                <h4>Toral Cost: {constSalary} $</h4>
                <ol>
                {
                    selectActors.map((item,idx) => <li key={idx}>{item.name}</li>)
                }
                </ol>
              </div>
           </div>
        </div>
    );
};

export default Header;