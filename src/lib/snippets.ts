export type Snippet = {
    number: number,
    heading: string,
    description: string;
    content: string;
    copyright: string;
}

export function shuffle(array: Snippet[]) {
    return array.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

export const snippets: Snippet[] = [
    {
        "number": 1,
        "heading": "allEqual",
        "description": "This snippet checks whether all elements of the array are equal.",
        "content": "const allEqual = arr => arr.every(val => val === arr[0]);\n\nallEqual([1, 2, 3, 4, 5, 6]); // false\nallEqual([1, 1, 1, 1]); // true",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 2,
        "heading": "castArray",
        "description": "This snippet converts a non-array value into array.",
        "content": "const castArray = val => (Array.isArray(val) ? val : [val]);\n\ncastArray('foo'); // ['foo']\ncastArray([1]); // [1]",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 3,
        "heading": "Create Directory",
        "description": "This snippet uses existsSync() to check whether a directory exists and then mkdirSync() to create it if it doesn’t.",
        "content": "const fs = require('fs');\nconst createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);\ncreateDirIfNotExists('test'); \n// creates the directory 'test', if it doesn't exist",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 4,
        "heading": "difference",
        "description": "This snippet finds the difference between two arrays.",
        "content": "const difference = (a, b) => {\n  const s = new Set(b);\n  return a.filter(x => !s.has(x));\n};\n\ndifference([1, 2, 3], [1, 2, 4]); // [3]",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 5,
        "heading": "distance",
        "description": "This snippet returns the distance between two points by calculating the Euclidean distance.",
        "content": "const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);\n\ndistance(1, 1, 2, 3); // 2.23606797749979",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 6,
        "heading": "elementContains",
        "description": "This snippet checks whether the parent element contains the child.",
        "content": "const elementContains = (parent, child) => parent !== child && parent.contains(child);\n\nelementContains(document.querySelector('head'), document.querySelector('title')); // true\nelementContains(document.querySelector('body'), document.querySelector('body')); // false",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 7,
        "heading": "Filter Duplicate Elements",
        "description": "This snippet removes duplicate values in an array.",
        "content": "const filterNonUnique = arr => [ …new Set(arr)];\nfilterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 8,
        "heading": "Get Time From Date",
        "description": "This snippet can be used to get the time from a Date object as a string.",
        "content": `const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);\n\ngetColonTimeFromDate(new Date()); // "08:38:00"`,
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 9,
        "heading": "Get Days Between Dates",
        "description": "This snippet can be used to find the difference in days between two dates.",
        "content": "const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>\n  (dateFinal - dateInitial) / (1000 * 3600 * 24);\n  \ngetDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 10,
        "heading": "hide",
        "description": "This snippet can be used to hide all elements specified.",
        "content": "const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));\n\nhide(document.querySelectorAll('img')); // Hides all <img> elements on the page",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 11,
        "heading": "insertAfter",
        "description": "This snippet can be used to insert an HTML string after the end of a particular element.",
        "content": `const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);\n\ninsertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>`,
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 12,
        "heading": "insertBefore",
        "description": "This snippet can be used to insert an HTML string before a particular element.",
        "content": `const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);\n\ninsertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>`,
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 13,
        "heading": "intersection",
        "description": "This snippet can be used to get an array with elements that are included in two other arrays.",
        "content": "const intersection = (a, b) => {\n  const s = new Set(b);\n  return a.filter(x => s.has(x));\n};\n\nintersection([1, 2, 3], [4, 3, 2]); // [2, 3]",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 14,
        "heading": "is",
        "description": "This snippet can be used to check if a value is of a particular type.",
        "content": "const is = (type, val) => ![, null].includes(val) && val.constructor === type;\n\nis(Array, [1]); // true\nis(ArrayBuffer, new ArrayBuffer()); // true\nis(Map, new Map()); // true\nis(RegExp, /./g); // true\nis(Set, new Set()); // true\nis(WeakMap, new WeakMap()); // true\nis(WeakSet, new WeakSet()); // true\nis(String, ''); // true\nis(String, new String('')); // true\nis(Number, 1); // true\nis(Number, new Number(1)); // true\nis(Boolean, true); // true\nis(Boolean, new Boolean(true)); // true",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 15,
        "heading": "isAnagram",
        "description": "This snippet can be used to check whether a particular string is an anagram with another string.",
        "content": "const isAnagram = (str1, str2) => {\n  const normalize = str =>\n    str\n      .toLowerCase()\n      .replace(/[^a-z0-9]/gi, '')\n      .split('')\n      .sort()\n      .join('');\n  return normalize(str1) === normalize(str2);\n};\n\nisAnagram('iceman', 'cinema'); // true",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 16,
        "heading": "isBrowser",
        "description": "This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node).",
        "content": "const isBrowser = () => ![typeof window, typeof document].includes('undefined');\n\nisBrowser(); // true (browser)\nisBrowser(); // false (Node)",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 17,
        "heading": "isBrowserTabFocused",
        "description": "This snippet can be used to determine whether the browser tab is focused.",
        "content": "const isBrowserTabFocused = () => !document.hidden;\n\nisBrowserTabFocused(); // true",
        "copyright": 'Created by <a href="https://fatosmorina.medium.com/" target="_BLANK" rel="noopener noreferrer">Fatos Morina</a> on <a href="https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5" target="_BLANK" rel="noopener noreferrer">Medium.com</a>',
    },
    {
        "number": 18,
        "heading": "isValidJSON",
        "description": "This snippet can be used to check whether a string is a valid JSON.",
        "content": `const isValidJSON = str => {\n  try {\n    JSON.parse(str);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n\nisValidJSON('{"name":"Adam","age":20}'); // true\nisValidJSON('{"name":"Adam",age:"20"}'); // false\nisValidJSON(null); // true`,
        "copyright": 'Created by <a href="https://twitter.com/30secondsofcode" target="_BLANK" rel="noopener noreferrer">30secondsofcode</a> on <a href="https://www.30secondsofcode.org/js/s/is-valid-json" target="_BLANK" rel="noopener noreferrer">www.30secondsofcode.org</a>',
    },
    {
        "number": 19,
        "heading": "copyToClipboard",
        "description": "copy text to clipboard",
        "content": `const copyToClipboard = str => {\n    const el = document.createElement('textarea');\n    el.value = str;\n    el.setAttribute('readonly', '');\n    el.style.position = 'absolute';\n    el.style.left = '-9999px';\n    document.body.appendChild(el);\n    const selected =\n      document.getSelection().rangeCount > 0\n        ? document.getSelection().getRangeAt(0)\n        : false;\n    el.select();\n    document.execCommand('copy');\n    document.body.removeChild(el);\n    if (selected) {\n      document.getSelection().removeAllRanges();\n      document.getSelection().addRange(selected);\n    }\n  };\n  \n  Examples\n  \n  copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.`,
        "copyright": 'Created by <a href="https://twitter.com/30secondsofcode" target="_BLANK" rel="noopener noreferrer">30secondsofcode</a> on <a href="https://www.30secondsofcode.org/js/s/copy-to-clipboard" target="_BLANK" rel="noopener noreferrer">www.30secondsofcode.org</a>',
    },
    {
        "number": 20,
        "heading": "clone object",
        "description": "clone an object for flat and nested objects",
        "content": "let obj = { a: 1, b: 2};\nlet clone = { ...obj };\nclone.b = 4;\n// obj = { a: 1, b: 2}, clone = { a: 1, b: 4 }\n\nlet otherClone = Object.assign({}, obj);\notherClone.b = 6;\nclone.b = 4;\n// obj = { a: 1, b: 2}, otherClone = { a: 1, b: 6 }\n\n // for nested objects\nlet obj = { a: 1, b: { c: 2 } };\nlet clone = JSON.parse(JSON.stringify(obj));\nclone.b.c = 4;\n// obj = { a: 1, b: { c: 2 }}, clone = { a: 1, b: { c: 4 } }",
        "copyright": 'Created by <a href="https://twitter.com/chalarangelo" target="_BLANK" rel="noopener noreferrer">Angelos Chalaris</a> on <a href="https://www.30secondsofcode.org/blog/s/javascript-shallow-deep-clone" target="_BLANK" rel="noopener noreferrer">www.30secondsofcode.org</a>',
    },
    {
        "number": 21,
        "heading": "merge arrays",
        "description": "merge two arrays with spread",
        "content": "const a = [1, 2, 3];\nconst b = [4, 5, 6];\n\nconst merged = [...a, ...b]; // [1, 2, 3, 4, 5, 6]",
        "copyright": 'Created by <a href="https://twitter.com/chalarangelo" target="_BLANK" rel="noopener noreferrer">Angelos Chalaris</a> on <a href="https://www.30secondsofcode.org/blog/s/javascript-merge-arrays" target="_BLANK" rel="noopener noreferrer">www.30secondsofcode.org</a>',
    },
    {
        "number": 22,
        "heading": "groupBy",
        "description": "Groups the elements of an array based on the given function.",
        "content": "const groupBy = (arr, fn) =>\n  arr\n    .map(typeof fn === 'function' ? fn : val => val[fn])\n    .reduce((acc, val, i) => {\n      acc[val] = (acc[val] || []).concat(arr[i]);\n      return acc;\n    }, {});\n\nExamples\n\ngroupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}\ngroupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}",
        "copyright": 'Created by <a href="https://twitter.com/30secondsofcode" target="_BLANK" rel="noopener noreferrer">30secondsofcode</a> on <a href="https://www.30secondsofcode.org/js/s/group-by" target="_BLANK" rel="noopener noreferrer">www.30secondsofcode.org</a>',
    },
    {
        "number": 23,
        "heading": "mocking text generator",
        "description": "MoCking sPOngEbOb sqUArepAnTs TexT gENeraTOR",
        "content": `function mock(s) {\n    return s.split("").map((c) => Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase()).join("")\n}\n\nmock("Mocking spongebob squarepants meme") // "moCking SPONgeboB SqUaRepaNtS meme"`,
        "copyright": 'Created by me... sort of',
    },
    {
        "number": 24,
        "heading": "deepMapKeys",
        "description": "Deep maps an object's keys.",
        "content": `const deepMapKeys = (obj, fn) =>\n  Array.isArray(obj)\n    ? obj.map(val => deepMapKeys(val, fn))\n    : typeof obj === 'object'\n    ? Object.keys(obj).reduce((acc, current) => {\n        const key = fn(current);\n        const val = obj[current];\n        acc[key] =\n          val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : val;\n        return acc;\n      }, {})\n    : obj;\n\nExamples\n\nconst obj = {\n  foo: '1',\n  nested: {\n    child: {\n      withArray: [\n        {\n          grandChild: ['hello']\n        }\n      ]\n    }\n  }\n};\nconst upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());\n/*\n{\n  "FOO":"1",\n  "NESTED":{\n    "CHILD":{\n      "WITHARRAY":[\n        {\n          "GRANDCHILD":[ 'hello' ]\n        }\n      ]\n    }\n  }\n}\n*/`,
        "copyright": 'Created by <a href="https://twitter.com/30secondsofcode" target="_BLANK" rel="noopener noreferrer">30secondsofcode</a> on <a href="https://www.30secondsofcode.org/js/s/deep-map-keys" target="_BLANK" rel="noopener noreferrer">www.30secondsofcode.org</a>',
    }
];

export function can_open(snippet: Snippet, date?: number) {
    return snippet.number <= (date ?? new Date().getDate());
}