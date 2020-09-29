import * as c from './ActionTypes';

export const requestSummonerInfo = () => ({
    type: c.REQUEST_SUMMONER_INFO
});

export const summonerSuccess = (summoner) => ({
    type: c.GET_SUMMONER_SUCCESS,
    summoner
});

export const summonerFailure = (error) => ({
    type: c.GET_SUMMONER_FAILURE,
    error
})



export const makeApiCall = () => {
    return dispatch => {
      dispatch(requestSummonerInfo);
      return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(
          (jsonifiedResponse) => {
            dispatch(summonerSuccess(jsonifiedResponse.results));
          })
        .catch((error) => {
          dispatch(summonerFailure(error));
        });
    }
  }