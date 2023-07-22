import {toc} from 'mdast-util-toc';

/** @type {import('mdast').Root} */
const tree: import('mdast').Root = {
    type: 'root',
    children: [
        {
            type: 'heading',
            depth: 1,
            children: [{type: 'text', value: 'Alpha'}]
        },
        {
            type: 'heading',
            depth: 2,
            children: [{type: 'text', value: 'Bravo'}]
        },
        {
            type: 'heading',
            depth: 3,
            children: [{type: 'text', value: 'Charlie'}]
        },
        {
            type: 'heading',
            depth: 2,
            children: [{type: 'text', value: 'Delta'}]
        },
        {
            type: 'heading',
            depth: 1,
            children: [{type: 'text', value: 'Echo'}]
        }
    ]
};

const table = toc(tree);
console.dir(table, {depth: 3})