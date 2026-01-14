export default function Footer() {
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
                The data source is available at <a href="https://ddm999.github.io/gt7info/" className="link">github.com/ddm999/gt7info</a>.
            </p>
        </footer>
    )
}