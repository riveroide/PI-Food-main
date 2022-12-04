import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDiets, postRecipes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeCreate.css"

function RecipeCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector(state => state.diets)

    const [dataSteps, setDataSteps] = useState("")

    const [input, setInput] = useState({
        name: '',
        summary: '',
        image: '',
        healthscore: '',
        dishtype: '',
        steps: [],
        diets: [],
    })

    useEffect(() => {
        dispatch(getDiets())

    }, [dispatch])



    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.name === "") {
            return alert("Por favor ingrese un nombre")
        }
        if (input.summary === "") {
            return alert("Por favor ingrese un resumen de plato")
        }
        if (input.image === "") {
            setInput({
                ...input,
                image: "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png"
            })
        }
        dispatch(postRecipes(input))
        alert("La receta fue creada exitosamente")
        setInput({
            name: '',
            summary: '',
            image: '',
            healthscore: '',
            steps: [],
            diets: [],
        })
        history.push('/home')
    }

    function handlerCheckbox(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        } else {
            setInput({
                ...input,
                diets: input.diets.map(r => r !== e.target.value)
            })

        }
    }

    function handlerAddSteps(e) {
        e.preventDefault();
        setInput({
            ...input,
            steps: [...input.steps, dataSteps]
        })

        setDataSteps("")
    }

    function handlerDeleteLast(e) {
        e.preventDefault();
        input.steps.pop();
        setInput({
            ...input,
        })
        setDataSteps("")
    }


    function handlerDeleteAll(e) {
        e.preventDefault();
        setInput({
            ...input,
            steps: []
        })
        setDataSteps("")
    }


    console.log(input)

    return (
        <div className="maincontainer">
            <div className="botondevolver">
                <Link to='/home'><button>Volver</button></Link>
            </div>

            <form onSubmit={e => handleSubmit(e)}>
                <section className="inputsycheck">
                    <div className="inputstexto">
                        <div>
                            <label>Nombre: </label>
                            <input type="text" className="inputdata" value={input.name} name="name" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Imagen: </label>
                            <input type="text" value={input.image} name="image" className="inputdata" onChange={handleChange}></input>
                        </div>
                        <div>
                            <label>Resumen:</label>
                            <textarea className="inputdata" value={input.summary} name="summary" rows="5" cols="35" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Tipo de plato: </label>
                            <input type="text" className="inputdata" value={input.dishtype} name="dishtype" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Health Score: </label>
                            <input name="healthscore" className="inputdata" type="number" min="1" max="100" value={input.healthscore} onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="containercheck">
                        <fieldset className="orgcontcheck">
                            <legend>Elija uno o más tipos de dietas</legend>

                            {
                                diets.map((e) => {
                                    return (
                                        <div className="organizadorcheck">
                                            <p className="textcheck">
                                            {e.name}
                                            </p>
                                            <input className="checkdietas" type="checkbox" name={e.name} value={e.name} onChange={(e) => handlerCheckbox(e)}></input>
                                        </div>


                                    )
                                })
                            }


                        </fieldset>
                    </div>
                </section>

                <section className="stepyrender">
                    <div className="stepbystep">
                        <legend>Pasos: </legend>
                        <textarea value={dataSteps} name="name" onChange={e => setDataSteps(e.target.value)} row="8" col="80"></textarea>
                        <div>
                            <input type="submit" name="agregar" value="Agregar paso" onClick={e => handlerAddSteps(e)} ></input>
                            <input type="submit" name="borrar" value="Borrar último" onClick={e => handlerDeleteLast(e)}></input>
                            <input type="submit" name="borrartodo" value="Borrar Todo" onClick={e => handlerDeleteAll(e)} ></input>
                        </div>
                    </div>

                    <div className="renderstepbystep">
                        <ol>
                            {
                                input.steps.map(e => {
                                    return (<>
                                        <li>{e}</li>
                                    </>
                                    )

                                })}
                        </ol>
                    </div>
                </section>







                <div className="mandareceta">
                    <button type="submit">CREAR RECETA</button>
                </div>

            </form>

        </div>
    );
}

export default RecipeCreate;