// import { createReducer } from '@reduxjs/toolkit';

// import {
// 	heroesFetching,
// 	heroesFetched,
// 	heroesFetchingError,
// 	heroDeleted,
// 	heroAdded,
// } from '../actions'

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

// const heroes = createReducer(initialState, {
// 		[heroesFetching]: state => { state.heroesLoadingStatus = 'loading' },
// 		[heroesFetched]: (state, action) => {
// 				state.heroesLoadingStatus = 'idle';	
// 				state.heroes = action.payload;
// 			},
// 		[heroesFetchingError]: state => { state.heroesLoadingStatus = 'error' },
// 		[heroDeleted]: (state, action) => {
// 				state.heroes = state.heroes.filter(item => item.id !== action.payload);	
// 			},
// 		[heroAdded]: (state, action) => {
// 				state.heroes = state.heroes.push(action.payload);	
// 			},
// 		},
// 	[],
// 	state => state
// )


// const heroes = createReducer(initialState, builder => {
// 	builder
// 		.addCase(heroesFetching, state => {
// 			state.heroesLoadingStatus = 'loading'
// 		})
// 		.addCase(heroesFetched, (state, action) => {
// 			state.heroes = action.payload,
// 			state.heroesLoadingStatus = 'loading'
// 		})
// 		.addCase(heroesFetchingError, state => {
// 			state.heroesLoadingStatus = 'error'
// 		})
// 		.addCase(heroDeleted, (state, action) => {
// 			state.heroes = state.heroes.filter(item => item.id !== action.payload)
// 		})
// 		.addCase(heroAdded, (state, action) => {
// 			state.heroes = state.heroes.push(action.payload)
// 		})

// })

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
// 				heroesLoadingStatus: 'idle'           
// 			}
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//         }
// 		case 'HERO_DELETED':
// 			return {
// 				...state,
// 				heroes: state.heroes.filter(item => item.id !== action.payload),
// 			}
// 		case 'HERO_ADDED':
// 			return {
// 				...state,
// 				heroes: [...state.heroes, action.payload],
// 			}
//         default: return state
//     }
// }

// export default heroes;