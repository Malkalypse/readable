import { readable, log, el, show } from './readable.js';

window.myNull = null;
window.myBool = true;
window.myNum = 123;
window.myStr = 'this is a string';
window.myEmptyString = '';
window.myArray = [1, 2, 3, 4];
window.myObj = {myKey: 'my value'};
window.myNullObj = {myNull: null};

window.myObjArray = [{key1: 'value 1'}, {key2: 'value 2'}, {key3: 'value 3'}];

window.myCompoundObj = {
	myStr: 'this is a string',
	myNum: 456,
	myBool: false,
	myArr: [5, 6, 7, 8],
	myNestedObj: {myNestedKey: 'my nested value'},
	myNestedArray: [{a: 'a'}, {b: 'b'}, {c: 'c'}]
}

el( `
window.myNull = null;
window.myBool = true;
window.myNum = 123;
window.myStr = 'this is a string';
window.myEmptyString = '';
window.myArray = [1, 2, 3, 4];
window.myObj = {myKey: 'my value'};
window.myNullObj = {myNull: null};

window.myObjArray = [{key1: 'value 1'}, {key2: 'value 2'}, {key3: 'value 3'}];

window.myCompoundObj = {
	myStr: 'this is a string',
	myNum: 456,
	myBool: false,
	myArr: [5, 6, 7, 8],
	myNestedObj: {myNestedKey: 'my nested value'},
	myNestedArray: [{a: 'a'}, {b: 'b'}, {c: 'c'}]
}`, 'div', true
)

show( `` ); // null
show( `myNull` ); // null
show( `myBool` ); // true
show( `myNum` ); // 123
show( `myStr` ); // 'this is a string'
show( `myStr`, false ); // this is a string
show( `myEmptyString` );	// ''
show( `myArray` ); // [1, 2, 3, 4]
show( `myObj` ); // {myKey: 'my value'}
show( `myObj`, false ); // // {myKey: my value}
show( `myNullObj` ); // {}

show( `myObjArray`, true, true ); // [{key1: 'value 1'}, {key2: 'value 2'}, {key3: 'value 3'}]

show( `myCompoundObj`, true, true, true );
// {myStr: 'this is a string', myNum: 456, myBool: false, myArr: [5, 6, 7, 8], myNestedObj: {myNestedKey: 'my nested value'}, myNestedArray: [{a: 'a'}, {b: 'b'}, {c: 'c'}]}