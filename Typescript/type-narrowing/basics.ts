// Narrowing

// typeof object => array in js
// typeof "" => string

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase(); // first check
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }

  id.toLowerCase();
}

// types of type guards

// ("string");
// ("number");
// ("bigint");
// ("boolean");
// ("symbol");
// ("undefined");
// ("object");
// ("function");

/* You’ll notice that we’ve gotten rid of the error above by checking if strs is truthy. This at least prevents us from dreaded errors when we run our code like:

TypeError: null is not iterable*/

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
