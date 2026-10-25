# Corner Shop – Mini E-commerce (React + Redux Toolkit)

## Run it
```bash
npm install
npm run dev      # open the URL shown (usually http://localhost:5173)
npm run build    # production build
```
Requires Node.js 18+.

## Routes
| Path | Page |
|------|------|
| `/` | Home – welcome banner, buttons to Products and Cart |
| `/products` | 12 products, search + category filter, Add to Cart |
| `/cart` | Quantities (+ / −), remove, clear, total |
| `/checkout` | Order summary + form (bonus) |
| `/about` | Store info + link back to Home |
| `*` | 404 page |

## Redux Toolkit
`src/features/cart/cartSlice.js` – reducers: `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart`.
`src/app/store.js` – `configureStore()` and localStorage persistence.

## Checklist
- [x] Total items in navbar
- [x] Cart total price (navbar + cart page)
- [x] Empty cart message
- [x] Active nav link highlighted (`NavLink`)
- [x] 404 page
- [x] Confirmation toast after adding an item
- [x] Bonus 1: search + category filter
- [x] Bonus 2: cart persists in localStorage
- [x] Bonus 3: checkout page using `useNavigate()`
