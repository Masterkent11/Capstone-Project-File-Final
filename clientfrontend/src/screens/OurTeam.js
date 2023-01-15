import NessanImage from "../components/video/Img1.png";
import Lester from "../components/video/Img2.jpg"
import Header from "./../components/Header";
import Footer from "../components/Footer";


const OurTeam = () => {

    //TODO: Images
    class Info {
        constructor(imageProfile, personName, position, facebookLink, linkedinLink, portfolioLink) {
            this.imageProfile = imageProfile;
            this.personName = personName;
            this.position = position;
            this.facebookLink = facebookLink;
            this.linkedinLink = linkedinLink;
            this.portfolioLink = portfolioLink;
        }
        personInformation() {
            return(
                <>
                <div className="col-4 text-center position-relative imageBack">
                    <img className="w-100" src={this.imageProfile} alt=""/>
                    <div className="position-absolute Overlay d-flex justify-content-center flex-column">
                        <p style={{fontSize:"2.7vmin"}}>{this.personName}</p>
                        <p style={{fontSize: "2vmin"}}>{this.position}</p>
                        <div className='d-flex justify-content-center gap-5' style={{marginTop:"3vmin"}}>
                            <span style={{fontSize:"2.7vmin"}}>
                                <a href={this.facebookLink} style={{fontSize:"2.7vmin", color:"white"}} target="_blank">
                                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                </a>
                            </span>

                            <span>
                                <a href={this.linkedinLink} style={{fontSize:"2.7vmin", color:"white"}} target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </span>

                            <span style={{fontSize:"2.7vmin"}}>
                                <a href={this.portfolioLink} style={{fontSize:"2.7vmin", color:"white"}} target="_blank">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
             </>
            );
        }
    }

    const infoPerson = new Info(NessanImage, "Nessan Joe V. Ipulan", "Member", "https://www.facebook.com/Kneesuns", "https://www.linkedin.com/in/nessan-joe-ipulan-b8b160173/", "https://courageous-kashata-4e58f3.netlify.app")
    const content = infoPerson.personInformation();

    const infoPerson2 = new Info(Lester, "Lester De Silva", "Member", "https://www.facebook.com/Kneesuns", "https://www.linkedin.com/in/nessan-joe-ipulan-b8b160173/", "https://courageous-kashata-4e58f3.netlify.app")
    const content2 = infoPerson2.personInformation();

    const infoPerson3 = new Info(Lester, "Lester De Silva", "Member", "https://www.facebook.com/Kneesuns", "https://www.linkedin.com/in/nessan-joe-ipulan-b8b160173/", "https://courageous-kashata-4e58f3.netlify.app")
    const content3 = infoPerson3.personInformation();

    const infoPerson4 = new Info(Lester, "Lester De Silva", "Member", "https://www.facebook.com/Kneesuns", "https://www.linkedin.com/in/nessan-joe-ipulan-b8b160173/", "https://courageous-kashata-4e58f3.netlify.app")
    const content4 = infoPerson4.personInformation();

    const infoPerson5 = new Info(Lester, "Lester De Silva", "Member", "https://www.facebook.com/Kneesuns", "https://www.linkedin.com/in/nessan-joe-ipulan-b8b160173/", "https://courageous-kashata-4e58f3.netlify.app")
    const content5 = infoPerson5.personInformation();

    return (
    <>
    <Header/>
    <div className="text-center" style={{marginTop:"10vmin", marginBottom:'8vmin'}}>
        <p style={{fontSize:"7vmin", marginBottom:"2vmin"}}>
            <span>Our</span> {" "}
            <span style={{color:"#EDA415"}}>Team</span>
        </p>
        <p style={{fontSize:"2.4vmin"}}>
            This is a list of members who have contributed to the creation of this website. <br/> Visit individual social media accounts and portfolios of work.
        </p>
    </div>
    <div className="container">
        <div className="row d-flex justify-content-evenly">
            {content}
            {content2}
            {content3}
            {content4}
            {content5}
        </div>
    </div>
    <Footer/>
    </>
)
}

export default OurTeam