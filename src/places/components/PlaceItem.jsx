import React, { useState } from "react";
import Card from "../../shared/components/UIElement/Card";
import Modal from "../../shared/components/UIElement/Modal";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";

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
          <div className="map-container">
            <h2>THE MAP!</h2>
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
