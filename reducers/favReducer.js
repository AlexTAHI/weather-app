import { FAVORIS_CHANGE } from '../constants';

const initialState = {
    favoris: {
        'state': false,
        'icon': 'heart-outline',
    },
};

export default favReducer = (state = initialState, action) => {
    switch(action.type) {
        case FAVORIS_CHANGE:
            return {
                ...state,
                favoris: action.payload,
            };
        default:
            return state;
    }
}