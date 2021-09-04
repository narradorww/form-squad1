import React, {useState} from "react";
import styled from 'styled-components';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const StyledRadio= styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const StyledGroup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 0 0
`;

export default function SelecionaPredio() {
  const [value, setValue] = useState("São Paulo");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledGroup>
    <p>Selecione o Escritório</p>

    <FormControl component="fieldset">
     
      {/* <FormLabel component="legend">Selecione o Escritório</FormLabel> */}
    
      
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <StyledRadio>
        <FormControlLabel
          value="São Paulo"
          control={<Radio />}
          label="São Paulo"
        />
        <FormControlLabel
         value="Santos"
          control={<Radio />}
           label="Santos" />
            </StyledRadio>
      </RadioGroup>
     
    </FormControl>
    </StyledGroup>
  );
}
