import React from "react";
import { Card, CardText, CardBody, CardTitle, CardHeader, CardImg} from 'reactstrap';

export default function CharacterCard(props) {
  return <span> 
    <Card body outline color="danger" body width="30%" >
    <CardBody>
    <CardHeader tag="h3">
    <CardTitle>{props.character.name}</CardTitle>
    </CardHeader>
    <CardImg src={props.character.image}></CardImg>
    <CardText>Status: {props.character.status}</CardText>
    <CardText>Origin: {props.character.origin.name}</CardText>
    <CardText>Current Location: {props.character.location.name}</CardText>
    <CardText>Species: {props.character.species}</CardText>
    <CardText>Type: {props.character.type}</CardText>
    <CardText>Gender: {props.character.gender}</CardText>
  </CardBody>
</Card></span>;
}
