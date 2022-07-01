import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

const ToDoList = () => {
    return (
        <>
            <div className='w-70 container my-3'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Add to Task"
                        aria-label="Add to Task"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Add Task
                    </Button>
                </InputGroup>
            </div>
        </>
    );
};

export default ToDoList;