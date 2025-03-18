# 🖥 My Campaigns & Donations - Server Side (Backend)

এই প্রজেক্টটি **Node.js & Express.js** ভিত্তিক একটি ব্যাকএন্ড সার্ভার যেখানে ব্যবহারকারীরা **ডোনেশন ক্যাম্পেইন তৈরি, ডাটা সংরক্ষণ ও ম্যানেজ** করতে পারে। ব্যাকএন্ড অংশটি **MongoDB** ব্যবহার করে ডাটাবেজ ম্যানেজ করে এবং **Vercel** ব্যবহার করে ডেপলয় করা হয়েছে।

---

## 🚀 ফিচারসমূহ

- 🔹 **ব্যবহারকারী ভিত্তিক ক্যাম্পেইন ফিল্টার**।
- 🔹 **ডাটা তৈরি, পড়া, আপডেট ও মুছে ফেলার (CRUD) সুবিধা**।
- 🔹 **MongoDB ব্যবহার করে ডাটা স্টোরেজ**।
- 🔹 **Vercel API Endpoints ব্যবহারের সুবিধা**।
- 🔹 **CORS & Middleware ব্যবহার করে নিরাপত্তা নিশ্চিত**।

---

## 🛠 টেকনোলজি ব্যবহার করা হয়েছে

- **Node.js** - সার্ভার রানের জন্য।
- **Express.js** - API রাউটিং ও Middleware ব্যবহারের জন্য।
- **MongoDB & Mongoose** - NoSQL ডাটাবেজ ব্যবহারের জন্য।
- **dotenv** - গোপন তথ্য সংরক্ষণের জন্য।
- **Cors** - Cross-Origin Resource Sharing নিরাপত্তার জন্য।

---

## 📥 প্রজেক্ট রান করার নিয়ম

### 🔹 **প্রয়োজনীয় টুলস ইনস্টল করুন**
```sh
npm install


🔹 ডেভেলপমেন্ট সার্ভার চালান
sh
Copy
Edit
npm run dev
🚀 এখন তোমার সার্ভার http://localhost:5000 এ চলবে!

🌍 API রুটসমূহ (Routes)
Route	Method	Description
/myCampaigns?email={user.email}	GET	ইউজারের ক্যাম্পেইন ডাটা আনা
/campaign	POST	নতুন ক্যাম্পেইন তৈরি করা
/campaign/{_id}	DELETE	নির্দিষ্ট ক্যাম্পেইন ডিলিট করা
/campaign/{_id}	PUT	ক্যাম্পেইন আপডেট করা
/myDonateCampaigns?email={user.email}	GET	ইউজারের ডোনেশন হিস্টোরি আনা
📂 পরিবেশ ভেরিয়েবল (Environment Variables)
প্রজেক্টের .env ফাইলে নিচের সেটআপ করুন:

sh
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
🚀 Vercel-এ ডেপলয়মেন্ট গাইড
🔹 1. Vercel CLI ইনস্টল করুন
sh
Copy
Edit
npm install -g vercel
🔹 2. Vercel Login করুন
sh
Copy
Edit
vercel login
🔹 3. Vercel প্রজেক্ট ডেপলয় করুন
sh
Copy
Edit
vercel
(প্রথমবার রান করলে কিছু প্রশ্ন করবে, এগুলো ঠিকভাবে সিলেক্ট করো)

🔹 4. API লিংক সেটআপ করুন
Vercel ডেপলয় হওয়ার পর API লিংক পাবেন, সেটা Client Side-এ আপডেট করুন।

📝 ডেভেলপার ইনফো
👨‍💻 ডেভেলপার: Ariful Islam
📧 ইমেইল: arifuldeveloper70@gmail.com
🌐 ওয়েবসাইট: https://fanding-donate.web.app/
⭐ কন্ট্রিবিউশন
এই প্রজেক্টে কন্ট্রিবিউট করতে চাইলে Pull Request পাঠান অথবা Issue খুলুন।

🚀 ধন্যবাদ! তোমার সাহায্য অন্যদের জন্য পরিবর্তন আনতে পারে। ❤️

markdown
Copy
Edit

---

### **✅ Server Side README.md তে যা আছে:**
1. **প্রজেক্টের পরিচিতি ও উদ্দেশ্য**  
2. **ফিচার লিস্ট** (CRUD, MongoDB, Vercel Deployment)  
3. **ব্যবহৃত টেকনোলজি**  
4. **API রাউটস টেবিল আকারে**  
5. **Environment Variables (.env) কনফিগারেশন**  
6. **Vercel-এ কিভাবে ডেপলয় করতে হবে**  
7. **ডেভেলপার ইনফো ও কন্ট্রিবিউশন গাইডলাইন**  

এটা **Vercel হোস্টিং সহ প্রোফেশনাল README**, যা GitHub বা অন্য প্ল্যাটফর্মে ব্যাকএন্ড ডকুমেন্টেশনের জন্য পারফেক্ট! 🚀🔥






