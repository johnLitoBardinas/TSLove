// JS

class Person {
    constructor() {

    }

    function user() {
        const obj = {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@sample.com',
        };
        return obj;
    }
}

// TS

import { User } from "./user.interface";
import { PersonModel } from "./person.model";
class Children {
    function childName(params:type) {
        return 'child';
    }
}
class Person extends Children implements PersonModel {
    constructor() {

    }

    function user() {
        const obj: User = {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@sample.com',
        };
        return obj;
    }
}