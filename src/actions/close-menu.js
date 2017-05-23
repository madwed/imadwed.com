import { CLOSE_MENU } from '../action-types';

export default function closeMenu() {
  return (dispatch, getState) => {
    dispatch({
      type: CLOSE_MENU,
    });
  };
}
