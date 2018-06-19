---
title: "CS: Data Structures"
date: "2018-06-18"
slug: "data-structures"
lead: "Four data structures: Array List, Linked List, Binary Search Tree (BST), Hash Tables"
backgroundColor: "#994133"
image: "/posts/bst.png"
---

## Array List
Array Lists are characterized by the following:
1. Values are indexed.
2. Fast access: Index maps directly to value.
3. Slow search: Each element needs to potentially be traversed.
4. Slow delete/insert: Delete/inserts requires all subsequent values to be re-indexed.

### Big-O
- **Access:** `O(1)`
- **Search/Insert/Delete:** `O(n)`

```javascript
class ArrayList {
  constructor () {
    this.length = 0
    this.data = {}
  }

  get (index) {
    return this.data[index]
  }

  push (value) {
    this.data[this.length] = value
    this.length += 1
    return value
  }

  pop () {
    return this.delete(this.length - 1)
  }

  delete (index) {
    const item = this.get(index)
    this._collapseTo(index)
    return item
  }

  _collapseTo(index) {
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i]
    }
    delete this.data[this.length - 1]
    this.length -= 1
  }
}
```
<br/><hr/>

## Linked List
Linked Lists are characterized by the following:
1. Values stored in nodes.
2. Each node points to next node.
3. Slow access/search: Needs to traverse links to access or find element.
4. Fast insertion/deletion: Only involves changing pointer to next node.

### Big-O
- **Access/Search:** `O(n)`
- **Insertion/Deletion:** `O(1)`

```javascript
class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.tail = null
    this.head = null
    this.length = 0
  }

  push (value) {
    const node = new Node(value)
    this.length === 0
      ? this.head = node
      : this.tail.next = node
    this.tail = node
    this.length++
    return value
  }

  get (index) {
    return this._getNode(index).value
  }

  pop () {
    return this.delete(this.length - 1)
  }

  delete (index) {
    const { next, value } = this._getNode(index)

    if (index === 0) {
      this.head = this._getNode(index + 1)
    } else {
      const secondToIndexNode = this._getNode(index - 1)
      secondToIndexNode.next = next
      if (index === this.length - 1) {
        this.tail = secondToIndexNode
      }
    }
    this.length--
    return value
  }

  _getNode (index) {
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node.next
    }
    return node
  }
}
```
<br/><hr/>

## Binary Search Tree
Binary Search Trees are characterized by the following:
1. Nodes have left or right children.
2. Left child smaller, right child larger.
3. Duplicate values go on one side of the tree.
4. Access/Search/Insertion/Deletion all similar speeds.
5. Worst case scenario if value sorted, so tree has an imbalanced, large, deeply linked list.

### Big-O
- **Typical Access/search/insertion/deletion:** `O(log(n))`
- **Worst Access/search/insertion/deletion:** `O(n)`

```javascript
class BinNode {
  constructor (value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinTree {
  constructor () {
    this.root = null
  }

  add (value) {
    const node = new BinNode(value)
    !this.root
      ? this.root = node
      : this._placeNode(node)
  }

  _placeNode (node) {
    let compareNode = this.root
    let placed = false
    while (!placed) {
      if (node.value <= compareNode.value) {
        if (compareNode.left === null) {
          compareNode.left = node
          placed = true
        } else {
          compareNode = compareNode.left
        }
      } else {
        if (compareNode.right === null) {
          compareNode.right = node
          placed = true
        } else {
          compareNode = compareNode.right
        }
      }
    }
  }
}
```
<br/><hr/>

## Hash Tables
Hash tables are characterized by the following:
1. Requires large memory pool set beforehand.
2. Hashing function that takes value and computes pointer in pool.
3. Constant time search, insertion, deletes.
4. No direct access, no ordering.
5. Hashing function needs: performance, good distribution, minimize collisions.
6. If many collisions appear, value becomes a linked list with `O(n)`

### Big-O
- **Typical Search/insertion/deletion:** `O(1)`
- **Worst Ssearch/insertion/deletion:** `O(n)`

```javascript
class HashTable {
  constructor(size=255) {
    this.size = size
    this.table = new Array(this.size);
  }
  add(input) {
    this.table[this.hash(input)] = input;
  }
  check(input) {
    return !!this.table[this.hash(input)];
  }
  hash(input) {
    let num = 0;
    for (let i = 0; i < input.length; i++) {
      num += input.charCodeAt(i) * i;
    }
    return num % this.size;
  }
}
```
