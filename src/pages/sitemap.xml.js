export async function GET({ site }) {
  const posts = await import.meta.glob('../content/blog/*.md', { eager: true });
  
  const urls = Object.values(posts).map((post) => {
    const slug = post.frontmatter.slug || 
      Object.keys(posts).find(k => posts[k] === post)
        .split('/').pop().replace('.md', '');
    return `
  <url>
    <loc>${site}blog/${slug}/</loc>
    <lastmod>${new Date(post.frontmatter.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${site}blog/</loc>
    <priority>0.9</priority>
  </url>${urls}
</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
