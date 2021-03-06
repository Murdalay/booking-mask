import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { parseError } from 'modules/client';
import { ActionTypes, STATUS } from 'constants/index';

export const airportsListState = {
  data: [],
  status: STATUS.IDLE,
  message: '',
};

export default {
  airportsList: handleActions(
    {
      [ActionTypes.AIRPORTS_LIST_GET]: state => {
        return immutable(state, {
          data: { $set: [] },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        });
      },
      [ActionTypes.AIRPORTS_LIST_GET_SUCCESS]: (state, { payload }) => {
        return immutable(state, {
          data: { $set: payload.data || [] },
          status: { $set: STATUS.READY },
        });
      },
      [ActionTypes.AIRPORTS_LIST_GET_FAILURE]: (state, { payload }) =>
        immutable(state, {
          message: { $set: parseError(payload.message) },
          status: { $set: STATUS.ERROR },
        }),
    },
    airportsListState,
  ),
};
