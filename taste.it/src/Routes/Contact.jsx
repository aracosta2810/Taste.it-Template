import ContactForm from "../Components/contact/ContactForm";
import ContactInfo from "../Components/contact/ContactInfo";
import Header from "../Components/Header";

const Contact = () => {
    return (
        <div>
            <Header title={"Contact Us"} section={"Contact us"}/>
            <ContactInfo/>
            <ContactForm/>
        </div>
    );
}

export default Contact;