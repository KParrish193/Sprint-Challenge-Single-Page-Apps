import React from "react";
import { Card, CardText, CardBody, CardTitle, CardHeader} from 'reactstrap';

export default function CharacterCard(props) {
  return <span> 
    <Card body outline color="danger" body width="30%" >
    <CardBody>
    <CardHeader tag="h3">
    <CardTitle>{props.name}</CardTitle>
    </CardHeader>
    <CardText>
      <p>Birth Year: {props.age} </p>
      <p>Home World: {props.homeworld} </p>
      <p>Gender: {props.gender} </p>
      <p>Height: {props.height} </p>
      <p>Mass: {props.mass} </p>
      <p>Hair-Color: {props.hair} </p>
      <p>Eye-Color: {props.eye} </p>
      <p>Skin-Color: {props.skin} </p>
    </CardText>
  </CardBody>
</Card></span>;
}
