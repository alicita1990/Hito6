import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Pizza = () => {
    const { id } = useParams(); 
    const { data } = useContext(Pizzacontext);
    const pizzadetalle = data.find ()
    
    const [pizza, setPizza] = useState(null);

    const getPizza = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
            const pizzaData = await res.json();
            setPizza(pizzaData);
        } catch (error) {
            console.error("Error al obtener la pizza:", error);
        }
    };

    React.useEffect(() => {
        getPizza();
    }, []);

    const Pizza = data.find(p => p.id === id);

    return (
        <div className='cardPizza'>
            <Header />
            <style>{`
                .cardPizza {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            `}</style>
            {pizza && (
                <MyCard 
                    key={pizza.id}
                    id={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                    desc={pizza.desc}
                />
            )}
        </div>
    );
};

export default Pizza;
