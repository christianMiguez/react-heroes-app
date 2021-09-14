import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    const {heroid} = useParams();


    const hero = getHeroesById(heroid)


    if (!hero) {
        return <Redirect to="/" />
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
        <div className="text-white">
            <h1>{superhero}</h1>
        </div>
    )
}
