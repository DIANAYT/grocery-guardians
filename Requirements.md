# Phase 3 Functional Requirements: Requirements.md

## Notes

- Highest Priority feature is the Grocery Price Comparison Map because it addresses our problem statement most closely. Users do not need to create an account/be logged in to interact with this feature. 
- Second Priority Feature is the Recipe Generation feature (stretch goal) because it assists users with meal planning. 

- Profile/Saving Favorites feature is a stretch goal with lowest priority that we will implement if we have the time because this feature is not essential.

## Homepage 
### COMPLETE - H1) If the Profile/Saving Favorites feature is not implemented, the home page of the web application will contain the following: [[Milestone 1 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/1)]
	COMPLETE #1 H1a. Navigation Bar
 
	COMPLETE #1 H1b. Brand logo and website title 
 
	COMPLETE #1 H1c. Welcome message 
 
	COMPLETE #1 H1d. A paragraph with a short description and introduction to our application 
 
	COMPLETE #1 H1e. “Get Started” Button will navigate to the Price Comparison Map feature when clicked


### INCOMPLETE STRETCH - H2) If the Profile/Saving Favorites feature is implemented, the home page will contain the following: (stretch goal for profile/favorites not attempted)
	H2a. Navigation Bar
 
	H2b. Brand logo and website title
 
	H2c. Welcome message
 
	H2d. A paragraph with a short description and introduction to our application
 
	H2e. “Get Started” Button will navigate to the Profile Page when clicked 
 
	H2f.  The footer will contain the following:
		H2f1. copyright information
		H2f2. team name and members
## Navigation Bar:
### COMPLETE - N1) If the Profile/Saving Favorites feature is not implemented, the navigation bar will contain the following: [[Milestone 1 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/1)]
	COMPLETE #1 N1a. Brand logo left centered 
 
	COMPLETE #1 N1b. Clicking on elements in the navigation bar will link to the following:
		COMPLETE N1b1: Home Page 
		COMPLETE N1b2: Price Comparison Map Page 
		INCOMPLETE STRETCH N1b3: Recipe Generation Page (Stretch Goal)
  
	COMPLETE #1  N1c. Navigation bar links will be right centered on the navigation bar 
 
	COMPLETE #1 N1d. The navigation bar will be displayed at the top on every page
 
### INCOMPLETE STRETCH (stretch goal for profile/favorites not attempted) N2) If the Profile/Saving Favorites feature is implemented, the navigation bar will contain the following:
	N2a. Brand logo left centered
 
	N2b. Clicking on elements in the navigation bar will link to the following:
 
		N2b1: Home Page
		N2b2: Price Comparison Map Page 
		N2b3: Recipe Generation Page (Stretch Goal)
		N2b4: Profile Page
  
	N2c. Navigation bar links will be right centered on the navigation bar
 
	N2d. The navigation bar will be displayed at the top on every page
## Footer
### COMPLETE - F1)  The footer will contain the following: [[Milestone 1 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/1)]

	COMPLETE #1 F1a. copyright information
 
	COMPLETE #1 F1b. team name and members
 
	COMPLETE #1 F1c. The footer will be displayed at the bottom on every page
 
## Price Comparison Map
### COMPLETE - P1) The price comparison map page will display an about section with the following during all views of the page: [[Milestone 3 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/3)]
	COMPLETE #3 P1a. Paragraph describing dataset used to build the map, including important features and external link to the API or dataset. 
 
	COMPLETE #3 P1b. Description of the purpose of why we built this map 

### COMPLETE - P2) The price comparison map page will display a “How To Use” section during all views of the page: [[Milestone 3 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/3)]
	COMPLETE #3 P2a. Short paragraph and/or bullet points that instruct users on using the search feature and what information the map is capable of displaying (i.e. grocery stores and prices of specific grocery store items)
 
	COMPLETE #3 P2b. Located below the about section

### COMPLETE - P3) During all views of the price comparison map page, the user should be able to interact with the map in the following ways: [[Milestone 3 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/3)]
	COMPLETE #3 P3a. The user should be able to Zoom in and Zoom out of the displayed region of the map 
 
	COMPLETE #3 P3b. The user should be able to change the location/region displayed in the map view by clicking and dragging the map in any direction (left, right, up, and down)

### COMPLETE - P4) During all views of the price comparison map page, users should be able to initialize the search for grocery store items process [[Milestone 2 on Github](https://github.com/INFO442-Summer2024/g-team/milestone/2)]
	COMPLETE #2 P4a. The page must include a method to take in user input, which could be in the following ways depending on feasibility:
		COMPLETE #2 P4a1. Search box that allows users to type in any grocery items 
			COMPLETE #2 P4a1.1 Search box must take in case insensitive strings (account for uppercase/lowercase)
			COMPLETE #2 P4a1.2 Include a submit button or other clear trigger of submitting typed user inputs (i.e. enter button on keyboard)
		COMPLTE #2 P4a2. Input box that must take in 5 digit zipcodes in the United States and optionally, a button that allows the user to use their current location
		COMPLETE #2 P4a3. Dropdown list of numbers that represent the number of miles away to search for grocery stores in the 	radius of
		COMPLETE #2 P4a4. Both selections (P4a2. and P4a3.) must be made before the submit button is allowed to be pressed
		COMPLETE #2 P4a5. Upon submitting, the user will have to filter/select an item from a list of items that match their given search term and can be found at local stores
			COMPLETE #2 P4a5.1 Users must be able to select at least one item per search
			COMPLETE #2 P4a5.2 The page must clearly display selected items to user in one of these following ways:
				- State change of checkboxes/radio buttons, each item will have a checkbox/radio button associated (when clicked, selected color of checkbox/button should change, no color when the 					user did not click)
				- Highlight selected/clicked items 
				- Add clicked items to a selected items search list
			
### COMPLETE #3 - P5) The map should display at minimum a map of the Seattle area geographically. [[Milestone 3 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/3)]

### COMPLETE #3 - P6) On the Default View of the price comparison map page (first load), the page should indicate that the map is currently showing grocery stores in the Seattle area - (i.e. Map subheading titled “Grocery Stores”, etc.) [[Milestone 3 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/3)]

### COMPLETE #3 - P7) On the Default View of the price comparison map page (first load), the map should: [[Milestone 3 on GitHub](https://github.com/INFO442-Summer2024/g-team/milestone/3)]
	COMPLETE #3 P7a. Display grocery stores in Seattle 
 
	COMPLERE #3 P7b. Each store displayed should have a marker pinpoint on the map
 
	COMPLETE #3 P7c. Clicking on a store marker should open a pop-up with the name of the store and location/address

### P8) Once a user has submitted their grocery item search if the search string is found as a  grocery item in our database/API used, the results list on the page will update in the following manner: [[Milestone 5 on Github](https://github.com/INFO442-Summer2024/g-team/milestone/5)]
	COMPLETE #5 P8a. Each record in the results list will display at minimum the item name, price, and store name
		COMPLETE #5 P8a1. Include coupon/discount if applicable (Stretch goal)
  
	COMPLETE #5 P8b.The results list should not be present on the page prior to the search 
 
	INCOMPLETE  P8c. The results list should be ranked in order price ascending (lowest to highest) or in alphabetical order in the case of price ties
		INCOMPLETE STRETCH P8c.1 In the case of ties, the nearest location should be shown first 	(stretch goal)
### COMPLETE - P9) Once a user has submitted their grocery item search if the search string is found as a grocery item in our database/API used, the map on the page will update in the following manner: [[Milestone 4 on Github](https://github.com/INFO442-Summer2024/g-team/milestone/4)]
	COMPLETE #4 P9a. The map should only display grocery stores where the searched item was in stock at
		COMPLETE #4 9a1. Map markers should only be displayed for these locations
  
	COMPLETE #4 P9b. Clicking on a particular grocery store map marker will open a popup that includes the following
		COMPLETE #4 P9b1. Store name and relative location (ex// 45th and 2nd)
		COMPLETE #4 P9b2. Item name 
		COMPLETE #4 P9b3. Item Price 
		COMPLETE #4 P9b4. Coupon/Discount if applicable (Stretch goal)
  
	COMPLETE #4 P9c. The popup will at minimum display the item details (name, price) for at least one item result at that grocery 	store
 
	INCOMPLETE STRETCH P9d. Popup includes all results for that store (Stretch goal)

### COMPLETE - P10) Once a user has submitted their grocery item search if the search string is not found as a  grocery item in our database/API used, the page content will display the following: [[Milestone 6 on Github](https://github.com/INFO442-Summer2024/g-team/milestone/6)]
	COMPLETE #6 P10a. Results list is not displayed 
 
	COMPLETE #6 P10b. “No results found” error message will be displayed 
 
	COMPLETE #6 P10c. Users must input a new search to display results
		COMPLETE #6 P10c1. Users prompted to try again through a message/notification 
  
	COMPLETE #6 P10d. Map will not update to display searched items

### COMPLETE #4, #5 - P11) The price comparison page should accurately return and display search results for at least one neighborhood region in Seattle. [[Milestone 4 on Github](https://github.com/INFO442-Summer2024/g-team/milestone/4) + [Milestone 5 on Github](https://github.com/INFO442-Summer2024/g-team/milestone/5)]

### INCOMPLETE STRETCH - P12) User input field for specifying location in Seattle for map to respond by auto zooming/displaying specified region (stretch goal)
	P12a. Location filter options for map include a list of neighborhood regions in Seattle (stretch goal)
 
	P12b. User selects a neighborhood in Seattle using map filter options (stretch goal)
 
	P12c. Map reorients/auto zooms to display only selected neighborhood region in the viewbox (stretch goal)

## Recipe Generation - Stretch Goal 1:
- All of the following requirements are stretch goals for our recipe generation feature:
  
### R1) When the user clicks on the recipe selection feature, a list of recipes will be displayed. This list will include pictures of the dishes and key ingredients for each recipe. This list will consist of recipes that contain ingredients that are on sale.
	R1a. The recipes shown will be dynamically filtered based on the current time of day to provide appropriate meal 		suggestions. (stretch goal)
		R1a1. Breakfast Selection for the default recipes (4 AM - 10 AM) 
			Trigger: If the user accesses the recipe section between 4:00 AM and 10:00 AM.
			Behavior: Display a default selection of breakfast recipes.
			Content: Include recipes for traditional breakfast foods such as pancakes, omelets, smoothies, cereals, 			etc., along with pictures and a list of key ingredients.

		R1a2. Lunch Selection for the default recipes (10 AM - 4 PM)
			Trigger: If the user accesses the recipe section between 10:00 AM and 4:00 PM.
			Behavior: Display a default selection of lunch recipes.
			Content: Include recipes for lunch meals such as sandwiches, salads, soups, wraps, etc., along with 				pictures and a list of key ingredients.
   
		R1a3. Dinner Selection for the default recipes (4PM - 10 PM)
			Trigger: If the user accesses the recipe section between 4:00 PM and 10:00 PM.
			Behavior: Display a default selection of dinner recipes.
			Content: Include recipes for dinner dishes such as pastas, stir-fries, casseroles, grilled meats, etc., 			along with pictures and a list of key ingredients.
   
		R1a4. Late night snack Selection for the default recipes (4PM - 10 PM)
			Trigger: If the user accesses the recipe section between 10:00 PM and 4:00 AM.
			Behavior: Display a default selection of late-night snack recipes.
			Content: Include recipes for snacks such as nachos, small desserts, healthy bites, etc., along with 				pictures and a list of key ingredients.
   
	R1b. The main recipe page (list of recipes) will also include text and an input box that says “look up recipes using 		your ingredients” to describe the use of the input box as well as a submit/search button.
		R1b1. The input box must take in ingredient names separated by commas
  
		R1b2. Upon submitting, the page will display a list of recipes, in the same format as the default, with new 			recipes including at least one of the specified ingredients if possible.
### R2) Once the recipe is chosen, the user can check out the ingredients and procedure to create the dish.  
	R2a. Recipe Details Page Layout: 
		R2a1. Header Section: Title of the Dish: Displayed prominently at the top of the page.
			Author Name: Displayed directly below the title. 
			Time Posted: Displayed next to the author name, indicating when the recipe was posted. 
		If there is not an author or publish time/date, the header will only contain the title of the dish 
		R2a2. Image Section: Image of the Dish: Centered and sized to 760 pixels wide and 500 pixels high. This image 			should visually represent the prepared dish.
  
	R2b.  Recipe Description Order
		R2b1. Description Section:
			Total Time: Displayed first, indicating the total time required to prepare and cook the dish.
			Yield: Displayed second, specifying the number of servings or yield of the dish.
			Ingredients: Listed in order, providing a clear and detailed list of all necessary ingredients, 				including quantities.
			Preparation: Detailed step-by-step instructions on how to prepare and cook the dish, ensuring clarity 				and completeness.
## Saving Favorites and Stores - Stretch Goal 2:
- All of the requirements below are stretch goals for our Saving Favorites and Stores feature:
  
### S1) If the saving favorites and stores feature is implemented, then the application will include a profile page

### S2) If users are not logged in: 
	S2a. The application will show the navigation bar with the Profile tab on all pages 
 
	S2b. Clicking on the “Get Started” button on the homepage will navigate users to the profile page where users will be 		prompted to create an an account or log in to an existing account 
		S2b1. The profile page will contain the brand logo and website title on the left side 
		S2b2. The sign in form will allow users to sign in with email or use their google account and take in the 			user’s Zip Code to locate nearest grocery stores.

### S3) If users are logged in, the profile page will contain the following:
		S3a. Brand logo and website title 
  
		S3b. Profile picture with the user’s username displayed on the left side of website
  
		S3c. The right side of the page will have favorite recipes and favorite grocery stores
			S3c1. Under the Favorite Recipes heading, users will see a list of recipes they have saved, User will 				be able to click on the meal to see recipe
			S3c2. Under the Favorite Stores heading, users will see a list of their selected grocery stores
			S3c3. To allow users to select favorites, recipe cards and grocery Map Markers will also contain 				clickable heart buttons, Only if the user clicks the heart button, then the respective recipe or 				grocery store should be present in the Favorites feed
