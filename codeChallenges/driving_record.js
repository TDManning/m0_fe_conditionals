// # Code Challenges

// Below are 3 code challenges, increasing in complexity. You are required to complete 1 (of your choice) and encouraged to complete 2. If you are ahead on your schedule and have the time, you can absolutely complete all 3! For each challenge you want to work on, create a new JavaScript file inside this `codeChallenges` directory and choose a name that makes sense.

// After completing your selected challenge(s), create a short video to share with your Slack small group as part of your deliverable for this lesson. In your video, please:
// - Introduce the challenge
// - Demonstrate how to live-code the solution
// - Explain each line of code (this can be done while live-coding or after)
// - Show that the program works as intended by running the code (you should run the code more than once to prove it works for all logic paths)
// - Share a challenge or question you had when you solved it the first time

(https://www.loom.com/share/edc6bbd37c76429b9d35127e1fea3dde?sid=5d1ad69f-e8c8-45b1-bc67-86be845ad7cd)

var goodDrivingRecord = true;
var age = 26;

if (age >= 25 && goodDrivingRecord) {
    console.log("Congratulations! You get a discount on your rental car!")
        } else if (age >= 25 || goodDrivingRecord) {
            console.log("Your rental car will be the standard price")
        } else {
            console.log("Sorry, but you'll need someone over 25 to sign for the rental")
            }

goodDrivingRecord = true;
age = 24;

if (age >= 25 && goodDrivingRecord) {
    console.log("Congratulations! You get a discount on your rental car!")
        } else if (age >= 25 || goodDrivingRecord) {
            console.log("Your rental car will be the standard price")
        } else {
            console.log("Sorry, but you'll need someone over 25 to sign for the rental")
            }

goodDrivingRecord = false;
age = 24;

if (age >= 25 && goodDrivingRecord) {
    console.log("Congratulations! You get a discount on your rental car!")
        } else if (age >= 25 || goodDrivingRecord) {
            console.log("Your rental car will be the standard price")
        } else {
            console.log("Sorry, but you'll need someone over 25 to sign for the rental")
            }



// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental