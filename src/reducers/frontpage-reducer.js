import * as c from '../actions/ActionTypes';

let initialState = {
	isLoading: false,
	SummonerDTO: [],
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case c.REQUEST_SUMMONER_INFO:
			return Object.assign({}, state, {
				isLoading: true
			});
		case c.GET_SUMMONER_SUCCESS:
			return Object.assign({}, state, {
				isLoading: false,
				SummonerDTO: action.SummonerDTO
			});
		case c.GET_SUMMONER_FAILURE:
			return Object.assign({}, state, {
				isLoading: false,
				error: action.error
			});
		default:
			return state;
	}
};