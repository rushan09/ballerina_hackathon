(function () {
    angular.module("AppModule")
            .service("RestaurantDetailService", function () {
        
                this.getRestaurantDetails = function() {
                    var data = {
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
          "aggregate_rating": "5",
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
    };
                    return data;
                };                   
            });
}());