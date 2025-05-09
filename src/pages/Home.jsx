import React from "react";
import { SharedCard } from "../shared/SharedCard";

export function Home() {
  return (
    <SharedCard className="alert alert-primary container" title="Home Page">
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        molestias veritatis et repudiandae quos, necessitatibus expedita dolorem
        eveniet, tempora, provident laudantium deleniti nostrum quam cupiditate?
        Maxime earum rem similique fugiat.
      </p>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        molestias veritatis et repudiandae quos, necessitatibus expedita dolorem
        eveniet, tempora, provident laudantium deleniti nostrum quam cupiditate?
        Maxime earum rem similique fugiat.
      </p>
      <button className="btn btn-dark">Show More</button>
    </SharedCard>
  );
}
