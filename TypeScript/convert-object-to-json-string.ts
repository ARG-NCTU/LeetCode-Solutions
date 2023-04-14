// Time:  O(n)
// Space: O(n)

// dfs
function jsonStringify(object: any): string {
    let result = [];
    let dfs = (object: any) => {
        if (object === null) {
            result.push('null');
            return;
        }
        if (typeof object === 'number' || typeof object === 'boolean') {
            result.push(String(object));
            return;
        }
        if (typeof object === 'string') {
            result.push(`"${object}"`);
            return;
        }
        if (Array.isArray(object)) {
            result.push('[');
            for (let x of object) {
                dfs(x);
                result.push(',');
            }
            if (object.length) {
                result.pop();
            }
            result.push(']');
            return;
        }
        result.push('{');
        for (let key in object) {
            result.push(`"${key}":`)
            dfs(object[key]);
            result.push(',');
        }
        if (Object.keys(object).length) {
            result.pop();
        }
        result.push('}');
    }

    dfs(object);
    return result.join('');
};