// import { createAction } from "@reduxjs/toolkit";
// import { heroesFetched, heroesFetchingError, heroesFetching } from '../components/heroesList/heroesSlice';
// import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/filtersSlice';

// export const fetchHeroes = (request) => (dispatch) => {
// 	dispatch(heroesFetching());
// 	request("http://localhost:3001/heroes")
// 		.then(data => dispatch(heroesFetched(data)))
// 		.catch(() => dispatch(heroesFetchingError()))
// }

// export const fetchFilters = (request) => (dispatch) => {
// 	dispatch(filtersFetching());
// 	request("http://localhost:3001/filters")
// 		.then(data => dispatch(filtersFetched(data)))
// 		.catch(() => dispatch(filtersFetchingError()))
// }



// export const filtersFetching = createAction('FILTERS_FETCHING');
// export const filtersFetched = createAction('FILTERS_FETCHED');
// export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');
// export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED');
// export const heroesFetching = createAction('HEROES_FETCHING');
// export const heroesFetched = createAction('HEROES_FETCHED');
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// export const heroDeleted = createAction('HERO_DELETED');
// export const heroAdded = createAction('HERO_ADDED');



// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }


// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }


// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }


// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }


// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }


// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }


// export const activeFilterChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }


// export const heroDeleted = (id) => {
//     return {
//         type: 'HERO_DELETED',
// 		payload: id
//     }
// }


// export const heroAdded = (hero) => {
//     return {
//         type: 'HERO_ADDED',
// 		payload: hero
//     }
// }

