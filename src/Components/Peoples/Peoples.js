import React from 'react';
import homes from '../../json/game-of-thrones';
import People from './People/People';
import Example from './../Card/example';

class Peoples extends React.Component {
        constructor(){
            super()
            // this.house= this.props.match.params.homename;
        }

    render(){
            const house =this.props.match.params.homename;
            const home =homes.houses.filter((el)=>{return el.name == house});
            const peoples =home[0].people;
        return (
            <div>

                <h1>{house}</h1>
                {peoples.map((people, index)=>{
                    return <People people ={people}/>
                })}
                <Example peoples={peoples}/>
            </div>

        )
    }

}
export  default Peoples;