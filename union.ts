let score: number | string | boolean = 33;
score = "3";
score = true;

function newThing(id: string | number) {
    //   id.toLowerCase -> this is not possible because its treating it as both string + num so its a new DT
    if (typeof id === "string") id.toLowerCase;

}

// array-
const data: number[] = [1,2,3]
const data2: string[] = ['1','2']
const data3: (string | number)[] = ["1",2]
