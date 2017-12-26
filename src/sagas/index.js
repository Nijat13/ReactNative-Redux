import { all } from 'redux-saga/effects';
import watchLogins from './login';

export default function* root() {
  yield all([
    watchLogins
  ]);
}
