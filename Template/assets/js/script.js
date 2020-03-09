var students = [{
        name: 'tran van a',
        className: '.net'
    },
    {
        name: 'tran van b',
        className: '.net'
    },
    {
        name: 'tran van c',
        className: 'angular'
    },
    {
        name: 'tran van d',
        className: 'angular'
    },
    {
        name: 'tran van e',
        className: 'java'
    },
    {
        name: 'tran van f',
        className: 'java'
    },
    {
        name: 'tran van g',
        className: 'java'
    },
    {
        name: 'tran van h',
        className: 'test'
    },
    {
        name: 'tran van i',
        className: 'test'
    },
    {
        name: 'tran van j',
        className: 'test'
    },
];
var subjectFilter = document.querySelector('#subject__filter');
subjectFilter.addEventListener('change', () => {
    var contentFilter = students.filter((item) => {
        return item.className === subjectFilter.value;
    });
    render(contentFilter);
});

function render(students) {
    var className = document.querySelector('#className');
    var content = students.map((item) => {
        return '<option>' + item.name + '</option>';


    });
    className.innerHTML = content;
}
render(students);