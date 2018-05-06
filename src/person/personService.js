import { capitalize, startCase } from 'lodash';


const steet = (person) => {
    return `${startCase(person.location.street)}`;
}

const city = (person) => {
    return `${startCase(person.location.city)}`;
}


const postcode = (person) => {
    return `${(person.location.postcode)}`;
}

export const getAddress = (person) => {
    return person
        ? `${steet(person)}`
        : ''
}

export const getCity = (person) => {
    return person
        ? `${city(person)}`
        : ''
}

export const getPostcode = (person) => {
    return person
        ? `${postcode(person)}`
        : ''
}

export const getName = (person) => {
    return person 
        ? `${capitalize(person.name.title)} ${capitalize(person.name.first)} ${capitalize(person.name.last)}`
        : ''
}

export const getMobile = (person) => {
    return person
        ? `${person.cell}`
        : ''
}

export const getImage = (person) => {
    return person
        ? `${person.picture.large}`
        : ''
}

export const getEmail = (person) => {
    return person
        ? `${person.email}`
        : ''
}

export const getState = (person) => {
    return person 
        ? `${capitalize(person.location.state)}`
        : ''
}