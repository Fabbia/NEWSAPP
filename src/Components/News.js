import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
        {
          source: { id: null, name: "NDTV News" },
          author: "NDTV Sports Desk",
          title:
            "Commonwealth Games 2022 Day 1 Live Updates: PV Sindhu Stars In Win vs Pakistan, India 4-0 Up in Hockey - NDTV Sports",
          description:
            "CWG 2022 Day 1 Live Updates: Swimmer Srihari Nataraj has qualified for the 100m backstroke semi-final",
          url:
            "https://sports.ndtv.com/commonwealth-games-2022/commonwealth-games-2022-day-1-live-updates-3204753",
          urlToImage:
            "https://c.ndtvimg.com/2022-07/mc1r03co_indian-hockey-team_625x300_29_July_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
          publishedAt: "2022-07-29T14:31:54Z",
          content:
            "Commonwealth Games, Day 1 Live Updates: PV Sindhu starred as India defeated Pakistan 3-0 in a Mixed Team Group A Badminton match on  the opening day of the CWG 2022. Earlier, Kidambi Srikanth and the… [+1032 chars]",
        },
        {
          source: { id: null, name: "Firstpost" },
          author: "FirstCricket Staff",
          title:
            "India vs Australia CWG 2022 Live cricket score and ball by ball commentary: Australia are 77/5 in 11 overs - Firstpost",
          description:
            "INDW vs AUSW TV Channel, LIVE Streaming: When and where is India women vs Australia women CWG 2022 match? What time is the toss?",
          url:
            "https://www.firstpost.com/firstcricket/sports-news/india-vs-australia-cwg-2022-highlights-full-cricket-score-australia-win-by-3-wickets-10977371.html",
          urlToImage:
            "https://images.firstpost.com/wp-content/uploads/2022/07/INDW-vs-AUSW-LIVE-1.jpg",
          publishedAt: "2022-07-29T13:19:48Z",
          content:
            "India Women vs Australia Women CWG 2022 LIVE CRICKET SCORE and UPDATES: India play Australia in the first match\r\nPREVIEW: The Indian women's team will begin the Commonwealth Games 2022 campaign again… [+699 chars]",
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "Express Web Desk",
          title:
            "Adhir Ranjan Chowdhury apologises to President Murmu for 'rashtrapatni' remark, says it was 'slip of tongue' - The Indian Express",
          description:
            'In a letter addressed to the President, he wrote: "I am writing to express my regret for having mistakenly used an incorrect word to describe the position you hold. I assure you that it was a slip of the tongue. I apologise and request you to accept the same."',
          url:
            "https://indianexpress.com/article/india/adhir-ranjan-chowdhury-apology-president-droupadi-murmu-rashtrapatni-remark-8059550/",
          urlToImage: "https://images.indianexpress.com/2022/07/Adhir-1.jpg",
          publishedAt: "2022-07-29T13:08:01Z",
          content:
            "Congress MP Adhir Ranjan Chowdhury on Friday tendered an apology to President Droupadi Murmu over his “Rashtrapatni” remark for which he drew considerable flak from the ruling BJP on Thursday.In a le… [+1233 chars]",
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title:
            "Uddhav Thackeray's Nephew Meets Eknath Shinde, Pledges Support: Latest In Legacy Battle - NDTV",
          description:
            "Nihar Thackeray's meeting with CM Shinde being seen as symbolic move to claim Bal Thackeray's legacy; family branches have not been particularly close",
          url:
            "https://www.ndtv.com/india-news/uddhav-thackerays-nephew-nihar-thackeray-meets-eknath-shinde-pledges-support-3206088",
          urlToImage:
            "https://c.ndtvimg.com/2022-07/743jo2ho_nihar-thackeray-eknath-shinde-650_625x300_29_July_22.jpg",
          publishedAt: "2022-07-29T13:08:00Z",
          content:
            "Nihar Thackeray, son of Uddhav Thackeray's late elder brother, with CM Eknath Shinde in Mumbai.\r\nMumbai: Struggling to hold on to the Shiv Sena after being unseated as Maharashtra Chief Minister, Udd… [+1748 chars]",
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title: "Watch: Mumbai's Andheri Battles Huge Fire - NDTV",
          description:
            "A massive fire broke out at a film set in Mumbai's Andheri on Friday. Visuals from the scene showed huge plumes of smoke billowing from the building, with firefighters at the scene to tackle the blaze. No injuries have been reported so far.",
          url:
            "https://www.ndtv.com/india-news/massive-fire-breaks-out-in-mumbais-andheri-3205770",
          urlToImage:
            "https://c.ndtvimg.com/2022-07/lvnpdtpg_andheri-fire_625x300_29_July_22.jpg",
          publishedAt: "2022-07-29T12:44:51Z",
          content:
            "The cause of the level 2 fire is yet to be ascertained.\r\nMumbai: A massive fire broke out at a film set in Mumbai's Andheri on Friday. Visuals from the scene showed huge plumes of smoke billowing fro… [+554 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "TIMESOFINDIA.COM",
          title:
            "Coronavirus: New sign of Omicron's BA.5 subvariant in those vaccinated or boosted; can be 'extremely painful' - Times of India",
          description:
            "According to the US Centers for Disease Control and Prevention (CDC), the highly transmissible and fast-spreading BA.5 subvariant of Omicron, along with its close associate BA.4 now account for nearly 95% of COVID-19 cases in the U.S.",
          url:
            "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-new-sign-of-omicrons-ba-5-subvariant-in-those-vaccinated-or-boosted-can-be-extremely-painful/photostory/93211917.cms",
          urlToImage: "https://static.toiimg.com/photo/93212153.cms",
          publishedAt: "2022-07-29T12:30:00Z",
          content:
            "Doctor Mike Hansen, Board Certified Internal Medicine, Pulmonary Disease, &amp; Critical Care Medicine specialist and physician, took to Youtube and recalled his battle with Omicron BA.5 infection.\r\n… [+486 chars]",
        },
        {
          source: { id: null, name: "The New Indian Express" },
          author: "Associated Press",
          title:
            "San Francisco declares emergency over monkeypox as people queue up for vaccines - The New Indian Express",
          description:
            "The World Health Organization over the weekend declared the monkeypox outbreak in more than 70 countries a global emergency.",
          url:
            "https://www.newindianexpress.com/world/2022/jul/29/san-francisco-declares-emergency-over-monkeypox-as-people-queueup-for-vaccines-2481975.html",
          urlToImage:
            "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/7/29/w600X390/AP22209758043099.jpg",
          publishedAt: "2022-07-29T12:23:00Z",
          content:
            "SAN FRANCISCO: The mayor of San Francisco announced a state of emergency Thursday over the growing number of monkeypox cases, allowing officials to cut through red tape and fight a public health cris… [+11263 chars]",
        },
        {
          source: { id: null, name: "Thekashmirwalla.com" },
          author: null,
          title:
            "After teenager shot mother, PUBG India removed from app stores - The Kashmir Walla",
          description:
            "Battlegrounds Mobile India has been removed from Apple and Google app stores in India following a government order.",
          url:
            "https://thekashmirwalla.com/after-teenager-shot-mother-pubg-india-removed-from-app-stores/",
          urlToImage:
            "https://thekashmirwalla.com/wp-content/uploads/2019/02/PUBG2.jpg",
          publishedAt: "2022-07-29T11:58:11Z",
          content:
            "Battlegrounds Mobile India (BGMI), the rebranded version of PUBG Mobile from Korean game publisher Krafton, has been removed from Apple and Google app stores in India following a government order, re… [+2031 chars]",
        },
        {
          source: { id: null, name: "India Education Diary" },
          author: null,
          title:
            "University of California, Los Angeles: UCLA scientists discover places on the moon where it's always 'sweater weather' | India Education - India Education Diary",
          description: null,
          url:
            "https://indiaeducationdiary.in/university-of-california-los-angeles-ucla-scientists-discover-places-on-the-moon-where-its-always-sweater-weather/",
          urlToImage: null,
          publishedAt: "2022-07-29T11:40:46Z",
          content:
            "Future human explorers on the moon might have 99 problems but staying warm or cool wont be one. A team led by planetary scientists at UCLA has discovered shady locations within pits on the moon that … [+5098 chars]",
        },
        {
          source: { id: null, name: "Cricketaddictor.com" },
          author: "More by Vicky Singh",
          title:
            "WI vs IND Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- India Tour of West Indies, 1st T20I - Cricket Addictor",
          description:
            "WI vs IND Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- India Tour of West Indies, 1st T20I",
          url:
            "https://cricketaddictor.com/fantasy-cricket/wi-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-india-tour-of-west-indies-1st-t20i/",
          urlToImage:
            "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/07/IMG-20220728-WA0061.jpg",
          publishedAt: "2022-07-29T11:34:46Z",
          content:
            "WI vs IND Dream11 Prediction, Fantasy Cricket Tips Dream11 Team, Playing XI, Pitch Report, Injury Update of the match between India and West Indies. They will play against each other for the first ti… [+4837 chars]",
        },
        {
          source: { id: null, name: "Orissadiary.com" },
          author: "Odisha Diary bureau",
          title:
            "DST INSPIRE fellow leads study unveiling the secret of distant dwarf galaxy formation - Odisha Diary",
          description:
            "New Delhi : Signals from the outskirts of a galaxy that is not more than 150 million years indicate formation of newer stars by the galaxies beyond their visible boundaries, according to a recent study. The research traces how these young stars, that",
          url:
            "https://orissadiary.com/dst-inspire-fellow-leads-study-unveiling-the-secret-of-distant-dwarf-galaxy-formation/",
          urlToImage:
            "https://i0.wp.com/orissadiary.com/wp-content/uploads/2022/07/image001SPE4.jpg?fit=533%2C313&ssl=1",
          publishedAt: "2022-07-29T11:20:48Z",
          content:
            "New Delhi : Signals from the outskirts of a galaxy that is not more than 150 million years indicate formation of newer stars by the galaxies beyond their visible boundaries, according to a recent stu… [+3601 chars]",
        },
        {
          source: { id: null, name: "MacRumors" },
          author: "Sami Fathi",
          title:
            "Latest iOS 16 Beta Further Suggests Always-On Display Coming to iPhone 14 Pro - MacRumors",
          description:
            "A new detail found in the iOS 16 beta could be the latest indication that Apple is indeed planning to bring always-on display functionality to the...",
          url:
            "https://www.macrumors.com/2022/07/29/ios-16-beta-always-on-display-iphone-14-pro/",
          urlToImage:
            "https://images.macrumors.com/t/yz50t2ypqrAg_jiswXXFDoF3Nts=/1600x/article-new/2021/02/iPhone-13-Always-On-Feature.jpg",
          publishedAt: "2022-07-29T11:10:10Z",
          content:
            "A new detail found in the iOS 16 beta could be the latest indication that Apple is indeed planning to bring always-on display functionality to the upcoming high-end iPhones.\r\nAs discovered by 9to5Mac… [+1941 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "TIMESOFINDIA.COM",
          title:
            "Dementia: THESE lifestyle habits can help to reduce your risk, according to study - Times of India",
          description:
            "Dementia is the loss of abilities like thinking, remembering, and reasoning, so much so that it interferes with a person's daily life",
          url:
            "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/dementia-these-lifestyle-habits-can-help-to-reduce-your-risk-according-to-study/photostory/93209730.cms",
          urlToImage: "https://static.toiimg.com/photo/msid-93210003.cms",
          publishedAt: "2022-07-29T10:30:00Z",
          content:
            "While the risk of dementia is higher among older people, it is not exclusive to the elderly. As per research, young onset dementia – the onset of symptoms before age 65 – accounts for up to 9% of cas… [+630 chars]",
        },
        {
          source: { id: null, name: "Moneycontrol" },
          author: "Moneycontrol News",
          title:
            "HDFC Q1 Result | Net profit rises 22% to Rs 3,668.82 crore, AUM grows 17% - Moneycontrol",
          description:
            "HDFC Q1 Result: The home loan lender reported loan growth of 16%, driven by individual loans that grew 19%t year-on-year on an AUM basis",
          url:
            "https://www.moneycontrol.com/news/business/earnings/hdfc-q1-result-net-profit-rises-22-to-rs-3668-82-crore-aum-grows-17-8913761.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2022/02/HDFC-Ltd6-770x433.jpg",
          publishedAt: "2022-07-29T10:29:44Z",
          content:
            "Housing Development Finance Corporation Ltd missed street estimates by a whisker, reporting a net profit of Rs 3,668.82 crore for the June quarter, an increase of 22 percent from the year-ago period,… [+2377 chars]",
        },
        {
          source: { id: null, name: "India Today" },
          author: null,
          title:
            "'Time will tell': Arrested Bengal minister on being suspended by Trinamool - India Today",
          description:
            "Only time will tell, said Partha Chatterjee when asked about his suspension from the Trinamool Congress, following his arrest in a recruitment scam.",
          url:
            "https://www.indiatoday.in/india/story/partha-chatterjee-reacts-removal-from-cabinet-suspension-from-tmc-recruitment-scam-ed-probe-1981461-2022-07-29",
          urlToImage:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/WhatsApp_Image_2022-07-29_at_2_4-647x363.jpeg?.skoJRjPKy_9EMiL13MEBg2.B8tLVT5R",
          publishedAt: "2022-07-29T10:12:04Z",
          content:
            "Trinamool Congress leader Partha Chatterjee, who was arrested by the Enforcement Directorate (ED) in a recruitment scam, has reacted to his sacking from cabinet and suspension from the party. Somoy e… [+1792 chars]",
        },
        {
          source: { id: null, name: "Labiotech.eu" },
          author: "Liza Laws",
          title: "Beyond Biotech podcast 7: World Hepatitis Day - Labiotech.eu",
          description:
            "This week's podcast features three interviews related to hepatitis. Our guests are Ahmed Elsharkawy, Ziv Ben-Ari, and James McIlroy.",
          url:
            "https://www.labiotech.eu/trends-news/beyond-biotech-podcast-7-world-hepatitis-day/",
          urlToImage:
            "https://www.labiotech.eu/wp-content/uploads/2022/07/podcast-07.jpg",
          publishedAt: "2022-07-29T10:04:25Z",
          content:
            "This week’s podcast features three interviews related to hepatitis.\r\nOur guests are Ahmed Elsharkawy, consultant transplant hepatologist and honorary senior clinical lecturer at the University of Bir… [+2563 chars]",
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title:
            "Videos Show Roads Flooded, Cars Submerged In UAE In Flash Flood Triggered By Heavy Rain - NDTV",
          description:
            'The emirate\'s weather department has already issued a red alert in view of "hazardous weather events".',
          url:
            "https://www.ndtv.com/world-news/videos-show-roads-flooded-cars-submerged-in-uae-after-flash-flood-triggered-by-heavy-rain-3205351",
          urlToImage:
            "https://c.ndtvimg.com/2022-07/99rabeg_uae-flash-flood-650_625x300_29_July_22.jpg",
          publishedAt: "2022-07-29T09:51:52Z",
          content:
            "The flood in UAE was caused by heavy rain on Thursday.\r\nIn a rare occurrence, the United Arab Emirates (UAE) was hit by heavy rain on Thursday, resulting in flooding in many areas. Several videos sur… [+2822 chars]",
        },
        {
          source: { id: null, name: "Zoomtventertainment.com" },
          author: "Zoom TV",
          title:
            "Karan Singh Grover and Bipasha Basu all set to welcome their first child? Here's what we know - Zoom TV",
          description:
            "Reports have it that Karan Singh Grover and Bipasha Basu are all set to welcome their first child and the announcement is expected soon. They have now been married for 6 years and it looks like they are all ready to embrace a new phase in their lives. Here's …",
          url:
            "https://www.zoomtventertainment.com/celebrity/karan-singh-grover-and-bipasha-basu-all-set-to-welcome-their-first-child-heres-what-we-know-bollywood-news-entertainment-news-article-93208117",
          urlToImage:
            "https://static.zoomnews.com/thumb/msid-93208117,imgsize-100,width-1280,height-720,resizemode-75/93208117.jpg",
          publishedAt: "2022-07-29T09:20:48Z",
          content:
            "Yeh Rishta Kya Kehlata Hai written updates, July 29, 2022: Abhimanyu decides to surprise Akshara on birthday",
        },
        {
          source: { id: null, name: "Hindustan Times" },
          author: "HT Tech",
          title:
            "This dangerous 400- feet wide asteroid just missed Earth by a whisker - HT Tech",
          description:
            "Earth narrowly escapes a massive asteroid which was supposed to make its close approach earlier today, according to NASA.",
          url:
            "https://tech.hindustantimes.com/tech/news/this-dangerous-400-feet-wide-asteroid-just-missed-earth-by-a-whisker-71659085792295.html",
          urlToImage:
            "https://images.hindustantimes.com/tech/img/2022/07/29/1600x900/ap10-22-2015-000010b_7593e088-797d-11e5-9d61-41ab8e878edd_1659085832132_1659085832132.jpg",
          publishedAt: "2022-07-29T09:20:38Z",
          content:
            "The Earth has narrowly escaped yet another crisis. Earlier this week, NASA revealed that a 400-feet wide asteroid was going to make a close approach towards the Earth today, July 29, which worried th… [+2201 chars]",
        },
        {
          source: { id: null, name: "Hindustan Times" },
          author: "Divya Chandrababu",
          title:
            "‘We changed notion that a strong government should control everything’: PM Modi - Hindustan Times",
          description:
            "PM Modi, who was speaking at the 42nd convocation of Anna University in the presence of chief minister MK Stalin, also defended the new education policy, aspects of which have been vehemently opposed by the Stalin-led DMK government | Latest News India",
          url:
            "https://www.hindustantimes.com/india-news/we-changed-notion-that-a-strong-government-should-control-everything-pm-modi-101659086084095.html",
          urlToImage:
            "https://images.hindustantimes.com/img/2022/07/29/1600x900/6d2a5ca4-0f1e-11ed-a1d6-b1f7c7e6fb11_1659086198937.jpg",
          publishedAt: "2022-07-29T09:14:43Z",
          content:
            "Prime Minister Narendra Modi said his government has changed the notion that a strong government should control everything and everyone, and underlined that the New Education Policy (NEP) 2020 ensure… [+3331 chars]",
        },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=fc8ad4ec8eb84caaa3282fe181edb255";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState ({ articles: parsedData.articles });
  }
  handleNextClick=()=>{

  }
  
  handlePrevClick=()=>{

  }

  render() {
    return (
      <div className="container my-3">
        <h3>NewsMonkey - Top Headlines</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
