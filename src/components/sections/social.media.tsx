import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

interface IProps {
    github: string;
    linked: string;
    mail: string;
    facebook: string;
}
const SocialMedia = (props: IProps) => {
    const { github, linked, mail, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github">
                <SiGithub size={30} />
            </a>
            <a href={linked} target='_blank' className="highlight" title="Linked">
                <FaLinkedinIn size={30} />
            </a>
            <a href={mail} target='_blank' className="highlight" title="Mail">
                <SiGmail size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;