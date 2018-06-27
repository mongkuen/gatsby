```javascript
import React from 'react'

function ItemList({items}) {
  return items.length ? (
    <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
  ) : 'no items'
}

export default ItemList

import React from 'react'
import ReactDOM from 'react-dom'
import ItemList from '../item-list'

const root = document.createElement('div')

test('Has empty state', () => {
  ReactDOM.render(<ItemList items={[]} />, root)
  expect(root.textContent).toMatch('no items')
})

test('Renders items', () => {
  const items = ['apple', 'orange', 'pear']
  ReactDOM.render(<ItemList items={items} />, root)
  expect(root.textContent).toMatch('apple')
  expect(root.textContent).toMatch('orange')
  expect(root.textContent).toMatch('pear')
})
```
