# TestingPlan.md

## Types of Tests:
### Manual Acceptance Testing
Scope: Verifying that the application meets requirements and user needs, particularly that user input/interaction is communicating with API to update the Grocery Price Comparison Map.
Verify that user input triggers the necessary backend calls to update the interface of the application as necessary, displaying search results etc. 
Responsible:  PM, Product Designers
Frequency: Conducted after the completion of each major milestone and during front-end development of user input/interactivity fields, and integration of backend to front-end

## Process/Schedule:
### Frequency and Timing
Daily: Developers conduct manual verification of backend API logic during the development phase.
Weekly: PM/Product designer conducts manual acceptance tests on the local machine.
Pre-Release: Comprehensive manual acceptance tests are conducted before checking off milestones.

### Responsibilities
Developers: Test API calls and triggers manually during feature development.
PM: Perform acceptance tests on local host version
Product Designer: Collaborate with PM to ensure acceptance criteria are met.

### Process
Team: The code will be tested on the features branch locally prior to merging into the main git. 
Frequency: Conducted before deployment of key development milestones.

### Deployment Process
1. The developer writes code and performs manual acceptance testing to ensure expected database/API outputs in backend
2. The code is reviewed and merged into the main branch.
3. Code is deployed to the local machines.
4. PM/Product designer conducts acceptance tests on local machines.
5. Upon passing acceptance tests, the code is deployed to the production version.
6. Validation is conducted by performing acceptance tests on the production version (live firebase hosting)

## Test Environments:
### Local Environment
Location: Developer's local machines (localhost).
Usage: Initial development 

### Production Environment
Location: Live Firebase hosting.
Usage: Primary environment for acceptance testing and final validation.=

## Failure Protocol:
### Defect Reporting
1. The tester identifies a defect during testing.
2. The tester logs the defect in the GitHub Issues with the following details:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Severity level

### Defect Fixing
1. Defects/bugs are assigned to developers for resolution.
2. The developer fixes the defect/bugs and updates the status in the issue tracking system.
3. Fixed defects/bugs undergo re-testing by the PM/Product Designer.

### Communication
Bug Reports: Logged and tracked in the Github issues.
Updates and Fixes: Communicated through the Github issues and team meetings.

# Acceptance Testing Script: (no stretch goals)
## Home Page 
### Context: User visits the web application 
    Expect: the user’s landing page to be the Home Page

#### Navigation bar 
Expect to see a nav bar at the top of the page with clickable links to the Home page and the Price Comparison Map Page (Req. H1 and N1)

#### Home Page body
Expect to see the brand logo, welcome message, and paragraph introducing the web application (Req. H1)

Click on “Get Started” button on the Home Page (body). Expect to be redirected to the Price Comparison Map page (Req. H1) 

Click on “Grocery Stores” on the nav bar. Expect to be redirected to the Price Comparison Map page (Req. N1)

Click on “Home” on the nav bar. Expect to be redirected back to the Home Page (Req. N1)

#### Footer content 
Expect to see a footer at the bottom of the page with copyright information, team name, and members (Req. F1)

## Price Comparison Map
### Context: Map Page Before, During, and After a User Search (Map Page Constants)
#### Navigation bar. 
Expect to see nav bar at the top of the page (Req. H1 and N1)

#### Footer. 
Expect to see a footer at the bottom of the page (Req. F1)

#### About Section. 
Expect to see a paragraph describing dataset used to build the map and the purpose of why we built this map under a heading titled “About” (Req. P1)

#### How to Use Section. 
Expect to see a short paragraph or bullet points that instruct users on how to use the map search feature under a heading titled “How to Use” (Req. P2)

#### Map. 
Expect to see a map of Seattle area and its neighborhoods geographically (Req. P5)

Click on zoom controls on map to Zoom in and out of displayed region. Expect clicking on ‘+’ to Zoom in, Expect clicking on ‘-’ to Zoom out (Req. P3)

Click and drag map in any direction (left, right, up, down). Expect displayed region to change geographically  in the direction of user’s drag interaction (Req. P3)

### Context: User visits the Price Comparison page for the first time (first load/Default View)
#### Map. 
Expect Map to indicate map is showing grocery stores in the Seattle area (Req. P6)

Expect each map marker pinpoint to correspond to a store displayed (Req. P7)

Zoom into “University Village”. Expect QFC in University Village to have a map marker pinpoint. Click on Map Marker. Expect to see pop-up with Store Name: “Quality Food Center - University Village” and relative location “2746 NE 45th St” (Req. P7)

Zoom into Trader Joe’s (near 9th Avenue and UW). Expect no Map Marker - (Krogers doesn’t own Trader Joe’s) (Req. P7)
#### Results List. 
Expect No Results List Displayed (Req. P8)

### Context: User starts a search for a grocery item
#### Search box. 
Expect to see a search box. Click Search box field and type in grocery item “fat free milk” 
Click submit button. Expect error - search should not be submitted (Req. P4)
#### Location Input Field.
Expect to see an input box for 5 digit zipcodes. Click and type in a 5 digit zipcode in the United States (i.e. 98105 for Seattle, WA) 
Click submit button. Expect error - search should not be submitted (Req. P4)
#### Radius of Dropdown. 
Expect to see a dropdown list of numbers that represent the number of miles away to search for grocery stores in the radius of . Select an option from the list. Expect state of selected option to change (i.e. color change, or radio button/checkbox checked etc.) (Req. P4)

#### Search Initialization. 
After filling out all three fields:  Search box, location input, radius dropdown fields click submit button. Expect search to be submitted (Req. P4)
If successful Kroger API call: expect to see list of items that match search term and can be found at stores. (Req. P4)
- Select at least one item from returned list.
  - Expect state of selected option to change (i.e. color change, or radio button/checkbox checked etc.)
    
If Kroger API errors: Expect to see “No results found error message” (Req. P10)
- Expect no map updates, no results list displayed
- Expect try again prompt (input a new search)
		
### Context: User successfully searches for an item - After Initialize Search - select at least one item from returned list of items that match user inputted search term.
#### Results List.
Expect Results list to populate on Price Comparison Map Page. Expect each record in results to include the item name, price, and store name (Req. P8)
Expect results list ranked in lowest to highest price order (Req. P8)

#### Map. 
Map updates to only display grocery stores where the searched item was in stock at. Map markers only displayed for these locations (verify that out of stock store returned from API call does not have a Map Marker on the map after search) (Req. P9)

Click on grocery store map marker. Expect a popup to open with store name, relative location, and at least one item name and corresponding item price (Req. P9)

### Context: Search Failures 
##### Search failures handled via Kroger API errors in search initialization (Req. P10); users select from a predetermined list of items that match their search term and can be found in local stores (Req. P4)
