const store = require('app-store-scraper');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const apps = [
  { name: "Notes", id: 1110145109 },
  { name: "OneNote", id: 410395246 },
  { name: "Notion", id: 1232780281 },
  { name: "Evernote", id: 281796108 },
  { name: "GoodNotes", id: 1444383602 },
  { name: "Bear", id: 1016366447 }
];

const fetchReviewsForApp = async (app) => {
  const reviews = await store.reviews({
    id: app.id,
    sort: store.sort.RECENT,
    page: 1, // Increase to get more reviews
    country: 'us'
  });

  return reviews.map(r => ({
    App: app.name,
    UserName: r.userName,
    Title: r.title,
    Review: r.text,
    Rating: r.score,
    Date: r.date ? r.date.toISOString() : ""
  }));
};

(async () => {
  let allReviews = [];
  for (const app of apps) {
    console.log(`Fetching reviews for ${app.name}...`);
    const reviews = await fetchReviewsForApp(app);
    allReviews = allReviews.concat(reviews);
  }

  const csvWriter = createCsvWriter({
    path: 'apple_store_reviews.csv',
    header: [
      { id: 'App', title: 'App' },
      { id: 'UserName', title: 'User' },
      { id: 'Title', title: 'Title' },
      { id: 'Review', title: 'Review' },
      { id: 'Rating', title: 'Rating' },
      { id: 'Date', title: 'Date' }
    ]
  });

  await csvWriter.writeRecords(allReviews);
  console.log('Saved to apple_store_reviews.csv');
})();
