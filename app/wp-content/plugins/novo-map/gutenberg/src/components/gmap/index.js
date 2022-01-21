import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

function createScript( containerId, scriptContent ) {
	const s = document.createElement( 'script' );
	s.type = 'text/javascript';
	s.id = containerId;
	s.async = true;
	s.innerHTML = scriptContent;
	document.body.appendChild( s );
}

function creatStyle( containerId, styleContent ) {
	const s = document.createElement( 'style' );
	s.id = containerId;
	s.innerHTML = styleContent;
	document.body.appendChild( s );
}

function createApiPath( gmap, containerId ) {
	let apiPath = '/novo-map/v1/gmap-script-css/';
	apiPath += gmap.id + '/';
	apiPath += containerId + '/';
	apiPath += gmap.zoom + '/';
	apiPath += gmap.latitude + '/';
	apiPath += gmap.longitude + '/';
	apiPath += gmap.type_menu + '/';
	apiPath += gmap.zoom_button;
	return apiPath;
}

function addGmapScriptCss( gmap, containerId ) {
	const apiPath = createApiPath( gmap, containerId );

	apiFetch( { path: apiPath } )
		.then( ( gmapScriptCss ) => {
			const gmapInitName = 'initialize_novomap' + containerId;
			const scriptId = containerId + '-script';
			let gmapInit = window[ gmapInitName ];

			//add all necessary style for the infoboxes
			gmapScriptCss.css.forEach( ( style, index ) => {
				const styleId = containerId + '-style-' + index;
				if ( !! document.getElementById( styleId ) ) {
					document.getElementById( styleId ).remove();
					creatStyle( styleId, style );
				} else {
					creatStyle( styleId, style );
				}
			} );

			//add the gmap script
			if ( typeof gmapInit === 'undefined' ) {
				createScript( scriptId, gmapScriptCss.script );
				gmapInit = window[ gmapInitName ];
				gmapInit();
			} else {
				document.getElementById( scriptId ).remove();
				//console.log( gmapScriptCss.script );
				createScript( scriptId, gmapScriptCss.script );
				gmapInit = window[ gmapInitName ];
				gmapInit();
			}
		} )
		.catch( ( error ) => {
			console.log( 'error', error );
		} );
}

function Gmap( { gmap = null, containerId } ) {
	useEffect( () => {
		addGmapScriptCss( gmap, containerId );
	}, [
		gmap.id,
		gmap.zoom,
		gmap.latitude,
		gmap.longitude,
		gmap.type_menu,
		gmap.zoom_button,
	] );

	return (
		<div
			className="novo-map-container-admin"
			id={ 'novomap' + containerId }
			style={ { width: gmap.width, height: gmap.height } }
		/>
	);
}

export { Gmap };
