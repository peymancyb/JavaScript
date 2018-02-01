// Any javascript engine has three kinds of memory models:
//
// Stack, which has the current function pointer an gets executed sequentially.
// Heap, this stores all the objects, functions basically anything that is initiated is stored here.
// Queue, all things to be executed is stored here and stack picks up tasks to do from the queue.
//
//
// What is the Execution Context?
// When code is run in JavaScript, the environment in which it is executed is very important, and is evaluated as 1 of the following:
//
// Global code – The default envionment where your code is executed for the first time.
// Function code – Whenever the flow of execution enters a function body.
// Eval code – Text to be executed inside the internal eval function.
//
//




// The best way to manage locally installed npm packages is to create a package.json
// file. A package.json file: lists the packages that your project depends on.
// allows you to specify the versions of a package that your project can use using
// semantic versioning rules.


//package-lock.json is automatically generated for any operations
//where npm modifies either the node_modules tree, or package.json .
//It describes the exact tree that was generated, such that subsequent
//installs are able to generate identical trees, regardless of intermediate
//dependency updates.

//This command repurposes package-lock.json into a publishable npm-shrinkwrap.json
//or simply creates a new one. The file created and updated by this command will
//then take precedence over any other existing or future package-lock.json files.


// It's important to communicate the extent of changes in a new release of code, 
// because sometimes updates can break code that a package needs
// (called dependencies).Semantic versioning (semver) is a standard that was designed
//  to solve this problem.



let private = new WeakMap();

function baseclass(secret) {
    private.set(this, {
      privateProperty: 'private'
    })

    private.get(this).privateProperty
}

function subclass() {
    var secret = {}, self = baseclass(secret);
    console.log(self.publicProperty);
    console.log(secret.privateProperty);
    return self;
}
