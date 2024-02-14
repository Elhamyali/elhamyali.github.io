## UX Researcher & Data Scientist

I help people make informed decisions that support the climate using data, storytelling, and research. I uncover deeper truths about the world and the human experience. And I reveal stories that shift norms and shape conversations.

📈 With 10 years of experience in UX research, data science, program evaluation, and human-centered design in public health and civic tech, I've helped local and state governments, public health agencies, startups, and civic tech groups uncover behavioral insights about their users through evidence-based research and build equity-focused, actionable data products—from maps and dashboards to case studies—so they can make informed and impactful decisions that improve the lives of their communities. Some of the clients I’ve worked with include Pima County Health Department, New York State Department of Health AIDS Institute, City of Los Angeles, US Digital Response, Food + Planet, and more.

**Research Interests:** I’m passionate about using equitable and accountable data science to advance climate change and health equity, climate adaptation and mitigation actions, local and state government climate resilience, spatial modeling, data visualization and analysis, and predictive modeling. I’m driven to use equitable and accountable data science and storytelling to advance climate justice and create a sustainable, resilient, and just food system. 

**A little more about me:** I was the founder of Jumana Design (DBA Elham Ali Consultancy), a participatory experience research studio working to advance equity in public service delivery, and former Lead Human-centered Design Advisor at Pima County Health Department. Previously, I launched equity research practices and supported over 13 government partners during COVID-19 crisis response, at US Digital Response, a nonprofit that activates highly-skilled technologists to governments to support the immediate needs of the public. I am a member of DataKind, Statisticians without Borders, Design Justice Network, Technologists for Public Good, and Climate Action Tech.

## Skills

- **UX research** (qualitative and quantitative research design, equity-driven community participatory research, survey design and analysis, survey reliability/validity, sampling techniques, experimentation, usability testing, tree testing, card sorting, A/B testing)
- **Programming languages** (R, Python)
- **Geospatial mapping** (exploratory and inferential spatial data analysis)
- **Data visualization and storytelling** (Shiny and flexdashboard, ggplot2, tidyverse)
- **NLP classification** (sentiment analysis, text mining)
- **Predictive Modeling** (linear regression, logistic regression, decision trees, monte carlo simulation, cost-effectiveness simulations)

Interested in ethical and accountable GenAI and open data science education.

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

## Personal

🍎 Fun fact: At just 14 years old, I became the first person from Bahrain to successfully complete the entire series of [Kumon math](https://www.kumon.com/about-kumon/kumon-method) courses, spanning calculus, probability, and statistics.

On a personal note, I live in sunny California with my partner and two funny cats. I co-founded [Spudnuts Comics](https://www.instagram.com/spudnutscomics/?hl=en) and [Unmuted with Elham Ali](https://open.spotify.com/show/3t0HajfVLLDYV7AeqF9oAr) Podcast.