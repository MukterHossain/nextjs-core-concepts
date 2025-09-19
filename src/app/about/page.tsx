import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "This is about page",
}
const AboutPage = () => {
    return (
        <div>
            <p>About page</p>
        </div>
    );
};

export default AboutPage;