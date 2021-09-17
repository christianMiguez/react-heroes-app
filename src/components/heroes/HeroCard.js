import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id, superhero, alter_ego, characters}) => {
    return (
        <div className="col-12 col-lg-6">
            <div className="card m-2" style={{maxWidth: 540}}>
                <div className="row">
                    <div className="col-md-4">
                        <img src={`./assets/heroes/${ id }.jpg`} alt={superhero} className="card-img animate__animated animate__fadeIn" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{superhero}</h4>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters)
                                && <p className="card-text">{characters}</p>

                            }
                            <Link to={`./hero/${id}`} className="btn btn-danger">
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
