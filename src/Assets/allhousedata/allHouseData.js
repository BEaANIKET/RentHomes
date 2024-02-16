import b1 from './b1.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'
import b5 from './b5.jpg'
import b6 from './b6.jpg'
import b7 from './b7.jpg'
import b8 from './b8.jpg'

import h1 from './h1.jpg'
import h2 from './h2.jpg'
import h3 from './h3.jpg'
import h4 from './h4.jpg'
import h5 from './h5.jpg'
import h6 from './h6.jpg'
import h7 from './h7.jpg'
import h8 from './h8.jpg'

import k1 from './k1.jpg'
import k2 from './k2.jpg'
import k3 from './k3.jpg'
import k4 from './k4.jpg'
import k5 from './k5.jpg'
import k6 from './k6.jpg'
import k7 from './k7.jpg'
import k8 from './k8.jpg'

import l1 from './l1.jpg'
import l2 from './l2.jpg'
import l3 from './l3.jpg'
import l4 from './l4.jpg'
import l5 from './l5.jpg'
import l6 from './l6.jpg'
import l7 from './l7.jpg'
import l8 from './l8.jpg'

const allData = [
    {
        id: 1,
        houseImg: h1,
        bedroomImg: b1,
        kitchenImg: k1,
        livingImg: l1,
        name: 'Royal Suite', 
        price: '499', 
        description: 'Discover our luxurious suites with breathtaking views and impeccable service... Featuring a spacious 60" TV, lightning-fast WiFi, and 3 elegant bathrooms, including a lavishly appointed living room and 3 master bedrooms, fit for royalty!',
        Facilites: 'Private sauna and jacuzzi, Complimentary minibar, In-room dining service, Smart home automation system, 24-hour concierge service',
        Size: '50m²', 
        BedType: 'King size bed',
        Categories: 'Luxury', 
        location: 'Mumbai, India' 
    },
    {
        id: 2,
        houseImg: h2,
        bedroomImg: b2,
        kitchenImg: k2,
        livingImg: l2,
        name: 'Deluxe Retreat', 
        price: '599', 
        description: 'Indulge in our opulent suites, where every detail speaks of refinement and sophistication... Enjoy the latest entertainment on a stunning 75" TV, lightning-fast WiFi, and 4 lavish bathrooms, including a grand living room and 4 deluxe bedrooms, fit for discerning guests!',
        Facilites: 'Exclusive access to rooftop terrace, Personalized butler service, Premium bedding and linens, Complimentary breakfast buffet, Private airport transfer',
        Size: '70m²', 
        BedType: 'Queen size bed',
        Categories: 'Deluxe', 
        location: 'New Delhi, India' 
    },
    {
        id: 3,
        houseImg: h3,
        bedroomImg: b3,
        kitchenImg: k3,
        livingImg: l3,
        name: 'Cozy Haven', 
        price: '349', 
        description: 'Escape to our charming suites, where comfort meets style... Relax with your favorite shows on a 50" TV, stay connected with high-speed WiFi, and enjoy 2 cozy bathrooms along with a welcoming living room and 2 snug bedrooms, perfect for a tranquil retreat!',
        Facilites: 'Complimentary continental breakfast, Access to fitness center and spa, Concierge assistance, Laundry service available, Free parking',
        Size: '40m²', 
        BedType: 'Double bed',
        Categories: 'Comfort', 
        location: 'Bangalore, India' 
    },
    {
        id: 4,
        houseImg: h4,
        bedroomImg: b4,
        kitchenImg: k4,
        livingImg: l4,
        name: 'Relaxation Oasis', 
        price: '449', 
        description: 'Experience our cozy suites designed for ultimate relaxation... Enjoy your favorite movies on a 55" TV, stay connected with high-speed WiFi, and unwind in 2 modern bathrooms along with a cozy living room and 2 snug bedrooms, perfect for a peaceful getaway!',
        Facilites: 'Complimentary tea and coffee facilities, Daily housekeeping service, Access to business center, Shuttle service available, On-site restaurant',
        Size: '45m²', 
        BedType: 'Twin beds',
        Categories: 'Relaxation', 
        location: 'Chennai, India' 
    },
    {
        id: 5,
        houseImg: h5,
        bedroomImg: b5,
        kitchenImg: k5,
        livingImg: l5,
        name: 'Family Retreat', 
        price: '529', 
        description: 'Unwind in our spacious suites designed for utmost comfort... Enjoy entertainment on a 65" TV, stay connected with high-speed WiFi, and relax in 3 modern bathrooms along with a spacious living room and 3 cozy bedrooms, perfect for a family retreat!',
        Facilites: 'Access to swimming pool and sauna, Kids club activities, Bicycle rental service, Airport shuttle service, Complimentary beach towels',
        Size: '60m²', 
        BedType: 'King size bed',
        Categories: 'Family', 
        location: 'Hyderabad, India' 
    },
    {
        id: 6,
        houseImg: h6,
        bedroomImg: b6,
        kitchenImg: k6,
        livingImg: l6,
        name: 'Weekend Hideaway', 
        price: '379', 
        description: 'Relax in our modern suites designed for a memorable stay... Enjoy entertainment on a 55" TV, stay connected with high-speed WiFi, and refresh in 2 sleek bathrooms along with a stylish living room and 2 comfortable bedrooms, perfect for a weekend getaway!',
        Facilites: '24-hour room service, Mini-bar with complimentary snacks, Access to rooftop lounge, Complimentary newspaper, Valet parking',
        Size: '45m²', 
        BedType: 'Queen size bed',
        Categories: 'Weekend Escape', 
        location: 'Kolkata, India' 
    },
    {
        id: 7,
        houseImg: h7,
        bedroomImg: b7,
        kitchenImg: k7,
        livingImg: l7,
        name: 'Exclusive Haven', 
        price: '469', 
        description: 'Discover our exclusive suites designed for discerning travelers... Enjoy entertainment on a 60" TV, stay connected with high-speed WiFi, and rejuvenate in 2 elegant bathrooms along with a spacious living room and 2 luxurious bedrooms, perfect for a luxurious stay!',
        Facilites: 'Personalized concierge service, Access to exclusive lounge, In-room spa treatments, Gourmet dining options, Limousine service available',
        Size: '55m²', 
        BedType: 'King size bed',
        Categories: 'Exclusive', 
        location: 'Pune, India' 
    },
    {
        id: 8,
        houseImg: h8,
        bedroomImg: b8,
        kitchenImg: k8,
        livingImg: l8,
        name: 'Tranquil Retreat', 
        price: '389', 
        description: 'Escape to our serene suites designed for ultimate relaxation... Enjoy entertainment on a 50" TV, stay connected with high-speed WiFi, and unwind in 2 modern bathrooms along with a cozy living room and 2 comfortable bedrooms, perfect for a peaceful retreat!',
        Facilites: 'Complimentary bottled water, Access to outdoor pool, Business center services, Airport shuttle service, On-site bar and lounge',
        Size: '40m²', 
        BedType: 'Double bed',
        Categories: 'Tranquility', 
        location: 'Jaipur, India' 
    },
]




export default allData;