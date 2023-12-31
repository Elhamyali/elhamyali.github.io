## UX Researcher & Data Scientist

---

📈 I help local and state governments, public health agencies, startups, and civic tech groups uncover behavioral insights about their users through evidence-based research and build equity-focused, actionable data products—from maps and dashboards to case studies—so they can make informed and impactful decisions that improve the lives of their communities. Some of the clients I’ve worked with include Pima County Health Department, New York State Department of Health AIDS Institute, City of Los Angeles, US Digital Response, Food + Planet, and more.

🌍 I’m passionate about using equitable and accountable data science to:
- Advance environmental justice and climate change by establishing and tracking climate equity plans, ECJ metrics, evaluation plans, and community buy-in.
- Develop climate roadmaps and quantitative models including greenhouse gas accounting, Net Zero goals, and Science-Based Targets.
- Implement solutions and measure their effectiveness and impact to reduce emissions from animal agriculture and create a climate-stable, resilient, and just food system.

A little more about me: I was the founder of Jumana Design (DBA Elham Ali Consultancy), a participatory experience research studio working to advance equity in public service delivery, and former Lead Human-centered Design Advisor at Pima County Health Department. Previously, I launched equity research practices and supported over 13 government partners during COVID-19 crisis response, at US Digital Response, a nonprofit that activates highly-skilled technologists to governments to support the immediate needs of the public. I am a member of DataKind, Statisticians without Borders, Design Justice Network, Technologists for Public Good, and Climate Action Tech.

🍎 Fun fact: At just 14 years old, I became the first person from Bahrain to successfully complete the entire series of [Kumon math](https://www.kumon.com/about-kumon/kumon-method) courses, spanning calculus, probability, and statistics.

On a personal note, I live in sunny California with my partner and two funny cats. I co-founded [Spudnuts Comics](https://www.instagram.com/spudnutscomics/?hl=en) and [Unmuted with Elham Ali](https://open.spotify.com/show/3t0HajfVLLDYV7AeqF9oAr) Podcast.

---

## Skills

- **UX research and design** (qualitative and quantitative research design, equity-driven community participatory research, survey design and analysis, survey reliability/validity, sampling techniques, experimentation, usability testing, tree testing, card sorting, A/B testing)
- **Data analysis and statistical modeling** (R, Python, EDA, Git/Github, causal inference, PCA, k-means clustering, data wrangling, munging, hacking, data equity)
- **Geospatial mapping** (exploratory and inferential spatial data analysis)
- **Data visualization and storytelling** (Shiny and Flexdashboard application development, ggplot2, tidyverse)
- **NLP classification** (sentiment analysis, text mining)
- **Predictive Modeling** (linear regression, logistic regression)
- **Decision Analysis** (decision trees, monte carlo simulation, markov models, cost-effectiveness analysis)

Interested in ethical and accountable GenAI and open data science education.

---

## Projects

### Analyzing public sentiment on mandatory school COVID-19 vaccinations: Text mining and content analysis of 80,000 comments

Amid strong public opinions against mandatory COVID-19 vaccinations in schools, the Washington State Board of Health needed data-driven insights to understand drivers of public satisfaction, dissatisfaction, and behavioral determinants toward vaccine acceptance of their constituents so they could proactively improve how to collaborate with their communities. Working with another researcher, I analyzed 80,000 public comments received from survey responses and public meetings PDF documents using R for text mining and sentiment analysis. The results informed improved communication strategies in public meetings, encouraging more open and transparent discussions. The results informed improved communication strategies in public meetings, encouraging more open and transparent discussions, and an opportunity to improve the data collection pipeline of resident opinions.

<img src="images/covid-1.png?raw=true" />
<img src="images/covid-2.png?raw=true" />
<img src="images/covid-3.png?raw=true" />
<img src="images/covid-4.png?raw=true" />

[![](https://img.shields.io/badge/R-blue?logo=R)](#) [![](https://img.shields.io/badge/RStudio-white?logo=RStudio)](#) [![](https://img.shields.io/badge/RMarkdown-white?logo=RMarkdown)](#) [![](https://img.shields.io/badge/Tidyverse-white?logo=Tidyverse)](#)

[View code on Github](https://github.com/usdigitalresponse/content-analysis-for-community-statements-on-COVID-19)

---

### Mapping the impact of health insurance coverage on HIV diagnosis rate in New York City for young adults: Geospatial mapping with QGIS

In line with New York State's ambitious 2015 Blueprint to end the AIDS epidemic, I explored how health insurance coverage impacts the rate of new HIV diagnoses among young adults in New York City's five boroughs. Using QGIS, I geocoded and georeferenced the addresses and zip codes of new HIV diagnoses. I aligned this spatial data with U.S. Census data on types of health insurance coverage, creating vector layers to visualize the distribution. I then conducted advanced spatial analysis using R to calculate Moran’s I and z-scores, identifying spatial autocorrelations and clusters within the data. Contrary to expectations, my analysis found areas with higher insurance coverage also had higher rates of HIV diagnoses. Further analysis in R uncovered a strong positive correlation between the number of HIV testing centers and increased HIV diagnosis rates. My work revealed a complex relationship between insurance coverage and HIV diagnosis rates, suggesting that increased insurance could enable more young adults to seek testing and treatment. This data-driven insight provides a nuanced understanding of the epidemic, challenging assumptions and informing future public health strategies.

<img src="images/GIS-poster.jpg?raw=true" />

[![](https://img.shields.io/badge/QGIS-green?logo=QGIS)](#) [![](https://img.shields.io/badge/RStudio-white?logo=RStudio)](#) [![](https://img.shields.io/badge/R-blue?logo=R)](#)

---

### Exploring dietitians' attitudes on sustainable diets: Data analysis and visualization of a national survey of 1,500 dietitians

Food + Planet, a nonprofit that aims to empower 1 million health professionals to advance sustainable food systems by 2025, wanted to understand the attitudes and beliefs of dietitians towards sustainable diets in their practices and communities. I led exploratory and inferential analyses on a national survey of 1,500 responses, utilizing Python for data transformation and Matplotlib and Seaborn libraries for data visualization. I also wrote an executive summary and article, which the team published in collaboration with [Today's Dietitian Magazine](https://www.todaysdietitian.com/) and Johns Hopkins [Center for a Livable Future](https://clf.jhsph.edu/) and can help secure additional funding for the organization. My analysis also led to pivotal insights into the maturity of the adoption of sustainable diets in varying dietetics roles in health systems and fitness industries. All analyses were reproduced in Excel so that non-technical practitioners could re-create and change the designs of the insights graphs.

<img src="images/sustainability-fig-1.png?raw=true" />

<img src="images/sustainability-fig-2.png?raw=true" />

[![](https://img.shields.io/badge/Python-white?logo=Python)](#) [![](https://img.shields.io/badge/Jupyter-white?logo=Jupyter)](#) [![](https://img.shields.io/badge/Matplotlib-white?logo=Matplotlib)](#) [![](https://img.shields.io/badge/Seaborn-white?logo=Seaborn)](#)

[View publication on Food+Planet](https://foodandplanet.org/experience/)
- [Insights survey](https://drive.google.com/file/d/1LGNZr36cZDxHjtyJsp3INg_TDsYyKaCY/view)
- [Press release](https://drive.google.com/file/d/1MnoRevrB_DOMXEwI_GWAm2fGHn1CZPM_/view)

---

### Enhancing HIV edutainment outreach: Web scraping and exploratory data Analysis for the "Tested" comic

Faced with the challenge of reaching 700k+ Webtoons comic readers, the New York State Department of Health AIDS Institute needed a more centralized and interactive platform where readers could subscribe to edutainment episodes, access actionable HIV resources, and interact with a community. I redesigned the [YGetIt?](https://www.ygetit.org/) website, did concept and usability testing, and launched evidence-based social media campaigns. I used Python with Pandas and Selenium to scrape public comments from the [Tested](https://www.webtoons.com/en/canvas/tested/list?title_no=231173&page=1) comic, performed exploratory data analysis, and did thematic qualitative analysis to recommend trends in public sentiments for content development for future episodes. This led to continued $1.6M grant funding and increased engagement with the website, contributing to more equitable health education in New York. 

[![](https://img.shields.io/badge/Python-white?logo=Python)](#) [![](https://img.shields.io/badge/Jupyter-white?logo=Jupyter)](#) [![](https://img.shields.io/badge/pandas-white?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAeFBMVEX///8TB1QAAEb/ygDnBIgPAFLNzNYTAFnQ0NgMAFcAAETb2eP39/oUBlfV1N7/xwDmAID/9tfLydcjG17/4Yz//vbCwM3ykcL61OfoBIwyKmgAADYAAE0AAErx8PTIxdT/+un/34T85/Lyir/lAHv50eX+9fkpH2Ma8J+4AAACEklEQVR4nO3dzVIaQRSAUYNCEIGoiYmJivnP+79hFrmLVHELZ6pnmG483xqaPruh5lb32ZkkSZIkSZIkvb52z7dZU2+rT4uH2X6rx6m31afF7M1+87dTb6tPCDWEUEMINYRQQ5MS1tu0nqtMSrhKn26e1v1WmZawyn58g4DQL4QIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECOFA6cvM5a4nYb29yjoO4WmVvM58WPQkbF8e+RqPcDlPVp4t+xLS/W0QEBCqI8yTLpsizN8n/WmJ0CEEBAQEBAQEBIT2CF+/fci6a4hw8y7rvC3CeRYCAgICAgICAgICAgICwlCEtJYIdzdp/3+kdkKHToFQ+RjJMCEcCKF7CAdC6B7CgRC6Nylh9zGtJUJ6uNCsnsOFhhkvPAHC9x+fsloi/Pp5nXTREuH++iLpMwICAgICAgICAgICAgKC/87R7/u0lggdQkBAQEBAQEB4dYQON67UTqh9KuwkDlRBQED4R8gOF5o3Rdh8yepLGO0ez6MNPO+WQ9w3NilhvBAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyEKJt+lL0SNeADUR4TG9cGWXHew10AkPP4aRBO9ohEuOFUEMINYRQQwg1dAKEDvd41t5t2u7lL0qSJEmSJEnSyfUXeomSFq0EzbkAAAAASUVORK5CYII=)] [![](https://img.shields.io/badge/Selenium-white?logo=Selenium)](#)

[View code on Github](https://github.com/Elhamyali/webtoons-comments-in-python)

---

## For fun
Below is a sample of side projects that highlight data science skills such as feature engineering and predictive modeling.

- [NHANES health survey data analysis of BMI](https://github.com/Elhamyali/Health-Survey-Data-Analysis-of-BMI)                                                   
Analyzed survey data of 20,000 people sampled from the United States to explore health behaviors associated with lower Body Mass Index (BMI) using survey-weighted multiple and logistic regression.

- [Optimizing customer retention for PowerCo](https://github.com/Elhamyali/SME-Customer-Churn-Prediction-PowerCo)                                                   
Conducting hypothesis framing, exploratory data analysis, feature engineering, and predictive modeling to advise PowerCo on how to retain their small and medium enterprise customers.

- [Influencing buyer behavior for British Airways](https://github.com/Elhamyali/Buying-Behavior-Prediction-British-Airways)                                                   
Scraping and analyzing customer review data to uncover findings. Building a predictive model to understand factors influencing buying behavior to help British Airways acquire customers before they embark on their holidays.

---

## Testimonials
Selected quotes of people who have worked with me.

*"Working with Elham is the single best thing we could have done to yield better outcomes and increase the impact of our project. Elham served in an advisory capacity, bringing a wealth of experience and knowledge as an experienced HCD practitioner to help assist in drafting effective research plans. She was also instrumental in the development of impactful HCD Design Sprint facilitation tools, and she provided effective insights and guidance around data synthesis and analysis. I was particularly impressed by her ability to produce quality work, despite time constraints and managing other projects. This was a high-visibility project that will certainly influence the operational culture of our agency, and we can attribute these successes to our partnership with this amazing UX Researcher. Elham would be an asset to any project team. "*

-- Andrea Ownbey, Oklahoma Department of Human Services

*"This [text mining insights] is amazing. I wish our agency had funding to hire people to do this work. These are the insights that our agency needs to inform policy, approach, communication, how we are engaging, etc. Deepest gratitude & appreciation for this team. You were amazing & so helpful. The work and presentation was very informative & extremely helpful. "*

-- Kelie Kahler, State of Washington Board of Health

*"Elham was a Technologist-in-Residence for USDR’s Health Program. Elham brought a combination of expertise, energy, kindness, and joy to the role. Her domain expertise in health equity allowed her to support many of our government partners improve their vaccine outreach efforts. Her energy and her skill at project management allowed her to scale up her efforts to lead a large team of volunteers while simultaneously creating reusable artifacts and speaking at several events to evangelize her work. Her kindness and joy made it a pleasure to work with her as a team member, pitching in wherever she could and ensuring a smooth transition as she ramped down from the six-month technologist-in-residence role."*

-- Alex Allain, US Digital Response
