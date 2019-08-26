/* Recursively use Object.freeze.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |obj   |object|Object to freeze|
 * |return|object|Object passed in|
 */

/* example
 * const a = {b: {c: 1}};
 * freezeDeep(a);
 * a.b.c = 2;
 * console.log(a); // -> {b: {c: 1}}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function freezeDeep<T>(obj: T): T;
 */

_('freeze keys isObj');

exports = function(obj) {
    freeze(obj);

    keys(obj).forEach(function(prop) {
        const val = obj[prop];

        if (isObj(val) && !Object.isFrozen(val)) exports(val);
    });

    return obj;
};
