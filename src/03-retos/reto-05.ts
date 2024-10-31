console.log("************** CHALLENGE 05 *********************");

interface TreeNode<T> {
    value: T; // El valor que almacena el nodo.
    children: TreeNode<T>[]; // Un array de hijos que son también nodos.
  }