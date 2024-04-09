import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import OccupationOBJ from "../../service/occupation.js";
import { Progress, FormGroup, Alert } from "reactstrap";
import { OccupationStyle } from "./formsStyle";
import FooterFirst from "../../components/footer/FooterFirst.jsx";

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : OccupationOBJ.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

export class FormOccupation extends React.Component {
  constructor({ display }) {
    super({ display });
    this.display = display;
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    let storage = JSON.parse(localStorage.getItem("@formsDate"));
    let occupation;
    if (storage != null) {
      this.occupation = storage.occupation;
    }
    this.state = {
      value: this.occupation ? this.occupation : "",
      suggestions: [],
      path: parseInt(window.location.pathname.replace(/\D/g, "")),
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions, path } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Digite",
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <OccupationStyle className={this.display}>
        <Progress
          value="66.4"
          color="success"
          className="custom-progress-bar"
        />

        <Alert className="col-9 m-auto alert-mobile mt-5">
          <p>Passo {path} de 6</p>
          <small>Dados pessoais</small>
        </Alert>

        <FormGroup className="col-9 group-input m-auto">
          <h3 className="label-input">
            Conta pra gente: qual é a sua profissão atual?
          </h3>
          <h3 className="label-suggest">Profissão</h3>
          <Autosuggest
            className="auto-suggest mt-5"
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </FormGroup>
        <FooterFirst />
      </OccupationStyle>
    );
  }
}
