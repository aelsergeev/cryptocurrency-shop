import { combineReducers } from 'redux';
import auth from './auth';
import currency from './currency';
import transactions from './transactions';
import wallet from './wallet';
import user from './user';

export default combineReducers({ auth, wallet, transactions, currency, user });
