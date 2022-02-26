import React, { useRef, useState } from "react";
import LivingRoom from "../../assets/living_room.png";
import ApartmentCard from "./apartment_card";
import { ReactComponent as FrontArrow } from "../../assets/front-btn.svg";
import { ReactComponent as BackArrow } from "../../assets/back-btn.svg";

function FeaturedStays() {
  const [apartments, setApartments] = useState([
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
  ]);

  const aptCards = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (aptCards == null || aptCards.current == null) {
      return;
    } else {
      aptCards.current.scroll({
        top: 0,
        left: aptCards.current.scrollLeft - aptCards.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (aptCards == null || aptCards.current == null) {
      return;
    } else {
      aptCards.current.scroll({
        top: 0,
        left: aptCards.current.scrollLeft + aptCards.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured-stays" className="md:mt-48 w-11/12 mx-auto my-0">
      <div className="text-2xl font-medium mb-4">Featured stays</div>
      <div className="flex justify-between">
        <div className="font-light mb-6">
          Beachfront villas to high rise apartments and penthouses ,<br />
          experience your next stay with <b className="font-bold">Stella.</b>
        </div>
        <div className="flex items-center gap-x-10">
          <BackArrow onClick={scrollLeft} />
          <FrontArrow onClick={scrollRight} />
        </div>
      </div>
      <div
        id="apartment-cards"
        className="flex flex-nowrap gap-x-10 overflow-auto"
        ref={aptCards}
      >
        {apartments.map((apt) => (
          <ApartmentCard
            backgroundImage={apt.backgroundImage}
            price={apt.price}
            city={apt.city}
            guests={apt.guests}
            location={apt.location}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedStays;
