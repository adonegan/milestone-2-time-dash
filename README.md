# Time Magazine's Person of the Year, 1927 - Present

This data dashboard displays data from Time's Magazine's Person of the Year since 1927. 
The dashboard displays mutliple charts showing data from different dimensions.
You will find bar charts, line charts, pie charts and tables to show this data.

## UX

![responsiveness.png](/images/responsiveness.png)

This website is for people who enjoy reading Time magazine and like the annual Person of the Year feature.
They want to know who the previous winners of the honor are, what year they won, from what categories and
country the winners are from.

##### User story 1
* As a reader of Time magazine, my favourite issue is when they choose Person of the Year. 

##### User story 2
* As a student journalist writing about Time's People of the Year, I want to know more of its history as a feature.

##### User story 3
* As someone who doesn't know what Time magazine is or what Person of the Year is, I'm still interested in the stats.

##### User story 4
* As a sometimes reader of Time magazine, I like hearing who has made it to the top of the Person of the Year choice.

##### User story 5
* As a reader of Time magazine, always want to know who the Person of the Year is, and the previous winners.

### Wireframes

## Features

### Existing features

##### Navbar
* A Bootstrap code was used with jQuery added to make the navbar responsive. The color is the same red as the main color
of Time Magazine. I also enlarged the text and made it white, to stand out. I also centered the text to add style.

##### Introductory text
* The introductory text gives the site user a brief note on what the Person of the Year award is, what Time Magazine is and a little about
the make-up of the award and how it's changed over the years.

##### Read Me! button
* This button, when clicked, gives the user instructions on how to navigate the Stats page. In feedback given to me by friends and family who
are not familiar with dashboards, they advised me to create more text to explain what to do and the results of each bar chart. In this button
I also tell users how to use the Header functionality listed below.

##### Headers
* The headers were initially used to signify what type of chart follows below, however, on advice mentioned above I used these divs to hide
more information about the charts and what they need so if a user wants to know more information they can read about it in the headers. The 
slideToggle feature also gives a sleek look to the site and ease of function.

##### Honor pie chart
* This first pie chart displays all the honors given to subjects over the years from 1927-2018 (its latest year) in the Person of the Year 
award. Users can view the legend to see the names of the winners, and click on the legend itself to show results. Users can also, preferably, 
click on a color on the chart to see which honor has the most winners, e.g. Man, Men, Woman, Women, Person, Persons, Man & Wife and more.

##### Country pie chart
* This second pie chart shows all the countries associated with winners. It also determines how many winners of the same country won the 
award multiple times. Users can click on a colored slice, or the legend, to see results. A lot of countries won just once, Ethiopia for 
example, which accounts for the cluster of thin colors on the chart. When users click on the chart they will filter the results in other 
charts.

##### Category bar chart
* A different type of chart to display the data this time, the bars in this chart show the winners' sphere of influence, i.e. the category 
in which the winners are connected to and have won because of this cateory. For example, users can see that the people who won in the name
of politics greatly exceed other categories. Like all other charts, users can click on the bar chart to filter the results in other charts.

##### Select menu
* Users can start viewing stats on any chart, though the first pie chart is recommended. If a user chooses the 'by year' select menu they
will see each year as an option to view, which would filter each other chart. However, if another chart is activated, the year select menu 
will display only the years associated with the activated chart. Selecting a year displays all data in the table underneath it.

##### Table Data table
* The table of data shows all the information that is available in the data set, from name, honor, category, title and more. When a user 
clicks on any chart on the Stats page, the result of the choice will show all the data that pertains to that selection in the table. Users
can then select the Prev and Next buttons to move between information.

##### Prev & Next buttons 
* The Prev and Next buttons allow the site visitor to see more filtered results if they wish to see them. This feature is also good for when
there are more results than can be shown in the list. For instance, if there are more than 10 items to display, these results will move to the
second page and the user can just press the Next button to view the rest of the list. This is good because users can see exactly who won the 
award year by year without having to continuously scroll down through data.

### Features Left to Implement

In the process of this milestone project I considered adding more buttons to reset individual charts, but felt that this would clutter up
page and affect usability significantly. In the end I've opted to highlight this in the Read Me! button and provide one other button in the
footer section. More buttons may be added later if the need is there.

## Technologies Used

##### HTML 
* This code was used to layout the structure of each page and the placement of each chart on both the Stats page and the Info page. It
also contributed to the nav, main and footer sections of the page.

##### CSS 
* This code was used to add style to the HTML specifications. CSS changes were made throughout the project in order to enhance the look 
and feel of the site. While the background color is mostly white, I played around with different colors on the charts and toggle areas.

##### JavaScript 
* JS was used to queue my charts, as reset buttons and also contributed to specific functions used to create functionality on the page.
I also used a function called print_filter to access the DOM and see objects and the content of arrays on the page.

##### Bootswatch 
* The Journal template was used initially to start with as it provided a nice base for my project. However, I've added some of
my own CSS code from various places like Stack Overflow, CSS Tricks and Bootstrap.

##### Crossfiilter
* For my interactive charts I used crossfilter technology. In the lead up to adding the charts I also watched a LinkedIn course
outlining how to access information in arrays that would display and filter across multiple charts.

##### D3
* This data-driven document technology was used to fuse chart data together to make the charts with the help of HTML ids. This technology 
helped to visualise the data contained with my Kaggle dataset on Time's Person of the Year from 1927 onwards.

##### DC
* DC's library of code was used to make the charts. I took the code from the website and then charged dimensions, numbers and 
attributes to suit my needs for those charts.

##### jQuery
* This technology was used to hide and show instructions and more information at command in a way to make the dashboard less cluttered.
a min.js file was added to the JS folder and called above and below the code on each page. This technology also ensure nav functionality.

##### Kaggle
* This website was a great resource for finding a suitable dataset. By visiting this site I was able to browse available datasets and 
select one based on my own interests in world affairs. Once I found my dataset, I downloaded the file for use with my charting technologies.

##### CSV and JSON
* As you can see from my project I added both json and csv data files to my documentation - this was purely for testing reasons 
as I had difficulty access the data when I started the project. This project takes data from the .csv file only.

## Testing

Charts: 

## Deployment

## Credits

### Content

### Media

### Acknowledgements

* Print_filter from https://gist.github.com/xhinking/9341806
* Crossfilter for Data Science Essential Training - Emma Saunders, LinkedIn Learning
* DC.js for Data Science Essential Training - Emma Saunders, LinkedIn Learning
* https://dc-js.github.io/dc.js/examples/
* https://robsimons1.github.io/global-white-shark-attack-dashboard/
* https://codepen.io/traveltimn/pen/MxxBMx - Tim Nelson
