/**
 * Instagram Post URL Extractor for @jdkplastering
 *
 * This script helps you extract Instagram post URLs from your @jdkplastering account.
 *
 * INSTRUCTIONS:
 * 1. Go to https://www.instagram.com/jdkplastering
 * 2. Open Developer Tools (F12)
 * 3. Go to Console tab
 * 4. Paste this script and press Enter
 * 5. Copy the output and use it to update your Instagram API
 */

function extractInstagramPosts() {
  const posts = []

  // Find all post links on the page
  const postLinks = document.querySelectorAll('a[href*="/p/"]')

  postLinks.forEach((link, index) => {
    const href = link.getAttribute('href')
    if (href && href.includes('/p/')) {
      const fullUrl = href.startsWith('http')
        ? href
        : `https://www.instagram.com${href}`

      // Try to get image from the link
      const img = link.querySelector('img')
      const imgSrc = img ? img.getAttribute('src') : null

      posts.push({
        id: `post_${index + 1}`,
        url: fullUrl,
        type: 'post', // You'll need to manually identify reels
        preview: imgSrc,
        caption: '', // Add manually
        likes: 0, // Add manually
        comments: 0, // Add manually
      })
    }
  })

  return posts
}

// Run the extraction
const extractedPosts = extractInstagramPosts()

console.log('=== INSTAGRAM POSTS EXTRACTED ===')
console.log(`Found ${extractedPosts.length} posts from @jdkplastering`)
console.log('\nCopy this array and use it in your API:')
console.log(JSON.stringify(extractedPosts, null, 2))

console.log('\n=== MANUAL STEPS NEEDED ===')
console.log('1. Update each post URL if needed')
console.log('2. Add captions for each post')
console.log('3. Mark reels as type: "reel"')
console.log('4. Add likes and comments counts')
console.log('5. Replace placeholder images with actual preview URLs')

// For easier copying
window.jdkPosts = extractedPosts
console.log('\n=== QUICK ACCESS ===')
console.log('Posts saved to: window.jdkPosts')
console.log('Copy to clipboard: copy(JSON.stringify(window.jdkPosts, null, 2))')
