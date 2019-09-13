// Compared to the script in the previous version, this script introduces React for improved rendering
// application state object
let state = {
	loading: false,
	query: '',
	results: null,
};

// UI components, mapping props (data) to UI (React elements)
// No longer returning strings. Instead, returning React elements.
function UI(props) {
	return [
		React.createElement(SearchBox, { query: props.query, onChange: doSearch }),
		props.loading && React.createElement(LoadingPlaceholder, { query: props.query }),
		props.results && React.createElement(DomainsList, { domains: props.results }),
	];
}

function SearchBox(props) {
	return [
		'Enter a domain name or keyword: ',
		React.createElement('input', { type: 'text', value: props.query, onChange: props.onChange }),
	];
}

function LoadingPlaceholder(props) {
	return React.createElement('div', null, 'Searching for ', props.query, '...');
}

function DomainsList(props) {
	return React.createElement('ul', null, props.domains.map(Domain));
}

function Domain(props) {
	return React.createElement('li', null, props.domain_name, ' (', props.cost, ')');
}

// Event handlers
function doSearch(event) {
	const query = event.target.value;
	setState({ loading: true, query });

	WPCOM()
		.domains()
		.suggestions(query)
		.then(results => {
			if (state.query !== query) {
				return;
			}
			setState({ loading: false, results });
		})
		.catch(() => {
			setState({ loading: false });
		});
}

function render() {
	const container = document.querySelector('main');
	const ui = React.createElement(UI, state);
	ReactDOM.render(ui, container);
}

function setState(newState) {
	state = { ...state, ...newState };
	render();
}

// Do the initial render!
render();
