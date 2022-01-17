import { FAVORIS_CHANGE } from '../constants';

export function changeFavoris(favoris) {
    return {
        type: FAVORIS_CHANGE,
        payload: favoris,
    }
}