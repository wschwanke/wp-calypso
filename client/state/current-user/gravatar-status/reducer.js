/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import {
	GRAVATAR_UPLOAD_RECEIVE,
	GRAVATAR_UPLOAD_REQUEST,
	GRAVATAR_UPLOAD_REQUEST_SUCCESS,
	GRAVATAR_UPLOAD_REQUEST_FAILURE
} from 'state/action-types';
import { createReducer } from 'state/utils';
import { itemsSchema } from './schema';

export const isUploading = createReducer( false, {
	[ GRAVATAR_UPLOAD_REQUEST ]: () => true,
	[ GRAVATAR_UPLOAD_REQUEST_SUCCESS ]: () => false,
	[ GRAVATAR_UPLOAD_REQUEST_FAILURE ]: () => false
} );

export const items = createReducer( {}, {
	[ GRAVATAR_UPLOAD_RECEIVE ]: ( state, action ) => {
		return {
			expiration: action.expiration,
			tempImage: action.tempImage
		};
	}
}, itemsSchema );

export default combineReducers( {
	isUploading,
	items
} );