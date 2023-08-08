export function template(templateVariable, targetObject) {
    for (const prop in templateVariable) {
        if (templateVariable.hasOwnProperty(prop)) {
            targetObject[prop] = templateVariable[prop];
        }
    }
}