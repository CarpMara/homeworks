//Ex1
console.log('Ex1');

function modifyArray(array) {
    auxArray = [];
    auxArray.push(array[2]);
    auxArray.push(array[1]);
    array.pop();
    array.pop();
    array.push(auxArray[0]);
    array.push(auxArray[1]);
    return array;
}

initialArray = ['I', 'JavaScript', 'Love'];
modifyArray(initialArray);
console.log(initialArray);

//Ex2
console.log('Ex2');

function modifyArrayFromEx2(array) {
    for (var position in array) {
        console.log(position); //display position 
        console.log(array[position]); //display the value
        console.log(typeof array[position]); //and display the type

    }


}

arrayFromEx2 = ["Paul", 1, false, { name: "Jon Snow" },
    [1, 2, 3], null, undefined,
    function() { console.log('Test') }
];

modifyArrayFromEx2(arrayFromEx2);