import * as React from "react";
import { getAddress,
        getCity,
        getEmail,
        getMobile,
        getPostcode,
        getState,
        getImage,
        getName } from './personService';

const Person = (props) => {

    const name = `${getName(props.person)}`;
    const address = `${getAddress(props.person)} `;
    const postcode =  `${ getPostcode(props.person) }`;
    const city =  `${ getCity(props.person) }`;
    const state = `${ getState(props.person) }`;
    const mobile =  `Mobile: ${ getMobile(props.person) }`;
    const imageUrl =  `${ getImage(props.person) }`;
    const email = `Email: ${ getEmail(props.person) }`;

        return(
            <div style={style.person.card}>
               
                <div style={style.person.name}>
                    <p>{name} </p>
                  
                </div>
                <div style={style.person.details}>
                    <p style={style.person.detailsItem}>{address}</p>
                    <p style={style.person.detailsItem}>{city}</p>
                    <p style={style.person.detailsItem}>{state}</p>
                    <p style={style.person.detailsItem}>{postcode}</p>
                    <p style={style.person.detailsItem}>{mobile}</p>
                    <p style={style.person.detailsItem}>{email}</p>
                </div>

                <div style={style.person.image}>
                    <img style={style.person.image.userPhoto}
                        src={imageUrl}
                        alt="name"/>
                </div>
            </div>
        );
}


const style = {
    person: {
        card: {
            border: 1,
            borderColor: 'grey',
            borderRadius: 15,
            borderStyle: 'solid',
            borderWidth: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            maxWidth: 550,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            textAlign: 'left',
        },
        
        name: {
            borderBottom: 1,
            fontWeight: 600,
            textAlign: 'center'

        },

        details: {
            display: 'inline-block',
            verticalAlign: 'top',

        },
        detailsItem: {
            marginTop: 5,
            marginBottom: 5,
        },

        image: {
            display: 'inline-block',
            verticalAlign: 'top',
            marginTop: 10,
            marginLeft: 130,
            userPhoto: {
                width: 120,
                borderRadius: 60
            }
        }
    }
}

export default Person;