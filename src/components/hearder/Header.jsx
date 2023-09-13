
import { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Header.css'
import Swal from 'sweetalert2';
const Header = () => {

    const [card, setCard] = useState([]);
    const [selectActors,setSelectActors] = useState([])
    const [remainingSalary,setRemainingSalary] = useState(30000);
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
        Swal.fire('Already Exist This Person!')
    }
    else{
        selectActors.forEach(item =>{
            costSalary = costSalary + item.salary
        });

        const remainingSalary = 30000 - costSalary ;
        // console.log(remainingSalary);
        if(remainingSalary < 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
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
            <h2>Avengers to Know and Add To Your Next Muvie</h2>
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
                <h2>Selected Actors: {selectActors.length}</h2>
                <h4>Remaining: {remainingSalary} $</h4>
                <h4>Toral Cost: {constSalary} $</h4>
               <ol>
               {
                    selectActors.map((item,idx) =><li className='area' key={idx}>{item.name}</li>)
                }
               </ol>
              </div>
           </div>
        </div>
    );
};

export default Header;