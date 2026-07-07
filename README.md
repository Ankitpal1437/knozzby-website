# Knozzby Light — Website

Static website hai (HTML + CSS + JS, koi backend nahi). GitHub + Render pe deploy karna bilkul simple hai.

## Files
- `index.html` — poora page
- `style.css` — design
- `script.js` — product data + animations
- `images/` — 12 real product photos (client ke apne PDF se liye gaye)

⚠️ **Important:** `images` folder ko bhi upload karna hai GitHub pe, warna product cards mein photos nahi dikhenge.

## Step 1: GitHub pe upload
1. GitHub pe naya repo banao — e.g. `knozzby-website`
2. In teeno files (`index.html`, `style.css`, `script.js`, `README.md`) ko upload/push kar do
   ```
   git init
   git add .
   git commit -m "Knozzby website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/knozzby-website.git
   git push -u origin main
   ```

## Step 2: Render pe deploy (Static Site)
1. https://render.com pe login karo (GitHub se sign in kar sakte ho)
2. **New +** → **Static Site**
3. Apna `knozzby-website` repo select karo
4. Settings:
   - **Build Command:** (khaali chhod do / not required)
   - **Publish directory:** `.` (root)
5. **Create Static Site** dabao
6. 1-2 minute mein live URL mil jayega — jaise `knozzby-website.onrender.com`

## Aage kya edit karna ho
- Phone number badalna ho → `index.html` aur `script.js` mein "8421190818" search karke replace karo
- Product descriptions edit karni ho → `script.js` ke `products` array mein
- Colors badalne ho → `style.css` ke top pe `:root` variables mein (`--accent` waghera)
- Real product photos add karni ho → `product-card` ke andar `<img>` tag daal sakte ho, icon ki jagah

Custom domain (jaise knozzby.com) connect karna ho toh Render dashboard mein Settings → Custom Domain se ho jayega — DNS records client ke domain registrar (GoDaddy/etc) mein add karne honge.
