# Time Magazine's Person of the Year, 1927 - Present

This data dashboard displays stats from Time's Magazine's Person of the Year honor from 1927 to 2018, the present.
It shows mutliple charts with data from different dimensions and there's also text you can read to navigate the site.
You will find bar charts, line charts, pie charts and tables to show this data. You'll also see toggle sections to show and hide information.

## UX

![responsiveness.png](/images/responsiveness.png)

This website is for people who enjoy reading Time magazine and like the annual Person of the Year feature.
They want to know who the previous winners of the honor are, what year they won, from what categories and
country the winners are from.

1. <b>User story 1</b>: As a reader of Time magazine, my favourite issue is when they choose Person of the Year. 
2. <b>User story 2</b>: As a student journalist writing about Time's People of the Year, I want to know more of its history as a feature.
3. <b>User story 3</b>: As someone who doesn't know what Time magazine is or what Person of the Year is, I'm still interested in the stats.
4. <b>User story 4</b>: As a sometimes reader of Time magazine, I like hearing who has made it to the top of the Person of the Year choice.
5. <b>User story 5</b>: As a reader of Time magazine, always want to know who the Person of the Year is, and the previous winners.

### Wireframes

Initally a scatterplot was going to be used and more charts would be added to each row, but these features proved too unrealistic given space
and dimensions that were set. A second page was decided on when I realised I wanted to have a navbar on the site.

![wireframe1.png](/images/wireframe1.png)
![wireframe2.png](/images/wireframe2.png)

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

In addition, I had considered changing the colors of the charts to complement the black, red and white colors associated with Time magazine.
In the end, I opted to leave the chart colors as they were, to keep the page more colorful. This can be re-evaluated and added as a featre later.

## Technologies Used

##### HTML5
This code was used to layout the structure of each page and the placement of each chart on both the Stats page and the Info page. It
also contributed to the nav, main and footer sections of the page.

##### CSS3
This code was used to add style to the HTML specifications. CSS changes were made throughout the project in order to enhance the look 
and feel of the site. While the background color is mostly white, I played around with different colors on the charts and toggle areas.

##### JavaScript 
JS was used to queue my charts, as reset buttons and also contributed to specific functions used to create functionality on the page.
I also used a function called print_filter to access the DOM and see objects and the content of arrays on the page.

##### Bootswatch 
The Journal template was used initially to start with as it provided a nice base for my project. However, I've added some of
my own CSS code from various places like Stack Overflow, CSS Tricks and Bootstrap.

##### Crossfiilter
For my interactive charts I used crossfilter technology. In the lead up to adding the charts I also watched a LinkedIn course
outlining how to access information in arrays that would display and filter across multiple charts.

##### D3
This data-driven document technology was used to fuse chart data together to make the charts with the help of HTML ids. This technology 
helped to visualise the data contained with my Kaggle dataset on Time's Person of the Year from 1927 onwards.

##### DC
DC's library of code was used to make the charts. I took the code from the website and then charged dimensions, numbers and 
attributes to suit my needs for those charts.

##### jQuery
This technology was used to hide and show instructions and more information at command in a way to make the dashboard less cluttered.
a min.js file was added to the JS folder and called above and below the code on each page. This technology also ensure nav functionality.

##### Kaggle
This website was a great resource for finding a suitable dataset. By visiting this site I was able to browse available datasets and 
select one based on my own interests in world affairs. Once I found my dataset, I downloaded the file for use with my charting technologies.

##### CSV and JSON
As you can see from my project I added both json and csv data files to my documentation - this was purely for testing reasons 
as I had difficulty access the data when I started the project. This project takes data from the .csv file only.

##### AWSCloud9
I used AWS Educate, Cloud 9 to write up my code. With this programme was I work on my dashboard in an environment and I access to a Terminal
where I could push versions to GitHub.

##### GitHub
I've saved my project on this service as I can easily push all content over to it over a long period of time. I can see the changes I've 
made and track issues as they come up. It's great for seeing each version or saved addition I've made.

##### Balsamiq
At the start of this project I used this service to brainstorm and display my ideas for the look of the site. See above in Wireframes.

##### Google Fonts
To add variety and style to my project, I used two fonts: Merriweather (for major titles) and Lato (other text). These fonts have been 
added to my style.css page and imported both fonts, adding font weights.

##### Bootstrap 4
I used this technology for its framework and the grid system, which helped make my site as responsive as possible.

## Testing

#### General

I tested the functinality of this project manually. This was done by first reading code, adding it and then checking it worked. This proved 
to be very helpful, especially when keep note of what worked and what didn't. For the charts, it was easier to see when they weren't working
as DC charts would not display at all if there was an error in code.

Responsive design was very important for this project as I'd heard it was very difficult to make charts responsive, which would not make a 
good user experience when using the site on a mobile. To make it as responsive as possible I used Bootstrap's grid system and -sm, -md and
-lg to set the responsive nature of the site. I manually tested this by checking the look of the site using Chrome Developer Tools.

Browsers I used to check the site include Chrome Version 76.0.3809.100, Safari Version 12.0 and Firefox Quantum 68.0.2. Checking my site on
different browsers helped me see how it would render for users whose default browser is not Chrome, like mine. Mobiles that were used to test
how the site looks were iPhone 5/SE, iPhone 6/7/8 (and plus versions), iPhone X, Samsung Galaxy A70, Samsung Galaxy S5, Pixel 2 (and XL). iPad
and iPad Pro were used to see a medium screens. On laptop, it was viewed with a MacBook Air.

#### Navigation

I added a Bootstrap navigation but on feedback from Slack peers, the dropdown feature didn't work. When I added jQuery, it worked then. To
test it I asked family members and peers to view my website on mobile and on tablet to see if the navbar worked. I then used the devices listed
above to see the navbar in action.

#### Charts

Print_filter.js was used a lot initially to see what data was used and what dimensions I had a hold of. It was a great way to see the data I 
had called. To test these charts further, then I asked friends and family members to visit the site and see if the charts filtered accordingly.
It was noticed that the Prev and Next buttons weren't acting properly, so after checking it out myself, I crosschecked my code with the code 
listed in the DC.js documentation and realised an ID tag was not assigned properly.

#### Try it out

1. <b>Navbar</b>: Visit https://adonegan.github.io/milestone2-dashboard/stats.html and click on Stats and Info to see both pages. On your phone, uses the hamburger menu icon to move between pages.
2. <b>Click Me! button</b>: Go to the website and click on the button. You will see a light orange box display with instructional information. Click it again and watch the box fade away again.
3. <b>Pointer</b>: Hover over all buttons and toggle areas to see a pointed cursor. Move the cursor away to see the arrow again. Desktop only.
4. <b>Pie chart</b>: Click on a colored slice and see other charts filter. Hover over a slice and see more amount information on the data. You can also click on legend to see data. On mobile, swipe across to see full data.
5. <b>Bar chart</b>: Press on a bar and see other charts filter. Keep the cursor on it to see numbers of the data on display. On mobile, swipe across to see full chart.
6. <b>Year selector</b>: Click on the year, and see other charts filter. To see all data make sure no other chart has been activated. If one is, you'll see filtered data.
7. <b>Table data</b>: Use Prev and Next buttons to move between data. You will see amount information starting with "Showing" under the table. You'll see fitered data if a chart has been activated. On mobile, swipe across.
8. <b>Toggle headers</b>: Click on By Honor (or any other 'By' header) and you'll see a black dropdown with added context for the chart. Click them again to see them slide up out of view again.
9. <b>Reset buttons</b>: Both buttons must be pressed to reset the charts at the same time. There is no button for charts on an individual level.
10. <b>Info page</b>: Click 'Info' in the navbar to visit the second and final page of the website. When this page you'll see three text blocks and a video, which stack on mobile.

#### Issues


| Number | Issue            | Resolution   |
|--------|------------------|--------------|
|  1  | Seeing data   | Added print_filter.js function to act like console.log, so I could see inside variables while on the DOM |
|  2  | Code errors | Consulted with Student Care and also used Diffchecker to spot coding irregularities |
|  3  | Responsive design  |  Added scrolling feature to all charts to make the site as responsive as possible on mobile  |
|  4  | Button placement  |  Placed buttons on top and bottom of page to prevent clutter |
|  5  | Instructions  |  Feedback from users suggested more instructions were needed so I added more text to show users how to use site |
|  6  | Too much writing  | Added jQuery slide and fade toggles to show and hide instructional text |
|  7  | Too many pages  | Initially had three htmls but deleted them in favour of an info.html page with a little added content on Time  |
|  8  | Logo placement  | Big Time logo seemed out of place in body of text so I added it to the navigation bar |
|  9  | Color instructions | Text and instructions were hard to read. Changed to a black background color on jQuery toggles |
|  10 | Table text | Too much text in fields so I made the text smaller to accommodate and make it easier to read on a design level |
|  11 | Prev & Next buttons | Compared peer code with office DC code and added to my site |

## Deployment

I deployed this website using the Master Branch on hosting platform GitHub Pages. I did this by going into my GitHub repository, 
going to Settings, publishing from the Master Branch and pressing Save. I took some guidance from this page: 
https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages 

Before deploying the site, I viewed the site by previewing the file on AWSCloud9, where I could see changes immediately after saving.
After deploying, any changes I saved took a little longer to see but the site environment was more stable and it was easier to send 
the link to peers for feedback. There was also the added advantage of the site always being live, and not just available if I was
online on AWSCloud9.

Before deployment, I developed the structure of my site on AWSCloud and used git init, git add, git commit -m and git push to save my
changes and versions to GitHub Pages, so the natural host was GitHub.

## Credits

### Content

* Time data from Kaggle: https://www.kaggle.com/timemagazine/magazine-covers
* Text content edited and added to from content on Wikipedia: https://en.wikipedia.org/wiki/Time_Person_of_the_Year

### Media

* Favicon take from Google Images.
* Responsiveness and device images image from http://ami.responsivedesign.is/ 
* The Time video is hosted on YouTube: https://www.youtube.com/watch?v=t6GtguXWx34

### Acknowledgements

* Print_filter from https://gist.github.com/xhinking/9341806
* Additional support: Crossfilter for Data Science Essential Training - Emma Saunders, LinkedIn Learning
* Additional support: DC.js for Data Science Essential Training - Emma Saunders, LinkedIn Learning
* Chart documentation: https://dc-js.github.io/dc.js/examples/
* Inspiration from: https://robsimons1.github.io/global-white-shark-attack-dashboard/ - Rob Simons
* Inspiration from: https://codepen.io/traveltimn/pen/MxxBMx - Tim Nelson
