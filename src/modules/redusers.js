import { combineReducers } from 'redux';
import auth from './auth/reducer';
import currency from './currency/reducer';
import transactions from './transactions/reducer';
import wallet from './wallet/reducer';
import user from './user/reducer';

export default combineReducers({ auth, wallet, transactions, currency, user });
