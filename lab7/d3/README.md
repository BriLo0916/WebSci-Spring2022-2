LAB 7: D3 Visualizations + Mongo database (Along with Node + Express)

Brianna Lopez - RCS ID: lopezb, github account: https://github.com/BriLo0916

Private repo: https://github.com/BriLo0916/WebSci-Spring2022

github Organization: https://github.com/web-sci-spring-2022-name-tbd

For this lab, we were tasked with using data we had either collected from lab 6 or found on Kraggle to be able to complete this lab. For my lab, I had created two data visualizations, one being a Bar graph representing Pokemon Types and their total heights and a scatter plot that maps out each Pokemons HP Stats and Defense Stats.

To complete this lab, I find a new data set since I had not completed Lab 6 as I had instead attended the Hackathon. As a result, I had searched up a Pokemon Dataset to keep the trend of using pokemon data for my labs. I had used the backend from this d3 template as well as my previous labs to be able to connect my backend to MongoDB (which contained the pokemon data that i had imported into it as a JSON file). Once I had completed my backend, I ended up modifying the scatter plot and the bar graph components that already existed in the angular project to be able to create my visualizations. 

The most trouble that I had with this assignment was figuring out what I should plot but ultimately I plotted what I found interesting and helpful for those who actually play Pokemon games competitivly like I do and I wanted this idea to count as my creativity. Another issue that I had with this lab was in trying to create the labels. At first I wasn't really understanding how to make them and when I would try to add onto what was already existing, I would just get an error or part of my visualizations axices would disappear. Eventually, I was able to find a stackoverflow page that helped with putting labels for both the x axis and the y axis and I had to modify their coordinates so they weren't overlapping with the data I already had existing since that was also an issue once I was able to get the labels to appear, but was quickly resolved. Overall I did have some fun doing this lab as it was something that I had already kind of worked on doing visualizations in the hackathon.

For the final part of this lab, my OWASP report is in the directory before this README.md in case you can't find it, called "2022-04-08-ZAP-Report-.html".


Resources: 
https://www.pokemon.com/us/pokedex/ (site used to check for more Pokemon info)
https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/ (site used to learn more about how to use both mongoDB and Node together)
https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5 (trying to learn to use mongodb with node and angular)
https://stackoverflow.com/questions/11189284/d3-axis-labeling (site used to figure out how to create labels)
https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js (site used to learn how to create a bar chart in D3)
https://stackoverflow.com/questions/35850486/how-to-find-array-size-in-angularjs (some math questions for TypeScript when I came across a small math error)
https://pokemon.fandom.com/wiki/Types (more pokemon research)
https://www.kaggle.com/datasets/mariotormo/complete-pokemon-dataset-updated-090420?resource=download (site used to get my pokemon dataset)
http://www.d3noob.org/2013/01/adding-title-to-your-d3js-graph.html (site used to try to create a title)
https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-never (site used ot try to fix an small type error I came across)
https://datawanderings.com/2019/10/20/tutorial-advanced-bar-chart-in-d3-js-v-5/ (site used to get inspiration for bar chart)
