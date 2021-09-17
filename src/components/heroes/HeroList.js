import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

    // esto podemos usar useMemo para volver a renderizarlo
    // const heroes = getHeroesByPublisher( {publisher})
    const heroes = useMemo( () => getHeroesByPublisher({publisher}), [publisher] );

    return (
        <>
            {heroes.map(hero => (
                <HeroCard key={hero.id}
                    {...hero}
                />
            ))}
        </>
    )
}
