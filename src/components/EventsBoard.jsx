import React from 'react';
import EventCard from './EventCard';
import './EventsBoard.css';

const eventsData = [
  {
    id: 1,
    title: "Birria-Landia",
    description: "Mexican",
    link: "https://birrialandia.com/menu/",
    image: "/src/images/birria-landia.png",
  },
  {
    id: 2,
    title: "Mysttik Masala",
    description: "Indian",
    link: "https://indianfoodny.com/lander",
    image: "/src/images/mystikk.png",
  },
  {
    id: 3,
    title: "The Halal Guys",
    description: "Middle Eastern",
    link: "https://thehalalguys.com/menu/",
    image: "/src/images/halal.png",
  },
  {
    id: 4,
    title: "NY Dosas",
    description: "Vegetarian",
    link: "https://nydosas.com/menu/",
    image: "/src/images/dosa.png",
  },
  {
    id: 5,
    title: "Jerk Pan",
    description: "Jamaican",
    link: "https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/",
    image: "/src/images/jerk.png",
  },
  {
    id: 6,
    title: "Tong",
    description: "Bangladeshi",
    link: "https://www.facebook.com/Bangladeshistreetfoods/",
    image: "/src/images/tong.png",
  },
  {
    id: 7,
    title: "King Souvlaki of Astoria",
    description: "Greek",
    link: "https://kingsouvlakinyc.com",
    image: "/src/images/king.png",
  },
  {
    id: 8,
    title: "Ling's Sweet Mini Cakes",
    description: "Chinese",
    link: "https://canalstreet.market",
    image: "/src/images/cake.png",
  },
  {
    id: 9,
    title: "Uncle Gussy's",
    description: "Greek",
    link: "https://unclegussys.com/menus/",
    image: "/src/images/gussy.png",
  },
  {
    id: 10,
    title: "Patacon Pisao",
    description: "Venezuelan",
    link: "https://www.pataconpisaonyc.com/menus/",
    image: "/src/images/picasso.png",
  },
  {
    id: 11,
    title: "Mom's Momo",
    description: "Tibetan",
    link: "https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/",
    image: "/src/images/Momo.png",
  },
  {
    id: 12,
    title: "Makina Cafe",
    description: "Ethiopian",
    link: "https://makinacafenyc.com",
    image: "/src/images/makina.png",
  },
  
];

const EventsBoard = () => {
  return (
    <div className="events-board">
      {eventsData.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventsBoard;