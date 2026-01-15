export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col gap-4 text-center container-layout">
            <h4 className="text-lg font-bold uppercase">Disclaimer</h4>

            <p className="footer-text">
                GT7DB a fan-made, non-commercial project created for personal use to view the latest used cars available.
            </p>

            <p className="footer-text">
                All game names, trademarks, and related content are the property of their respective owners.
                This website is not affiliated with, endorsed by, or sponsored by Polyphony Digital Inc. or Sony Interactive Entertainment.
            </p>

            <p className="footer-text">
                No ownership of any copyrighted material is claimed.
            </p>

            <p className="footer-text">
                The data source is available at <a href="https://ddm999.github.io/gt7info/" target="_blank" className="link">github.com/ddm999/gt7info</a>.
            </p>

            <p className="footer-text mt-4">
                ©{currentYear} Jeremy Erik Leong. This hobbyist project was developed using
                <a href="https://nextjs.org/" target="_blank" className="link"> Next.js</a>,
                <a href="https://www.typescriptlang.org/" target="_blank" className="link"> TypeScript</a>,
                <a href="https://tailwindcss.com/" target="_blank" className="link"> Tailwind CSS</a> and deployed via
                <a href="https://www.netlify.com/" target="_blank" className="link"> Netlify</a>.
            </p>
        </footer>
    )
}