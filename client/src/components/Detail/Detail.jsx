import React from 'react';
import { Link } from "react-router-dom";
import { getRecipebyID, Loading} from '../../actions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

function Detail() {
    const dispatch = useDispatch();
    const recetas = useSelector((state) => state.recipeByID);
    const loader = useSelector(state => state.loader)

    console.log(recetas)
    const { id } = useParams();
    console.log(id)

    
    useEffect(async () => {
        dispatch(Loading());
        await dispatch(getRecipebyID(id));
        dispatch(Loading());
    }, [dispatch]);

    if(loader===true && recetas[0] && recetas[0].id==id){
        return (
            <div style={{backgroundColor:'aqua'}} >
                        <div>
                            <Link to={`/home`}>Volver</Link>
                        </div>
                        <h2>{recetas[0].name}</h2>
                        <img src={recetas[0].image} alt="img not found" width="350px" height="250px" />
                        <p>Resumen: {recetas[0].summary}</p>
                        <h3>Health Score: {recetas[0].healthscore}</h3>
                        <h4>Tipo de dieta: {recetas[0].diets}</h4>
                        <h4>Tipo de plato: {recetas[0].dishtypes}</h4>
                        <h5>Steps:</h5>
                        <ol>
                            {Array.isArray(recetas[0].steps) ? recetas[0].steps.map(e => {
                            return (
                                <li>{e}</li>
                            )
                        
                        
                        }) : <h5>{recetas[0].step}</h5>}</ol>
            </div>
        );
    }else{ return(
        <Loader/>
    )
        
    }
}

export default Detail;

