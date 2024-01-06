
function   Contact()
{
    return(
       
    <div class="container pt-5">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-light font-weight-bold">Get In Touch</h4>
            <h4 class="display-4 font-weight-bold  text-light"   >Email Us For Any Query</h4>
        </div>
        <div class="row px-3 pb-2">
            <div class="col-sm-4 text-center mb-3">
                <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                <h4 class="font-weight-bold text-light">Address</h4>
                <p class="text-light">1 Street, Asokapuram, Erode</p>
            </div>
            <div class="col-sm-4 text-center mb-3">
                <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                <h4 class="font-weight-bold text-light">Phone</h4>
                <p class="text-light">9876543210</p>
            </div>
            <div class="col-sm-4 text-center mb-3">
                <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                <h4 class="font-weight-bold text-light">Email</h4>
                <p class="text-light">fitnessfreaks@gmail.com</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 pb-5">
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15645.677383036878!2d77.68508176434197!3d11.377058356816491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96921f5c83973%3A0xa21047ac7b8d9505!2sAsokapuram%2C%20Erode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1666533969636!5m2!1sen!2sin" frameborder="0" ></iframe>
            </div>
            <div class="col-md-6 pb-5">
                <div class="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate"  action="http://localhost:3000/sign_up" method="post">

                    
                        <div class="control-group">
                            <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name"  name="name"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email"  name="email"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" name="sub"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <textarea class="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" name="msg"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );

}
export default Contact;