import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroid} = useParams();

    // good case for use memo (render only if ID changes)
    // always is good to do with high procces
    // const hero = getHeroesById(heroid)
     const hero = useMemo( () => getHeroesById(heroid), [heroid] );


    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    console.log(id);

    return (
        <>
            <div className="col-5">
                <img src={`../assets/heroes/${id}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-7">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item  bg-dark text-light">Alter Ego: {alter_ego}</li>
                    <li className="list-group-item  bg-dark text-light">Publiser: {publisher}</li>
                    <li className="list-group-item  bg-dark text-light">Appeareance: {first_appearance}</li>
                </ul>

                <h5 className="mt-4">Charaters</h5>
                <p>{characters}</p>

                <button onClick={ handleReturn } className="btn btn-success">Return</button>
            </div>
        </>
    )
}
