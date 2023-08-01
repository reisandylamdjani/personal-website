import { useState, useTransition } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }

    const form = useRef();

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Send");
    emailjs
      .sendForm(
        "service_hwxjhka",
        "template_0kn8eoe",
        form.current,
        "Mx1jG9aMC-_9FMMB4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setStatus({ succes: true, message: 'Message sent successfully'});
          setFormDetails(formInitialDetails);
        },
        (error) => {
          console.log(error.text);
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
          setFormDetails(formInitialDetails);
        }
      );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name = "user_firstName" value={formDetails.firstName} placeholder="First Name"
                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name = "user_lastName" value={formDetails.lastName} placeholder="Last Name"
                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name = "user_email" value={formDetails.email} placeholder="Email Address"
                                            onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name = "phone_number" value={formDetails.phoneNumber} placeholder="Phone Number"
                                            onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row="6" name="message" value={formDetails.message} placeholder="Message"
                                            onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type="submit" value="Send"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}