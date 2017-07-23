// @flow

/**
 * This function says hello.
 * @param name Some name to say hello to.
 * @returns The hello message.
 */
const sayHello = (name: string = 'World'): string => `Hello, ${name}!`;

export default sayHello;

export function Echo(message: string): string {
    return message;
}
