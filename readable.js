/** Display data in an easily-readable format
 * @param data any The data to format
 * @param q boolean Whether strings should be enclosed in quotes
 * @return string
 */
export const readable = ( data, q = true ) => {

	// Null
		if( data === null || data === undefined ) return null;

	// Boolean or number
		if( typeof data === 'boolean' || typeof data === 'number' ) return data;

	// Strings
		if( typeof data === 'string' ) {
			return !q || (data.startsWith( "'" ) && data.endsWith( "'" ))
				? data
				: `'${data}'`
		}

	// Arrays
		if( Array.isArray( data ) ) {
			return `[${data.map( item => readable( item, q ) ).join( ', ' )}]`;
		}

	// Objects
		if( typeof data === 'object' ) {
			let entries = Object.entries( data ).map( ([key, value]) => {
				return value == null || value === '' || ( Array.isArray( value ) && value.length === 0 )
					? ''
					: `${key}: ${readable( value, q )}`
			} ).filter( item => item ).join( ', ' );

			return `{${entries}}`
		}

	// Other
		return data;
}


/** Skip typing "console" before logging a value
 * @param val any The value to log to the console
 */
export const log = ( val ) => console.log( val );


/** Append an element
 * @paremt content any The content to place in the element
 * @param tag string The tag to use
 * @param parent HTMLElement What the new element should be parented to
 */
export const el = ( content, tag = 'div', pre = false, parent = document.body ) => {
	if( pre ) content = `<pre>${content}</pre>`;
	parent.appendChild( document.createElement( tag ) ).innerHTML = content;
}


/** Show the data passed to readable() along with its returned value
 * @param v any The value to show
 * @param q boolean Whether strings should be enclosed in quotes
 * @param br1 boolean Whether to add a line break before the added element
 * @param br1 boolean Whether to add a line break between the passed data value and the returned value
 */
export const show = ( str, q = true, br1 = false, br2 = false ) => {
	br1 = br1 ? '<br>' : '';
	br2 = br2 ? '<br>' : ' ';
	const qstr = q ? '' : ', false';

	const str2 = str === `null` || str === ``
		? `null`
		: `window.${str}`

	el( `${br1}readable( ${str}${qstr} ): ${br2}<code>${ readable( eval( str2 ), q )}</code>` );
}

