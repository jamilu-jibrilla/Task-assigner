let button = document.getElementById("button");
let anime = document.getElementsByClassName("animate")[0];
let takeout = document.getElementsByClassName("takeout")[0];
// tasks
let dishWasher = document.querySelectorAll("#dish-washer");
let floorMopper = document.querySelectorAll("#mop-floor");
let fetchWater = document.querySelectorAll("#fetch-water");
//  weeks
let mon = document.getElementById("monday");
let mon_lunch_dinner = document.querySelector("#monday2");

// mondays breakfast,dinner and lunch.
let mon_breakfast = document.querySelector("#mon_breakfast")
let mon_lunch = document.querySelector("#mon_lunch")
let mon_dinner = document.querySelector("#mon_dinner")

let tue = document.getElementById("tuesday");
let tue_lunch_dinner = document.querySelector("#tuesday2");
// // tuesdays breakfast,dinner and lunch.
let tue_breakfast = document.querySelector("#tue_breakfast")
let tue_lunch = document.querySelector("#tue_lunch")
let tue_dinner = document.querySelector("#tue_dinner")

let wed = document.getElementById("wednesday");
let wed_lunch_dinner = document.querySelector("#wednesday2");
// // wednesday's breakfast,dinner and lunch.
let wed_breakfast = document.querySelector("#wed_breakfast")
let wed_lunch = document.querySelector("#wed_lunch")
let wed_dinner = document.querySelector("#wed_dinner")

let thur = document.getElementById("thursday");
let thur_lunch_dinner = document.querySelector("#thursday2");
// // thursdays breakfast,dinner and lunch.
let thur_breakfast = document.querySelector("#thur_breakfast")
let thur_lunch = document.querySelector("#thur_lunch")
let thur_dinner = document.querySelector("#thur_dinner")

let fri = document.getElementById("friday");
let fri_lunch_dinner = document.querySelector("#friday2");
// // mondays breakfast,dinner and lunch.
let fri_breakfast = document.querySelector("#fri_breakfast")
let fri_lunch = document.querySelector("#fri_lunch")
let fri_dinner = document.querySelector("#fri_dinner")

let sat = document.getElementById("saturday");
let sat_lunch_dinner = document.querySelector("#saturday2");
// // saturdays breakfast,dinner and lunch.
let sat_breakfast = document.querySelector("#sat_breakfast")
let sat_lunch = document.querySelector("#sat_lunch")
let sat_dinner = document.querySelector("#sat_dinner")

let sun = document.getElementById("sunday")
let sun_lunch_dinner = document.querySelector("#sunday2")
// sundays breakfast,dinner and lunch.
let sun_breakfast = document.querySelector("#sun_breakfast")
let sun_lunch = document.querySelector("#sun_lunch")
let sun_dinner = document.querySelector("#sun_dinner")

let dishWashers = [" Zainab ", " Aisha ", " Ummul "," Sakina ", " Farida "];


let waterSuppliers = [" Sadiq ", " Murtala ", " Jamilu ", " Mahmud ", " Mujahid "];


let floorMoppers = dishWashers.concat(waterSuppliers);


let WeeksChefAndRecipe = {
    chefs: ["Farida", "Murtala", "Walida", "Sakina", "Ashraf", "Sadiq", "Jamilu"],  
   
    ["food and recipe"]: 
    {
        morning: [ 
            [` [ Tea and bread with egg ] Ingredients: 4 Fresh eggs,
            5 tbsp Vegetable/groundnut oil,
            Half cup fresh tomatoes choppped,
            Small Sliced Onions chop,
            Fresh pepper to taste,
            Salt to taste,
            Seasoning cube Just a pinch.`],

            [` [ Bread and beans ] ingredients: Ingredients (for 5 serving)
            3 to 4 cups of beans,
            Red oil (10cl),
            About 5 to 10 balls of tomatoes (cut to bits),
            2 balls of onions,
            Vegetable (optional),
            Potash (very small, about half baby spoon)(optional)(I don’t use it),
            Crayfish (1 cup blend),
            Knorr cube (2 cubes) or any spice of choice,
            Salt and pepper to taste.`],

            [` [Irish potatoes] Ingredients: Irish potatoes,
            Oil,Grounded scotch bonnet pepper and onion, tomatoes and red pepper, Seasoning
            Meat, Fried fish (scumbia), Tomato paste`],

            [` [ Rice and stew ] ingredients: 4 cups rice
            20 fresh tomatoes big,
            5 cup vegetable oil,
            10 fresh pepper big,
            2 big onion bulb,
            3 tablespoon curry,
            7 cube maggi,
            to taste Salt,
            1 tablespoon thyme,
            3 pieces ginger medium,
            6 cloves garlic,
            300 g chicken meat.`], 
        ],
        afternoon:[
            [` [ Eba with vegetabe's soup ]  ingredients: Big bowl Waterleaves,
            Big bowl ugu leaves (fluted pumpkin),
            Roasted mackerel,
            1KG or 35 Ounce of Goat meat,
            1 cup crayfish,
            6 scotch bonnet peppers,
            400ml Palm oil,
            2 seasoning cubes,
            Salt to taste,
            2 tablespoons Ground Ofor.`],

            [` [ Semovita with egusi soup ] ingredients: 2KG Assorted meat,
            4 cups of egusi (melon),
            Roasted fish (about two medium sizes),
            1 cup of ground crayfish,
            2 cups of washed bitter leaves,
            3 seasoning cubes,
            300ml of palm oil,
            About 2 liters of water,
            Salt to taste,
            Pepper to taste (scotch bonnet),
            One medium-sized Stock fish head (okporoko),
            20g Dawadawa or opkei (local ingredients). `],

            [` [ Tuwo with okro soup ] ingredients: 800 g Fresh Okro ( cut up in thin rings by hand or with a food processor.),
            2 Medium Onions,
            2 Large red bell peppers,
            2 habanero or Jamaican hot pepper,
            1/2 cup crayfish,
            6 Tbsp or 50g ground Ogbono,
            Bouillon powder/ salt to taste,
            Precooked assorted meats,
            600 g cow feet,
            700 g smoked turkey,
            300 g stockfish.`],

            [` [ Rice with Beef stew ] ingredients: 1-2 pound stew beef , cut in small pieces
            1/2 -1 cup oil (Canola, Vegetable or Corn) , adjust as needed
            1 medium yellow onion,
            4 roma tomatoes , they are less acidic,
            4 peeled garlic cloves,
            ¼ cup chopped parsley,
            3-4 tablespoon celery leaves,
            ½ -1 scotch bonnet pepper , optional
            1-2 basil leaves,
            1 teaspoon fresh thyme,
            1 canned tomatoes sauce , 14 ounce
            ½ teaspoon curry powder,
            1 teaspoon white pepper,
            1-2 teaspoons smoked paprika,
            1 tablespoon Maggie powder or beef bouillon powder,
            1-2 green onion sliced,
            salt to taste`],
        ],
        night:[
            [` [ Jollof spagheti ]   ingredients: 22 g Spaghetti,
            1.5 cup Pepper Sauce,
            1/2 lb ground beef Minced Meat,
            1 Onion small,
            1 Tomato large,
            3 green Onions Sprigs of,
            3 Bay leaves,
            6 oz mixed vegetables,
            3 Tbsp vegetable Oil,
            Salt to taste,
            2 Tsp curry powder,
            1 Tsp Thyme,
            3/4 Tsp soup base or 1 stock cube.`],

            [` [ plantain porridge ] ingredients: 5 medium sized Unripe plantain,
            100ml Palm Oil,
            1 cup sliced tomatoes,
            1 Tbsp sliced scotch bonnet peppers,
            1 cup sliced onions,
            2 seasoning cubes,
            500g Frozen mackrel,
            200g bonga fish,
            2 tablespoons Ground crayfish.`],

            [` Moi Moi ] ingredients: Serving: 6,
            Total time: 90 minutes,
            1 kg of Mackerel,
            7 Cooked Eggs (optional),
            Half cup of vegetable oil,
            3 seasoning cubes,
            Salt to taste,
            1 cup of sliced onions,
            Tatashe or shobo (about 5 to 10, it add the reddish color),
            Crayfish (1 cup),
            3 cups of beans.`],

            [` [ chicken pepper soup ] ingredients:,Chicken,
            Onions,
            Bouillion Powder or stock cubes,
            Salt,
            Cameroon pepper,
            Ground Crayfish,
            Palm oil (optional),
            Pepper soup spice blend,
            Scent leaves ( substitute with parsley or basil).`],
        ]
    },
};

function randomAssignment(min = 0, max = 5) {
    let rand = min - 0.5 + Math.random() *  (max - min + 1)
    return Math.round(rand)
}
function assigner() {
    function noRepeat() {
        let names = []
        for(let i=0; i < 3; i++) { 
            names.push(waterSuppliers[randomAssignment(0, (waterSuppliers.length) - 1)]);
            names = [...new Set(names)] ;
            if(names.length < 3) {
                i--
            }
        }
        if(names.length > 3) {
            names.splice(3);
        }
       names =  names.join()
        return names;
    }
       
    for(let item of fetchWater) {
       item.append(...noRepeat())
    }

    for(let item of dishWasher) {
        item.append(document.createTextNode( dishWashers[randomAssignment(0, (dishWashers.length) - 1)] ))
    }

    for(let item of floorMopper) {
        item.append(document.createTextNode( floorMoppers[randomAssignment(0, (floorMoppers.length) - 1)] ))
    }


    // name
    // food and 
    // recipe will be randomly selected and appended from monday to sunday
    
    let length = WeeksChefAndRecipe["food and recipe"].morning.length - 1;
    let length1 = WeeksChefAndRecipe.chefs.length - 1;
    let length2 = WeeksChefAndRecipe["food and recipe"].afternoon.length - 1;
    let length3 = WeeksChefAndRecipe["food and recipe"].night.length - 1;
    
    mon.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    mon_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]))
    // let ld = WeeksChefAndRecipe.chefs[randomAssignment(0, length1)] 
    // for(let item of mon_lunch_dinner) {
    //     item.append(document.createTextNode(ld))
    // }
    mon_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    mon_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    mon_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))

    tue.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    tue_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
 
    tue_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    tue_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    tue_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))


    wed.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    wed_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));

    wed_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    wed_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    wed_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))

    
    thur.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    thur_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
   
    thur_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    thur_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    thur_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))

    fri.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    fri_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    fri_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    fri_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    fri_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))

    
    sat.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    sat_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));

    sat_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    sat_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    sat_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))

    sun.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    sun_lunch_dinner.append(document.createTextNode(WeeksChefAndRecipe.chefs[randomAssignment(0, length1)]));
    sun_breakfast.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].morning[randomAssignment(0, length)]))
    sun_lunch.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].afternoon[randomAssignment(0, length2)]))
    sun_dinner.append(document.createTextNode(WeeksChefAndRecipe["food and recipe"].night[randomAssignment(0, length3)]))
    
}   

function animation() {
    anime.classList.remove("remove");
    anime.classList.add("animate");
    takeout.classList.add("animate")
    takeout.classList.add("remove")
}

button.addEventListener("click", assigner,{once:true})
button.addEventListener("click", animation)