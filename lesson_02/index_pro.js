function compare(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }

    if (!node1 || !node2) {
        return false;
    }

    if (node1.value !== node2.value) {
        return false;
    }

    const leftComparison = compare(node1.left, node2.left);
    const rightComparison = compare(node1.right, node2.right);

    return leftComparison && rightComparison;
}

const tree1 = {
    value: 1,
    left: { value: 2, left: { value: 3 }, right: undefined },
    right: { value: 4 }
};

const tree2 = {
    value: 1,
    left: { value: 2, left: { value: 3 }, right: undefined },
    right: { value: 4 }
};

const tree3 = {
    value: 1,
    left: { value: 2, left: { value: 3 }, right: { value: 5 } },
    right: { value: 4 }
};

console.log(compare(tree1, tree2));
console.log(compare(tree1, tree3));