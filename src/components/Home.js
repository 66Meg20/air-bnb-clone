import React from "react";
import "./home.css";
import Banner from "./Banner";
import Card from "./Cards";

export default function Home() {
  return (
    <div className="home__container">
      <Banner />
      <div className="homeSection">
        <div className="cardsContainer">
          <Card
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
          <Card
            src="https://images.unsplash.com/photo-1486324142883-bf35968080ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Italy"
            description="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine."
            price="$444"
          />
        </div>
        <div className="cardsContainer">
          <Card
            src="https://images.unsplash.com/photo-1682685797741-f0213d24418c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            title="Saudi, arabia"
            description="Saudi Arabia, formally the Kingdom of Saudi Arabia, is a country in West Asia.
            It covers the bulk of the Arabian Peninsula, book to visit here now."
            price="$555"
          />
          <Card
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Austria"
            description="Austria, formally the Republic of Austria, is a landlocked country in Central Europe, lying in the Eastern Alps"
            price="$666"
          />
        </div>
        <div className="cardsContainer">
          <Card
            src="https://images.unsplash.com/photo-1682695798522-6e208131916d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Saudi, Arabia"
            description="Saudi Arabia, formally the Kingdom of Saudi Arabia, is a country in West Asia.
             It covers the bulk of the Arabian Peninsula, book to visit here now.
             "
            price="$111"
          />
          <Card
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Cappadocia"
            description="Cappadocia is a historical region in Central Anatolia, Turkey. It is in the provinces of Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde.
            "
            price="$333"
          />
        </div>
      </div>
    </div>
  );
}
