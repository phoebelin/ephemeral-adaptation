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

  var word_groups = [["Braise", "Saute", "Roast", "Grill"],["Muscle", "Tendon", "Ligament", "Cartilage"],["Crawfish", "Shrimp", "Prawn", "Lobster"],["Mussel", "Oyster", "Scallop", "Abalone"],["Ceramic", "Granite", "Porcelain", "Marble"],["Blender", "Mixer", "Juicer", "Chopper"],["Fridge", "Stove", "Microwave", "Dishwasher"],["Doctor", "Physician", "Surgeon", "Nurse"],["Carpet", "Vinyl", "Laminate", "Hardwood"],["Hemlock", "Spruce", "Cedar", "Juniper"],["Happy", "Scared", "Mellow", "Angry"],["Winter", "Summer", "Spring", "Autumn"],["Arctic", "Atlantic", "Pacific", "Indian"],["Hearts", "Spades", "Diamonds", "Clubs"],["Clock", "Timepiece", "Sundial", "Watch"],["Canucks", "Flames", "Oilers", "Senators"],["Basil", "Oregano", "Thyme", "Parsley"],["Samsun", "Sanyo", "Panasonic", "Pioneer"],["Hershey", "Caramilk", "Smarties", "Eatmore"],["Tahiti", "Samoa", "Tonga", "Tuvalu"],["France", "Germany", "Spain", "England"],["Gucci", "Armani", "Versace", "Vuitton"],["Embroidery", "Crochet", "Knitting", "Sewing"],["Sardine", "Trout", "Salmon", "Whitefish"],["Bigfoot", "Sasquatch", "Minotaur", "Ogopogo"],["Flannel", "Linen", "Cotton", "Spandex"],["Scrabble", "Checkers", "Chess", "Backgammon"],["Almond", "Pecan", "Pistachio", "Walnut"],["Cheddar", "Camembert", "Gouda", "Parmesan"],["Molson", "Kokanee", "Labatt", "Coors"],["Ballroom", "Ballet", "Swing", "Hiphop"],["Beethoven", "Brahms", "Chopin", "Handel"],["Violin", "Flute", "Piano", "Percussion"],["Rhine", "Amazon", "Danube", "Yangtze"],["Penny", "Nickel", "Quarter", "Dollar"],["Purse", "Backpack", "Schoolbag", "Duffle"],["Terrier", "Bulldog", "Dalmatian", "Poodle"],["Stroll", "Saunter", "Prance", "Swagger"],["Hydrogen", "Helium", "Oxygen", "Nitrogen"],["Saturn", "Jupiter", "Venus", "Mercury"],["Sneaker", "Sandal", "Moccasin", "Loafer"],["Toyota", "Mazda", "Mercedes", "Honda"],["Termite", "Katydid", "Spider", "Ladybug"],["Coupe", "Minivan", "Sedan", "Hatchback"],["London", "Paris", "Madrid", "Berlin"],["Bahamas", "Barbados", "Jamaica", "Bermuda"],["Japan", "China", "Korea", "Singapore"],["Lipstick", "Nailpolish", "Shadow", "Blush"],["Herbal", "Rooibos", "Jasmine", "Peppermint"],["Virgo", "Taurus", "Aquarius", "Gemini"],["Chardonnay", "Merlot", "Shiraz", "Cabernet"],["Reebok", "Asics", "Adidas", "Converse"],["Tornado", "Cyclone", "Hurricane", "Storm"],["Poplar", "Birch", "Alder", "Willow"],["Spoon", "Knife", "Spatula", "Ladle"],["Lasagna", "Spaghetti", "Linguine", "Penne"],["Movie", "Theatre", "Musical", "Opera"],["Shirt", "Jacket", "Sweater", "Overcoat"],["Pencil", "Ballpoint", "Marker", "Crayon"],["House", "Apartment", "Cabin", "Cottage"],["Squirrel", "Mouse", "Hamster", "Gerbil"],["Tiger", "Leopard", "Cheetah", "Cougar"],["Parrot", "Bluebird", "Robin", "Budgie"],["Paperback", "Magazine", "Newspaper", "Journal"],["Roman", "Byzantine", "Egyptian", "Ottoman"],["Horror", "Comedy", "Drama", "Foreign"],["Hockey", "Skiing", "Curling", "Skating"],["Mountain", "Knoll", "Highland", "Foothill"],["Carrot", "Potato", "Onion", "Eggplant"],["Airplane", "Helicopter", "Blimp", "Balloon"],["Kayak", "Gondola", "Canoe", "Sailboat"],["Painting", "Sculpture", "Portrait", "Photograph"],["Soccer", "Basketball", "Baseball", "Football"]]



}