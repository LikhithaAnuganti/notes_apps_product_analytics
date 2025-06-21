# 🗒️ Notes Apps Reviews Analysis & Summarization

This project compares and analyzes reviews from popular note-taking apps such as **Notion**, **OneNote**, **Evernote**, **GoodNotes**, **Apple Notes**, and **Bear**, collected from both the **Google Play Store** and **Apple App Store**. It combines data scraping, pivot-based analytics, NLP sentiment analysis, and GenAI-powered summarization to uncover trends, insights, and user sentiment across platforms.

---

## 📌 Project Highlights

- 🔄 **Multi-platform review scraping**
  - Google Play reviews fetched using Python libraries
  - Apple App Store reviews collected via a Node.js script

- 📊 **Data analysis in Excel**
  - Pivot tables and charts for:
    - Average rating per app and platform
    - Yearly trends and MoM % changes
    - App popularity and performance across platforms

- 💬 **Sentiment analysis (NLP)**
  - Cleaned and tokenized review text
  - Polarity scoring to classify sentiment
  - Trend analysis over time based on sentiment shift

- 🤖 **AI summarization**
  - Uses OpenAI API to generate summaries of user feedback
  - Helps highlight common themes, issues, and praises

---

## 🛠️ Tools & Technologies

| Purpose              | Tool/Library              |
|----------------------|---------------------------|
| Review Scraping      | `google-play-scraper` (Python), `app-store-scraper` (Node.js) |
| Data Handling        | `pandas`, `openpyxl`, `csv` |
| Visualization        | Microsoft Excel (Pivot tables & charts) |
| Sentiment Analysis   | `TextBlob`, `NLTK`, `spaCy` |
| GenAI Summarization  | OpenAI API (`gpt-4`) |
| Version Control      | Git + GitHub              |

---


