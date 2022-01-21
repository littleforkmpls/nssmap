import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';

const DEFAULT_STATE = {
	gmapList: {},
};

const STORE_NAME = 'novo-map-blocks/gmap';

const actions = {
	setGmapList( gmapList ) {
		return {
			type: 'SET_GMAP_LIST',
			gmapList,
		};
	},
	getGmapList( path ) {
		return {
			type: 'GET_GMAP_LIST',
			path,
		};
	},
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case 'SET_GMAP_LIST': {
			return {
				...state,
				gmapList: action.gmapList,
			};
		}
		default: {
			return state;
		}
	}
};

const selectors = {
	getGmapList( state ) {
		const { gmapList } = state;
		return gmapList;
	},
};

const controls = {
	GET_GMAP_LIST( action ) {
		return apiFetch( { path: action.path } );
	},
};

const resolvers = {
	*getGmapList() {
		const gmapList = yield actions.getGmapList( '/novo-map/v1/gmap-list/' );
		return actions.setGmapList( gmapList );
	},
};

const storeConfig = {
	reducer,
	controls,
	selectors,
	resolvers,
	actions,
};

registerStore( STORE_NAME, storeConfig );

export { STORE_NAME };
