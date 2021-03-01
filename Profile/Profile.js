import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";
import { propTypes } from 'react-bootstrap/esm/Image';
const Profile = ({ Listprof, displayName, children }) => {
  return (
    <div>
      {Listprof.map((el, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={children} />
          <Card.Body>
            <Card.Title>{el.fullName}</Card.Title>
            <Card.Text>
              {el.bio}
            </Card.Text>
            <Card.Text>
              {el.profession}
            </Card.Text>
            <Button variant="primary" onClick={()=>displayName(el.fullName)} >show name</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
Profile.propTypes = {
  Listprof: propTypes.object,
  displayname: propTypes.func
}
Profile.defaultProps = {
  Listprof:[{fullName:"Hamdi",
  bio:"This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!",
  profession:"boulanger"
}] 
}
export default Profile;
