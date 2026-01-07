# Next.js PWA Blog

A modern, responsive Progressive Web App (PWA) blog built with Next.js that displays cryptocurrency news and static blog posts.

## Features

- **Crypto News**: Fetches and displays the latest news from TechCrunch and The Next Web using NewsAPI
- **Search & Filter**: Client-side search across article titles, descriptions, and content
- **Static Blog Posts**: Dedicated section for static blog content
- **PWA Ready**: Installable as a PWA with offline capabilities
- **Dark/Light Theme**: Toggle between themes with system preference support
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Infinite Scroll**: Load more news articles as you scroll

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **PWA**: next-pwa
- **Theming**: next-themes
- **Icons**: Lucide React
- **API**: NewsAPI for news data

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-pwa-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```
   NEWS_API_KEY=your_newsapi_key_here
   ```
   
   Get your free API key from [NewsAPI](https://newsapi.org/)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with news
│   ├── posts/
│   │   ├── page.tsx        # List all blog posts
│   │   └── [id]/
│   │       └── page.tsx    # Individual post page
│   └── news/
│       └── [slug]/
│           └── page.tsx    # Individual news article page
├── components/
│   ├── news-client.tsx     # News filtering and display
│   ├── infinite-news.tsx   # Infinite scroll news list
│   ├── news-filters.tsx    # Search and category filters
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme-toggle.tsx    # Theme toggle button
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── posts.ts            # Static blog posts data
│   └── news.ts             # News fetching logic
└── public/
    ├── manifest.json       # PWA manifest
    └── icons/              # PWA icons
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Routes

- `/` - Home page with crypto news
- `/posts` - List of all blog posts
- `/posts/[id]` - Individual blog post
- `/news/[slug]` - Individual news article

## PWA Features

- Installable on desktop and mobile
- Offline caching of static assets
- Background sync for news updates
- Push notifications (can be added)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
