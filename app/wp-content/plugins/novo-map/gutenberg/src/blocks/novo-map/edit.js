import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import {
	Spinner,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	RangeControl,
	CheckboxControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { STORE_NAME } from '../../stores/novo-map-gmap';
import { Gmap } from '../../components/gmap';

class Edit extends Component {
	constructor( props ) {
		super( ...arguments );

		const { containerId } = props.attributes;

		// set unique container ID on 1st load
		if ( ! containerId ) {
			this.props.setAttributes( {
				containerId: Math.random().toString( 36 ).substring( 7 ),
			} );
		}

		this.state = {
			currentMap: {},
		};
	}

	componentDidUpdate( prevProps ) {
		if (
			! Object.keys( prevProps.gmapList ).length &&
			Object.keys( this.props.gmapList ).length
		) {
			this.setCurrentMap();
		}
		if (
			prevProps.attributes.currentMapId !==
			this.props.attributes.currentMapId
		) {
			this.setCurrentMap();
		}
	}

	setCurrentMap() {
		const mapId = this.props.attributes.currentMapId;
		if ( mapId > 0 ) {
			const gmapList = this.props.gmapList;
			const map = gmapList[ mapId ];
			const mapOptions = [
				'width',
				'height',
				'zoom',
				'latitude',
				'longitude',
				'type_menu',
				'zoom_button',
			];
			for ( const atts in this.props.attributes ) {
				if ( mapOptions.includes( atts ) ) {
					map[ atts ] = this.props.attributes[ atts ];
				}
			}
			this.setState( {
				currentMap: map,
			} );
		}
	}

	generateSelectOptions() {
		const gmapList = this.props.gmapList;
		const selectOptions = [
			{
				value: 0,
				label: __( 'Select a Novo-map', 'novo-map' ),
				disabled: true,
			},
		];
		for ( const key in gmapList ) {
			const gmap = gmapList[ key ];
			const option = {};
			option.value = gmap.id;
			option.label = gmap.name;
			selectOptions.push( option );
		}
		return selectOptions;
	}

	displayMap = ( id ) => {
		this.props.setAttributes( {
			currentMapId: parseInt( id ),
		} );
	};

	onChangeWidth = ( width ) => {
		//check if it's any number followed by "px" or "%"
		if ( /\d*(?:px|%)/i.test( width ) ) {
			const map = this.state.currentMap;
			map.width = width;
			this.props.setAttributes( { width } );
			this.setState( { currentMap: map } );
		}
	};

	onChangeHeight = ( height ) => {
		//check if it's any number followed by "px" or "%"
		if ( /\d*px/i.test( height ) ) {
			const map = this.state.currentMap;
			map.height = height;
			this.props.setAttributes( { height } );
			this.setState( { currentMap: map } );
		}
	};

	onChangeZoom = ( zoom ) => {
		if ( zoom ) {
			const map = this.state.currentMap;
			map.zoom = zoom;
			this.props.setAttributes( { zoom: parseInt( zoom ) } );
			this.setState( { currentMap: map } );
		}
	};

	onChangeLatitude = ( latitude ) => {
		if ( latitude ) {
			const map = this.state.currentMap;
			map.latitude = latitude;
			this.props.setAttributes( { latitude: parseFloat( latitude ) } );
			this.setState( { currentMap: map } );
		}
	};

	onChangeLongitude = ( longitude ) => {
		if ( longitude ) {
			const map = this.state.currentMap;
			map.longitude = longitude;
			this.props.setAttributes( { longitude: parseFloat( longitude ) } );
			this.setState( { currentMap: map } );
		}
	};

	onChangeTypeMenu = ( typeMenu ) => {
		const map = this.state.currentMap;
		map.type_menu = typeMenu;
		this.props.setAttributes( { type_menu: typeMenu } );
		this.setState( { currentMap: map } );
	};

	onChangeZoomButton = ( zoomButton ) => {
		const map = this.state.currentMap;
		map.zoom_button = zoomButton;
		this.props.setAttributes( { zoom_button: zoomButton } );
		this.setState( { currentMap: map } );
	};

	render() {
		const { className, attributes, gmapList } = this.props;
		const { currentMapId, containerId } = attributes;

		// return a Spinner while the maps are loading
		if ( ! Object.keys( gmapList ).length ) {
			return (
				<div className={ className }>
					<Spinner />
					{ __( 'Loading Maps', 'novo-map' ) }
				</div>
			);
		}

		// generate array of options for select menu
		const selectOptions = this.generateSelectOptions();

		// display a map selector and a gmap if one is selected
		return (
			<>
				{ Object.keys( this.state.currentMap ).length > 0 && (
					<InspectorControls>
						<PanelBody
							title={ __(
								'Overwrite default map settings',
								'novo-map'
							) }
						>
							<TextControl
								label={ __(
									'Map width (in % or px)',
									'novo-map'
								) }
								placeholder={ this.state.currentMap.width }
								onChange={ this.onChangeWidth }
							/>
							<TextControl
								label={ __( 'Map height (in px)', 'novo-map' ) }
								placeholder={ this.state.currentMap.height }
								onChange={ this.onChangeHeight }
							/>
							<RangeControl
								label={ __( 'Map zoom', 'novo-map' ) }
								placeholder={ this.state.currentMap.zoom }
								onChange={ this.onChangeZoom }
								value={ this.state.currentMap.zoom }
								min={ 0 }
								max={ 20 }
							/>
							<PanelRow>
								{ __(
									'Click on the map to prefill lat/long',
									'novo-map'
								) }
							</PanelRow>
							<TextControl
								label={ __( 'Center latitude', 'novo-map' ) }
								type="number"
								step="0.000001"
								id={ 'novomap' + containerId + '-latitude' }
								placeholder={ this.state.currentMap.latitude }
								onChange={ this.onChangeLatitude }
							/>
							<TextControl
								label={ __( 'Center longitude', 'novo-map' ) }
								type="number"
								step="0.000001"
								id={ 'novomap' + containerId + '-longitude' }
								placeholder={ this.state.currentMap.longitude }
								onChange={ this.onChangeLongitude }
							/>
							<CheckboxControl
								label={ __(
									'Display Type control menu?',
									'novo-map'
								) }
								checked={ this.state.currentMap.type_menu }
								onChange={ this.onChangeTypeMenu }
							/>
							<CheckboxControl
								label={ __(
									'Display Zoom button?',
									'novo-map'
								) }
								checked={ this.state.currentMap.zoom_button }
								onChange={ this.onChangeZoomButton }
							/>
						</PanelBody>
					</InspectorControls>
				) }

				<div className={ className }>
					<SelectControl
						value={ currentMapId }
						onChange={ this.displayMap }
						options={ selectOptions }
					/>
					{ Object.keys( this.state.currentMap ).length > 0 && (
						<Gmap
							gmap={ this.state.currentMap }
							containerId={ containerId }
						/>
					) }
				</div>
			</>
		);
	}
}

export default withSelect( ( select ) => {
	return {
		gmapList: select( STORE_NAME ).getGmapList(),
	};
} )( Edit );
