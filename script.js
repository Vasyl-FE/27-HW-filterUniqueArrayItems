function unique(arr) {
    const set = new Set(arr);
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));
