import React, { useState } from "react";
import Card from "../../shared/components/UIElement/Card";
import Modal from "../../shared/components/UIElement/Modal";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Map from "../../shared/components/UIElement/Map";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      {setShowMap && (
        <Modal
          show={showMap}
          onCancel={() => setShowMap(false)}
          header={props.address}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={<Button onClick={() => setShowMap(false)}>CLOSE</Button>}
        >
          <div className="map-container" style={{ padding: "5px" }}>
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={
                "https://maps.google.com/maps?q=" +
                props.coordinates.lat.toString() +
                "," +
                props.coordinates.lng.toString() +
                "&t=&z=15&ie=UTF8&iwloc=&output=embed"
              }
            ></iframe>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
            ></script>
          </div>
        </Modal>
      )}
      <li className="place-item">
        <Card className="place-item">
          <div className="place-item__Image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h2>{props.address}</h2>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={() => setShowMap(true)}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
