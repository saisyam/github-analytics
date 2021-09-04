import {useContext, useRef} from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import UsernameContext from '../../context/UsernameContext';


function Username() {
    const { setUsername } = useContext(UsernameContext);
    const inputEl = useRef(null);
    const onButtonClick = () => {
        setUsername(inputEl.current.value);
      };
    return (
        <InputGroup className="mb-3">
            <FormControl
                ref={inputEl}
                placeholder="Github Username"
                aria-label="Github Username"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={onButtonClick}>
                Get Details
            </Button>
        </InputGroup>

    );
}

export default Username;