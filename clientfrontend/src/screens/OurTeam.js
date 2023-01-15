import NessanImage from "../components/video/Img1.png";
import lester from "../components/video/Img2.jpg"
import Kurt from "../components/video/img3.jpg"
import Kent from "../components/video/img4.png"
import Arci from "../components/video/img5.jpg"
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

    const infoPerson = new Info(NessanImage, "Nessan Joe V. Ipulan", "Member", "https://www.facebook.com/Kneesuns", "https://www.linkedin.com/in/nessan-joe-ipulan-b8b160173/", "https://brilliant-beignet-18498e.netlify.app/")
    const content = infoPerson.personInformation();

    const infoPerson2 = new Info(lester, "Lester De Silva", "Member", "https://www.facebook.com/lester.desilva/", "https://www.linkedin.com/in/lester-de-silva-260884200/", "https://lester-d-portfolio.netlify.app/")
    const content2 = infoPerson2.personInformation();

    const infoPerson3 = new Info(Kurt, "Kurt Angelo Agualada", "Member","https://www.facebook.com/kurtangelo.agualada", "https://www.linkedin.com/in/kurt-angelo-agualada-879056233/", "https://kurtangeloagualada.netlify.app/")
    const content3 = infoPerson3.personInformation();

    const infoPerson4 = new Info(Kent, "Kent Ashley Clementir", "Member", "https://www.facebook.com/profile.php?id=100079842521652", "https://www.linkedin.com/in/kent-ashley-clementir-776090217/", "https://kentash.vercel.app/")
    const content4 = infoPerson4.personInformation();

    const infoPerson5 = new Info(Arci, "Arci Aljonel Afundar", "Member", "https://www.facebook.com/profile.php?id=100084277660721", "https://www.linkedin.com/in/arci-aljonel-afundar-3654b9216/?originalSubdomain=ph", "https://sensational-kelpie-b2ecdb.netlify.app/?fbclid=IwAR2smZQYDlHIflAPqYJdIB2vxwaqfv7MgSWdP_V129WV-aSatFTS2JMF-ak#Contact")
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