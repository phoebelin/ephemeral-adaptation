var tasks_per_trial = 50;
var tasks_per_practice = 8;
var fadein_time = 500;

var used_number = [];
var getRandomNum = function(max) {
  var random_number = Math.floor(Math.random() * max);
  while (used_number.includes(random_number)) {
    random_number = Math.floor(Math.random() * max);
  }
  used_number.push(random_number);
  return random_number;
}

var word_groups = [["Braise", "Saute", "Roast", "Grill"],["Muscle", "Tendon", "Ligament", "Cartilage"],["Crawfish", "Shrimp", "Prawn", "Lobster"],["Mussel", "Oyster", "Scallop", "Abalone"],["Ceramic", "Granite", "Porcelain", "Marble"],["Blender", "Mixer", "Juicer", "Chopper"],["Fridge", "Stove", "Microwave", "Dishwasher"],["Doctor", "Physician", "Surgeon", "Nurse"],["Carpet", "Vinyl", "Laminate", "Hardwood"],["Hemlock", "Spruce", "Cedar", "Juniper"],["Happy", "Scared", "Mellow", "Angry"],["Winter", "Summer", "Spring", "Autumn"],["Arctic", "Atlantic", "Pacific", "Indian"],["Hearts", "Spades", "Diamonds", "Clubs"],["Clock", "Timepiece", "Sundial", "Watch"],["Canucks", "Flames", "Oilers", "Senators"],["Basil", "Oregano", "Thyme", "Parsley"],["Samsun", "Sanyo", "Panasonic", "Pioneer"],["Hershey", "Caramilk", "Smarties", "Eatmore"],["Tahiti", "Samoa", "Tonga", "Tuvalu"],["France", "Germany", "Spain", "England"],["Gucci", "Armani", "Versace", "Vuitton"],["Embroidery", "Crochet", "Knitting", "Sewing"],["Sardine", "Trout", "Salmon", "Whitefish"],["Bigfoot", "Sasquatch", "Minotaur", "Ogopogo"],["Flannel", "Linen", "Cotton", "Spandex"],["Scrabble", "Checkers", "Chess", "Backgammon"],["Almond", "Pecan", "Pistachio", "Walnut"],["Cheddar", "Camembert", "Gouda", "Parmesan"],["Molson", "Kokanee", "Labatt", "Coors"],["Ballroom", "Ballet", "Swing", "Hiphop"],["Beethoven", "Brahms", "Chopin", "Handel"],["Violin", "Flute", "Piano", "Percussion"],["Rhine", "Amazon", "Danube", "Yangtze"],["Penny", "Nickel", "Quarter", "Dollar"],["Purse", "Backpack", "Schoolbag", "Duffle"],["Terrier", "Bulldog", "Dalmatian", "Poodle"],["Stroll", "Saunter", "Prance", "Swagger"],["Hydrogen", "Helium", "Oxygen", "Nitrogen"],["Saturn", "Jupiter", "Venus", "Mercury"],["Sneaker", "Sandal", "Moccasin", "Loafer"],["Toyota", "Mazda", "Mercedes", "Honda"],["Termite", "Katydid", "Spider", "Ladybug"],["Coupe", "Minivan", "Sedan", "Hatchback"],["London", "Paris", "Madrid", "Berlin"],["Bahamas", "Barbados", "Jamaica", "Bermuda"],["Japan", "China", "Korea", "Singapore"],["Lipstick", "Nailpolish", "Shadow", "Blush"],["Herbal", "Rooibos", "Jasmine", "Peppermint"],["Virgo", "Taurus", "Aquarius", "Gemini"],["Chardonnay", "Merlot", "Shiraz", "Cabernet"],["Reebok", "Asics", "Adidas", "Converse"],["Tornado", "Cyclone", "Hurricane", "Storm"],["Poplar", "Birch", "Alder", "Willow"],["Spoon", "Knife", "Spatula", "Ladle"],["Lasagna", "Spaghetti", "Linguine", "Penne"],["Movie", "Theatre", "Musical", "Opera"],["Shirt", "Jacket", "Sweater", "Overcoat"],["Pencil", "Ballpoint", "Marker", "Crayon"],["House", "Apartment", "Cabin", "Cottage"],["Squirrel", "Mouse", "Hamster", "Gerbil"],["Tiger", "Leopard", "Cheetah", "Cougar"],["Parrot", "Bluebird", "Robin", "Budgie"],["Paperback", "Magazine", "Newspaper", "Journal"],["Roman", "Byzantine", "Egyptian", "Ottoman"],["Horror", "Comedy", "Drama", "Foreign"],["Hockey", "Skiing", "Curling", "Skating"],["Mountain", "Knoll", "Highland", "Foothill"],["Carrot", "Potato", "Onion", "Eggplant"],["Airplane", "Helicopter", "Blimp", "Balloon"],["Kayak", "Gondola", "Canoe", "Sailboat"],["Painting", "Sculpture", "Portrait", "Photograph"],["Soccer", "Basketball", "Baseball", "Football"]]
var selected_word_groups = [];
var index = getRandomNum(72);
var menu_counter = -1;

var trials_with_errors = 0;
var current_trial_num = 1;

$(document).ready(function() {

  var control;
  var ephemeral;
  var done_with_control = false;
  var done_with_ephemeral  = false;
  var survey_completed = false;
  var second_round_of_testing = false;

  if (Math.random() <= 0.5) {
    control = true;
    ephemeral = false;
  } else {
    control = false;
    ephemeral = true;
  }

  
  var menu_items = [[], [], []];

  var date = new Date();
  var start_time = date.getTime();
  var end_time = start_time;

  createTask();
  createMenus();

});



var createMenus = function () {
  var item = null;
  for (var i = 1; i <= 3; i++) {
    var menu = document.getElementById("menu"+i);
    var dropdown_content = document.createElement("div");
    dropdown_content.setAttribute("class", "dropdown-content");
    dropdown_content.setAttribute("id", "menu"+i+"dropdown");

    for (var j = 1; j < 20; j++) {
      if (j % 5 != 0) {
        var word = getWord();
        item = document.createElement("a");
        item.setAttribute("class", "dropdown-item");
        item.setAttribute("href", "#");
        item.innerText = word;
        //item.addEventListener("click", itemClickListener);
      } else {
        item = document.createElement("div");
        item.setAttribute("class", "dropdown-divider");
      }
      dropdown_content.appendChild(item);
      item = null;
    }
    menu.appendChild(dropdown_content);
    dropdown_content = null;

  }
  
}

var getWord = function() {
  
  if (menu_counter >= 3) {
    index = getRandomNum(72);
    menu_counter = 0;
  } else {
    menu_counter += 1;
  }

  selected_word_groups.push(word_groups[index][menu_counter]);
  return word_groups[index][menu_counter];

}

var createTask = function() {

}

$(".dropdown_item").click(function(e) {

  var predicted = false;
  var string = e.target;

})

$(".dropdown_content").click(function(e) {

  e.style.display = "block";

})

























