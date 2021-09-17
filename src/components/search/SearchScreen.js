import React, {useMemo} from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const {query = ''} = queryString.parse(location.search);
    
    const [formValues, handleInputChange ] = useForm({
        searchText: query
    });
    
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?query=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch} className="form-inline">
                        <input type="text" value={ searchText } className="form-control"placeholder="Find Heroe" name="searchText" onChange={handleInputChange} autoComplete="off"/>
                        <button type="submit" className="btn d-block m-1 btn-outline-info">
                            SEARCH
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <h4>Results</h4>
                    <hr/>

                    {
                        ((query === '') 
                        && <div className="alert alert-info">Search a Hero!</div>)
                        ||
                        ((query !== '' && heroesFiltered.length === 0 ) 
                        && <div className="alert alert-danger">No hero with his name</div>)

                    }
                    
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={ hero.id } { ...hero }/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
