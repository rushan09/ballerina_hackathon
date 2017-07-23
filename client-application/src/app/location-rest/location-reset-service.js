(function () {
    angular.module("AppModule")
            .service("LocationRestService", function () {
        
                this.getRestaurantsForLocation = function() {
                    var data = {
  "location": {
    "entity_type": "",
    "entity_id": 0,
    "title": "Kollupitiya, Colombo 03",
    "latitude": "6.9092370000",
    "longitude": "79.8515430000",
    "city_id": 58,
    "city_name": "Colombo",
    "country_id": 191,
    "country_name": "Sri Lanka"
  },
  "popularity": {
    "popularity": "4.51",
    "nightlife_index": "3.75",
    "nearby_res": [
      "5800433",
      "5800240",
      "5800710",
      "5800590",
      "5801077",
      "5800316",
      "5800224",
      "5800011",
      "5801078"
    ],
    "top_cuisines": [
      "Sri Lankan",
      "Fast Food",
      "Cafe",
      "Desserts",
      "Bakery"
    ],
    "popularity_res": "100",
    "nightlife_res": "10",
    "subzone": "Kollupitiya, Colombo 03",
    "subzone_id": 58018,
    "city": "Colombo"
  },
  "link": "https://www.zomato.com/colombo/kollupitiya-colombo-03-restaurants",
  "nearby_restaurants": [
    {
      "restaurant": {
        "R": {
          "res_id": 5800433
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800433",
        "name": "The Sizzle",
        "url": "https://www.zomato.com/colombo/the-sizzle-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "32, Walukarama Road, Kollupitiya, Colombo 03",
          "locality": "Kollupitiya, Colombo 03",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9045805556",
          "longitude": "79.8529277778",
          "zipcode": "0",
          "country_id": 191,
          "locality_verbose": "Kollupitiya, Colombo 03, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "American, Fast Food, Steak, Beverages",
        "average_cost_for_two": 3000,
        "price_range": 3,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800433_RESTAURANT_f3aa4057d124777761d8d7196d2e69ef_c.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.2",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "votes": "297"
        },
        "photos_url": "https://www.zomato.com/colombo/the-sizzle-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/the-sizzle-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800433_RESTAURANT_f3aa4057d124777761d8d7196d2e69ef_c.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800433",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/the-sizzle-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5800240
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800240",
        "name": "The Gallery Cafe",
        "url": "https://www.zomato.com/colombo/the-gallery-cafe-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "2, Alfred House Road, Off Duplication Road, Kollupitiya, Colombo 03",
          "locality": "Kollupitiya, Colombo 03",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.8986166667",
          "longitude": "79.8546000000",
          "zipcode": "0",
          "country_id": 191,
          "locality_verbose": "Kollupitiya, Colombo 03, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Sri Lankan, Italian, Seafood, Desserts",
        "average_cost_for_two": 6000,
        "price_range": 4,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800240_CHAIN_b5a9b37b71f21eaad43bc595c2f16144.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.7",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "votes": "170"
        },
        "photos_url": "https://www.zomato.com/colombo/the-gallery-cafe-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/the-gallery-cafe-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800240_CHAIN_b5a9b37b71f21eaad43bc595c2f16144.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800240",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/the-gallery-cafe-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5800710
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800710",
        "name": "The Manhattan Fish Market",
        "url": "https://www.zomato.com/colombo/the-manhattan-fish-market-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "31, Deal Place, Off R.A. De Mel Mawatha, Kollupitiya, Colombo 03",
          "locality": "Kollupitiya, Colombo 03",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9068138889",
          "longitude": "79.8533638889",
          "zipcode": "",
          "country_id": 191,
          "locality_verbose": "Kollupitiya, Colombo 03, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Seafood, Italian",
        "average_cost_for_two": 4500,
        "price_range": 4,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800710_CHAIN_2aacb09f2875f0d5bd39b1c1ae99f0cb_c.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.0",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "votes": "203"
        },
        "photos_url": "https://www.zomato.com/colombo/the-manhattan-fish-market-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/the-manhattan-fish-market-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800710_CHAIN_2aacb09f2875f0d5bd39b1c1ae99f0cb_c.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800710",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/the-manhattan-fish-market-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5800590
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800590",
        "name": "The Commons",
        "url": "https://www.zomato.com/colombo/the-commons-cinnamon-gardens-colombo-07?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "39 A, Flower Road, Cinnamon Gardens, Colombo 07",
          "locality": "Cinnamon Gardens, Colombo 07",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9085362716",
          "longitude": "79.8581046984",
          "zipcode": "0",
          "country_id": 191,
          "locality_verbose": "Cinnamon Gardens, Colombo 07, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Cafe, Sri Lankan, Continental, American",
        "average_cost_for_two": 2500,
        "price_range": 3,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800590_RESTAURANT_40ed87fe176aa63d6f6cb086935ef475_c.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.0",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "votes": "229"
        },
        "photos_url": "https://www.zomato.com/colombo/the-commons-cinnamon-gardens-colombo-07/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/the-commons-cinnamon-gardens-colombo-07/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800590_RESTAURANT_40ed87fe176aa63d6f6cb086935ef475_c.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800590",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/the-commons-cinnamon-gardens-colombo-07/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5801077
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5801077",
        "name": "Noodles - Cinnamon Grand",
        "url": "https://www.zomato.com/colombo/noodles-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Cinnamon Grand, Kollupitiya, Colombo 03",
          "locality": "Cinnamon Grand, Kollupitiya",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9182888889",
          "longitude": "79.8488527778",
          "zipcode": "",
          "country_id": 191,
          "locality_verbose": "Cinnamon Grand, Kollupitiya, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Japanese, Thai, Chinese, Vietnamese",
        "average_cost_for_two": 4000,
        "price_range": 4,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5801077_RESTAURANT_cb270e50c62807250b10fe4f6b322463.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.6",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "votes": "107"
        },
        "photos_url": "https://www.zomato.com/colombo/noodles-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/noodles-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5801077_RESTAURANT_cb270e50c62807250b10fe4f6b322463.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5801077",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/noodles-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5800316
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800316",
        "name": "Cricket Club Cafe",
        "url": "https://www.zomato.com/colombo/cricket-club-cafe-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "12 Flower Road, Kollupitiya, Colombo 03",
          "locality": "Kollupitiya, Colombo 03",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "0.0000000000",
          "longitude": "0.0000000000",
          "zipcode": "0",
          "country_id": 191,
          "locality_verbose": "Kollupitiya, Colombo 03, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Continental, American, Seafood",
        "average_cost_for_two": 3000,
        "price_range": 3,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800316_RESTAURANT_9c74c29aaefc5bb3dcf978b3208b8c8d_c.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.3",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "votes": "181"
        },
        "photos_url": "https://www.zomato.com/colombo/cricket-club-cafe-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/cricket-club-cafe-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800316_RESTAURANT_9c74c29aaefc5bb3dcf978b3208b8c8d_c.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800316",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/cricket-club-cafe-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5800224
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800224",
        "name": "Sugar Bistro and Wine Bar",
        "url": "https://www.zomato.com/colombo/sugar-bistro-and-wine-bar-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Crescat Boulevard, Lobby Level, Kollupitiya, Colombo 03",
          "locality": "Crescat Boulevard, Kollupitiya",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9172583333",
          "longitude": "79.8478388889",
          "zipcode": "0",
          "country_id": 191,
          "locality_verbose": "Crescat Boulevard, Kollupitiya, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Cafe, American, Continental",
        "average_cost_for_two": 3500,
        "price_range": 3,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800224_CHAIN_bc494606f549d694fff5417adfe57a13.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.3",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "votes": "115"
        },
        "photos_url": "https://www.zomato.com/colombo/sugar-bistro-and-wine-bar-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/sugar-bistro-and-wine-bar-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800224_CHAIN_bc494606f549d694fff5417adfe57a13.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800224",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/sugar-bistro-and-wine-bar-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5800011
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5800011",
        "name": "The Bavarian",
        "url": "https://www.zomato.com/colombo/the-bavarian-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "11, Galle Face Court, Galle Road, Kollupitiya, Colombo 03",
          "locality": "Kollupitiya, Colombo 03",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9205194444",
          "longitude": "79.8471222222",
          "zipcode": "0",
          "country_id": 191,
          "locality_verbose": "Kollupitiya, Colombo 03, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "German",
        "average_cost_for_two": 4000,
        "price_range": 4,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5800011_CHAIN_34fc44caaa0470d1448b9ac17f88361c_c.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.5",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "votes": "155"
        },
        "photos_url": "https://www.zomato.com/colombo/the-bavarian-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/the-bavarian-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5800011_CHAIN_34fc44caaa0470d1448b9ac17f88361c_c.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5800011",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/the-bavarian-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 5801078
        },
        "apikey": "1cdb73667d3ce6441d1336057b3d5c8f",
        "id": "5801078",
        "name": "Arabian Knights",
        "url": "https://www.zomato.com/colombo/arabian-knights-1-kollupitiya-colombo-03?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "377, Opposite Amana Bank, Galle Road, Kollupitiya, Colombo 03",
          "locality": "Kollupitiya, Colombo 03",
          "city": "Colombo",
          "city_id": 58,
          "latitude": "6.9043920000",
          "longitude": "79.8522480000",
          "zipcode": "",
          "country_id": 191,
          "locality_verbose": "Kollupitiya, Colombo 03, Colombo"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Middle Eastern, Arabian",
        "average_cost_for_two": 2400,
        "price_range": 3,
        "currency": "LKR",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/res_imagery/5801078_RESTAURANT_e93c723973ac4cf236e9dca10de49584.jpg?fit=around%7C200%3A150&crop=200%3A150%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.2",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "votes": "173"
        },
        "photos_url": "https://www.zomato.com/colombo/arabian-knights-1-kollupitiya-colombo-03/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/colombo/arabian-knights-1-kollupitiya-colombo-03/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/5801078_RESTAURANT_e93c723973ac4cf236e9dca10de49584.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/5801078",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/colombo/arabian-knights-1-kollupitiya-colombo-03/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
      }
    }
  ]
};
                    return data;
                };                   
            });
}());