import './style.editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';

const atts = {
	containerId: {
		type: 'string',
		default: '',
	},
	currentMapId: {
		type: 'number',
		default: 0,
	},
	width: {
		type: 'string',
	},
	height: {
		type: 'string',
	},
	zoom: {
		type: 'number',
	},
	latitude: {
		type: 'number',
	},
	longitude: {
		type: 'number',
	},
	type_menu: {
		type: 'boolean',
	},
	zoom_button: {
		type: 'boolean',
	},
};

registerBlockType( 'novo-map-blocks/novo-map', {
	title: __( 'Novo-map Block', 'novo-map' ),
	description: __( 'Insert a map in your post', 'novo-map' ),
	category: 'widgets',
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width="20"
			height="20"
			fill="#fff"
		>
			<path d="M176.748 182.811h0l-.013-.028zm-70.406 138.92v.013l.094-.451zm103.464-90.712l.014-.061.087-.417zm26.455 155.117l.021-.068z" />
			<path d="M357.053 208.842c-22.333 0-40.421 18.095-40.421 40.421s18.089 40.421 40.421 40.421c22.326 0 40.421-18.095 40.421-40.421s-18.095-40.421-40.421-40.421zm0 60.632c-11.143 0-20.211-9.068-20.211-20.211s9.068-20.211 20.211-20.211 20.211 9.068 20.211 20.211-9.068 20.211-20.211 20.211zM256 0c-38.589 0-75.102 8.656-107.911 23.956A88.08 88.08 0 0 0 87.58 0C39.289 0 .001 38.535.001 85.895c0 17.812 10.907 40.26 24.367 61.238C8.806 180.183.001 217.047.001 255.999.001 397.379 114.601 512 256 512s255.999-114.621 255.999-255.999S397.4 0 256 0zM20.212 85.895c0-36.292 30.174-65.684 67.368-65.684 37.201 0 67.368 29.393 67.368 65.684 0 36.271-67.368 109.474-67.368 109.474S20.212 122.166 20.212 85.895zm-.002 170.101a234.3 234.3 0 0 1 17.631-89.293c14.801 20.13 29.527 36.547 34.87 42.348l14.868 16.162 14.868-16.162c12.146-13.191 72.71-81.132 72.71-123.156 0-16.855-5.045-32.546-13.628-45.824a234.16 234.16 0 0 1 51.301-15.839l-5.478 9.849c-2.647 4.796-3.632 9.943-3.658 15.023.055 6.393 1.549 12.84 5.524 18.513l-.013-.013 15.366 21.585c.842 1.145 1.967 3.509 2.702 6.137.754 2.627 1.179 5.558 1.172 7.842.007 1.037-.087 1.947-.202 2.594l.007-.021-3.989 21.733c-.215 1.449-1.482 4.291-3.354 6.649-1.819 2.398-4.257 4.331-5.605 4.904l-27.021 12.47c-8.643 4.021-13.703 12.564-13.703 21.477 0 3.267.694 6.649 2.162 9.836l11.406 24.831c.593 1.266 1.273 3.469 1.725 5.922a42.95 42.95 0 0 1 .707 7.619c0 2.162-.209 4.136-.499 5.389l-.134.546-3.106 13.488c-.33 1.623-1.786 4.675-3.793 7.249-1.967 2.614-4.541 4.803-6.016 5.544l-19.962 10.591c-1.024.58-3.348 1.192-5.807 1.166-2.971.047-6.056-.89-7.209-1.704l-16.33-10.516c-5.423-3.429-11.426-4.709-17.381-4.749-5.48.034-11.041 1.131-16.158 4.123l-16.354 9.679c-3.146 1.852-5.801 4.412-7.653 7.485-1.846 3.065-2.857 6.629-2.85 10.206-.027 5.376 2.264 10.665 6.09 14.599l-.013-.013 9.155 9.552c.829.835 2.054 2.768 2.87 5.039.829 2.256 1.287 4.837 1.273 6.77a10.41 10.41 0 0 1-.182 2.075l-1.826 8.745c-.404 2.069-1.846 5.706-3.759 8.974-1.867 3.288-4.299 6.36-5.881 7.747l-8.28 7.424c-5.51 4.966-12.632 12.396-17.711 18.384A234.79 234.79 0 0 1 20.21 255.996zm169.406 186.412l-10.576 36.413c-48.843-16.916-90.464-49.408-118.825-91.581l2.944-3.638c3.989-4.951 12.214-13.581 17.145-17.981l8.273-7.424c3.928-3.557 7.141-7.95 9.903-12.698 2.721-4.769 4.911-9.754 6.03-14.929l1.839-8.839c.41-2.028.593-4.069.593-6.117-.007-4.709-.922-9.331-2.513-13.716-1.617-4.372-3.866-8.515-7.249-12.073l-9.176-9.573-.357-.485.485-.397 16.385-9.688c.977-.627 3.354-1.321 5.841-1.294 2.695-.034 5.383.788 6.447 1.536l16.317 10.51c5.646 3.564 11.918 4.877 18.155 4.924 5.174-.027 10.381-.956 15.279-3.517l19.962-10.591c5.079-2.742 9.129-6.656 12.577-11.088 3.396-4.48 6.13-9.412 7.458-15.023l3.261-14.174c.701-3.186.977-6.44.984-9.782-.007-3.759-.364-7.585-1.051-11.298-.694-3.719-1.684-7.296-3.227-10.678l-11.432-24.886-.289-1.34c0-1.307.761-2.6 1.96-3.126l27.029-12.47c5.376-2.534 9.599-6.413 13.089-10.867 3.449-4.493 6.151-9.552 7.262-15.394l3.996-21.748c.378-2.069.525-4.136.533-6.198-.013-4.507-.714-9.041-1.96-13.399-1.266-4.359-3.012-8.529-5.673-12.295l-15.367-21.591c-.843-1.064-1.812-3.961-1.765-6.763-.021-2.209.552-4.265 1.105-5.194l12.753-22.919c6.036-.485 12.099-.809 18.244-.809 117.208 0 214.683 85.975 232.751 198.17l-9.027-5.019c-3.739-2.062-7.774-3.409-11.999-4.386-4.224-.956-8.569-1.489-12.827-1.495-2.317 0-4.601.155-6.892.559l-1.867.33c-17.055-31.763-50.577-53.422-89.085-53.422-55.72 0-101.052 45.332-101.052 101.052 0 34.055 33.435 83.28 59.203 116.163l-15.421 17.341c-.922 1.092-3.274 2.802-5.962 3.921-2.661 1.172-5.659 1.799-7.451 1.772l-.64-.021-29.461-2.27-.741-.162-.034-.013v-.101l.094-.606.027-.074 5.255-17.509a25.84 25.84 0 0 0 1.058-7.398c-.013-4.796-1.219-9.384-3.354-13.528-2.143-4.123-5.276-7.882-9.573-10.597l-11.816-7.383c-4.049-2.526-8.577-3.679-12.982-3.672-7.505.013-15.017 3.274-19.975 9.822l-35.819 47.758a23.51 23.51 0 0 0-4.703 14.114c-.007 7.12 3.241 14.255 9.418 18.896l13.103 9.822c.72.519 1.765 1.738 2.479 3.335.741 1.576 1.152 3.469 1.139 4.924a7.07 7.07 0 0 1-.235 1.877zm248.28-186.401c0 44.632-80.842 134.73-80.842 134.73s-80.842-90.099-80.842-134.73c0-44.665 36.19-80.843 80.842-80.843 44.645 0 80.842 36.177 80.842 80.843zM256 491.789c-19.86 0-39.154-2.5-57.593-7.148l10.624-36.615c.72-2.513 1.03-5.026 1.03-7.492-.013-4.696-1.077-9.216-2.999-13.393-1.933-4.157-4.722-8.031-8.711-11.041l-13.097-9.822c-.862-.64-1.321-1.631-1.327-2.721.007-.735.202-1.387.654-1.988l35.827-47.764c.66-.95 2.224-1.752 3.8-1.731.909 0 1.684.236 2.27.599l11.81 7.383c.694.418 1.657 1.408 2.351 2.762.701 1.34 1.098 2.971 1.085 4.224a5.68 5.68 0 0 1-.209 1.589l-5.234 17.462a22.17 22.17 0 0 0-.99 6.534c-.021 5.2 1.98 10.348 5.571 14.06 3.571 3.753 8.596 5.988 13.871 6.373l29.461 2.27c.735.055 1.462.081 2.19.081 5.416-.027 10.584-1.347 15.455-3.422 4.851-2.115 9.371-4.951 13.063-9.047l13.191-14.848c6.164 7.398 11.136 13.036 13.925 16.141l15.037 16.761 15.037-16.768c14.37-16.007 86.016-98.378 86.016-148.224 0-9.822-1.476-19.295-4.102-28.281.303-.007.573-.034.896-.034 2.5-.007 5.557.35 8.341.984 2.776.62 5.308 1.57 6.67 2.345l21.498 11.944c.242 4.325.384 8.664.384 13.036C491.79 386.013 386.014 491.789 256 491.789z" />
			<path d="M94.172 252.312l.011-.006.002-.001zM89.256 47.151c-18.614 0-33.677 15.07-33.677 33.684 0 18.607 15.064 33.684 33.678 33.684s33.69-15.077 33.69-33.684-15.077-33.684-33.691-33.684zm.001 47.157c-7.431.007-13.467-6.043-13.467-13.473s6.036-13.473 13.467-13.473c7.438 0 13.48 6.043 13.48 13.473a13.49 13.49 0 0 1-13.48 13.473z" />
		</svg>
	),
	keywords: [ __( 'map', 'novo-map' ), __( 'novo-map', 'novo-map' ) ],
	attributes: atts,
	edit: Edit,
	save() {
		return null;
	},
} );
