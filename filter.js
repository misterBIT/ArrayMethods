// see console for output!

const lessons = [
    {
        title: 'Lesson 1',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Lesson 2',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Lesson 3',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Lesson 4',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000;
const searchTerm = 'array';

const filtered = lessons
    // only lessons with this tag
    .filter(lesson => lesson.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title}</li>`)
    .join('\n');



var output = `<ul>\n${filtered}\n</ul>`;

var container = document.querySelector('#output');
container.innerHTML = output