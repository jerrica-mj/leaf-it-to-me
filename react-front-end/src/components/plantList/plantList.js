import React from 'react';
import styled from "styled-components";

import PlantListItem from "./plantListItem";

const Styles = styled.div`
  .card {
    font-family: "Montserrat", Helvetica, sans-serif;
    border-radius: 15px;

    img {
      height: 175px;
      width: 175px;
      border-radius: 100%;
      margin: 15px auto 5px auto;
    }

    i.icon {
      color: #3B715A;
    }
  }
`;

export default function PlantList(props) {
  // create all plant list items from JSON
  // filteredSpecies.map((species, index)=> {
  //   return <p key={index}>
  //     {species.common_name}
  //   </p>
  // })

  const plantListItems = props.list.map((item, index) => {
    return (
      <PlantListItem
        key={index}
        index={index}
        nickname={item.nickname}
        name={item.common_name}
        scientificName={item.scientific_name}
        description={item.description}
        photo={item.photo_url}
        difficulty={item.difficulty_rating}
        waterRating={item.watering_requirement_rating}
        water={item.watering_instructions}
        sun={item.sunlight_requirement_rating}
        temp={item.temperature_requirements}
        fertilizer={item.fertilizer_requirements}
        toxic={item.poison_for_pets}
        speciesId={item.species_id || item.id}
        plantId={item.id}
        wishlisted={item.wishlisted}
        wishlistPage={props.wishlist}
        updateWishlist={props.updateWishlist}
        hook={props.hook}
        list={props.list}
        gardenButton={props.gardenButton}
        wishlistButton={props.wishlistButton}
        noBreak={props.noBreak}
      />
    )
  });

  return (
    <Styles>
      <div className="row my-4 mx-4 justify-content-center">
        {/* <PlantListItem
          nickname="Fernando"
          name="Aloe Vera"
          difficulty="easy"
          water="10-14"
          sun="full sun"
          temp="18-24"
        ></PlantListItem> */}

        {plantListItems}

      </div>
    </Styles>
  );
}