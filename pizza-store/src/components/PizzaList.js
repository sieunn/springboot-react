import React,{useState, useEffect} from "react";
import axios from 'axios';
import '../css/PizzaList.css';

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:9090/api/pizza")
        .then(response => {
            setPizzas(response.data)
        })
        .catch(e=>alert("불러오는데 문제가 발생했습니다."));
    },[]);

    return(
        <div className="pizza-container">
            <h1>피자 메뉴</h1>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza.id}>
                        <div className="pizza-name">{pizza.name}</div>
                        <div className="pizza-description">{pizza.description}</div>
                        <div className="pizza-price">{pizza.price}</div>
                        <button>상세보기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PizzaList;