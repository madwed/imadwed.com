import { HIDE_MENU } from '../action-types';

export default function hideMenu() {
  return (dispatch, getState) => {
    dispatch({
      type: HIDE_MENU,
    });
  };
}
