import { spliteando } from "../js/ej47";

test("probando split", () => {
    console.log = jest.fn();

    spliteando();
    expect(console.log).toHaveBeenCalledWith(['Matías', 'Germán', 'Nicolás', 'Silvia', 'Estefi', 'Patricia', 'Ramóm'])
})