
export function SocialMedia({
    socialClassName = "github",
    imgURL = "/assets/images/github-logo.png",
    socialMediaURL = ''
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
            <div className="logo" onClick={() => { window.open("https://leoni-angela.vercel.app/", '_blank').focus() }}>Leoni Angela</div>
            <div className="credit">&copy; 2022 Leoni Angela</div>

            <div className="description">
                <h1 className="title">Interactive Physics Bouncing Balls</h1>
                <h1 className="subtitle">Hover, scatter, collide—Step into a playful 3D world where hundreds of spheres come alive. Hover over the scene and watch as the balls scatter, collide, and bounce with real-time physics, creating a chaotic but mesmerizing interactive experience—all rendered directly in the browser.</h1>
            </div>



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