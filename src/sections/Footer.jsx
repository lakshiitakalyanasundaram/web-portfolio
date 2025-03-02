const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                {/* GitHub */}
                <a href="https://github.com/lakshiitakalyanasundaram" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>


                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/k-lakshiita-651a7b275/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="public/assets/icons8-linkedin-50.png" alt="LinkedIn" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© 2025 K. Lakshiita. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
