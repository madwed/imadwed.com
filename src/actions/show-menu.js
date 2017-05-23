import { SHOW_MENU } from '../action-types';

export default function showMenu() {
  return (dispatch, getState) => {
    dispatch({
      type: SHOW_MENU,
    });
  };
}
