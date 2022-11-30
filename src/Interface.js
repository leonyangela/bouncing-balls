
export function SocialMedia({
    socialClassName = "github",
    imgURL = "/assets/images/github-logo.png",
    socialMediaURL = 'hihi'
}) {
    const openSocialMedia = () => {
        window.open(socialMediaURL, '_blank').focus()
    }
    return <>
        <div className={socialClassName} onClick={openSocialMedia}>
            <img src={imgURL} />
        </div>
    </>
}


export default function Interface() {
    return <>
        <div className="interface">
            <div className="logo" onClick={() => { window.open("https://www.linkedin.com/in/leoni-angela/", '_blank').focus() }}>Leoni Angela</div>
            <div className="credit">&copy; 2022 leoni angela</div>

            <div className="social-media">
                <SocialMedia socialMediaURL={"https://github.com/leonyangela"} />

                <SocialMedia
                    socialClassName={"linkedin"}
                    imgURL={"/assets/images/linkedin-logo.png"}
                    socialMediaURL={"https://www.linkedin.com/in/leoni-angela/"}
                />
            </div>
        </div>
    </>
}