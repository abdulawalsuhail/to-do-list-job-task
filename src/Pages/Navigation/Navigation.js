import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navigation = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            
                            {
                                user && <Link to="/completedTask" className='mx-2 button_Clr'>Complete Task</Link>
                            }
                            {
                                user && <Link to="/todo" className='mx-2 button_Clr'>TO DO</Link>
                            }
                            {
                                user && <Link to="/calendar" className='mx-2 button_Clr'>Calendar</Link>
                            }
                            {
                                user ? <button className='btn btn-outline-secondary' onClick={logout} >Sign Out</button> : <Link className='btn btn-outline-secondary' to="/login">Login</Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;