from google_play_scraper import reviews, Sort
import pandas as pd

apps = {
    "OneNote": "com.microsoft.office.onenote",
    "Notion": "notion.id",
    "Evernote": "com.evernote",
    "GoodNotes": "com.goodnotes.android",
}

MAX_REVIEWS = 40000
BATCH_SIZE = 10000

all_reviews = []

for app_name, package_name in apps.items():
    print(f"Fetching reviews for {app_name}...")
    app_reviews = []
    count = 0
    continuation_token = None

    while count < MAX_REVIEWS:
        fetched_reviews, continuation_token = reviews(
            package_name,
            lang='en',
            sort=Sort.NEWEST,
            count=BATCH_SIZE,
            continuation_token=continuation_token
        )
        if not fetched_reviews:
            break  # No more reviews

        for r in fetched_reviews:
            app_reviews.append({
                "App": app_name,
                "User": r['userName'],
                "Date": r['at'],
                "Score": r['score'],
                "Review_ID": r['reviewId'],
                "Review": r['content'],
                "Version": r.get('reviewCreatedVersion'),
                "Reply": r.get('replyContent')
            })

        count += len(fetched_reviews)
        print(f"  Collected {count} reviews so far...")

        if continuation_token is None:
            break  # Last page

    all_reviews.extend(app_reviews)
    print(f"Total reviews collected for {app_name}: {len(app_reviews)}")

df = pd.DataFrame(all_reviews)
df.to_csv("google_play_reviews_bulk.csv", index=False)
print("Saved to google_play_reviews_bulk.csv")
