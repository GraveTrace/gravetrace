import { Link } from "react-router-dom";
import logo from "../assets/gravetracelogo.svg";
import qrcode from "../assets/qrcode_hp.png";
import qrsticker from "../assets/qr_sticker.png";
import hero from "../assets/cementary_hp.png";
import LogButton from "../components/LogButton";

export default function Homepage() {
    return (
        <div className="homepage">
            {/* logo | nav buttons */}
            <div className="homepage__navbar">
                <div className="homepage__navbar__logo">
                    <img src={logo} alt="GraveTrace" />
                </div>
                <div className="homepage__navbar__buttons">
                    <Link to="/login">
                        <LogButton text="Zaloguj się" />
                    </Link>
                    <Link to="/register">
                        <LogButton text="Zarejestruj się" />
                    </Link>
                </div>
            </div>
            <div className="homepage__content">
                <div className="homepage__content__col1">
                    <img src={hero} alt="cementary"/>
                </div>
                {/* h1 co to jest post mortem? */}
                <div className="homepage__content__col2">
                    <h1>Co to jest GraveTrace?</h1>
                    {/* h2 text*/}
                    <h2>
                        Jest to sposób na pielęgnowanie pamięci o zmarłych bliskich w wyjątkowy
                        i innowacyjny sposób!<br></br><br></br> Jak to działa?<br></br><br></br> 1. Zarejestruj się<br></br> 2. Utwórz profil
                        bliskiej zmarłej osoby<br></br> 3. Wygeneruj kod QR i przyklej na nagrobku<br></br><br></br>
                        Zapewniamy bezpieczne przechowywanie danych, możliwość dostępu do
                        profili zmarłych w każdym miejscu z dostępem do internetu oraz
                        umożliwiamy upamiętenienie swoich bliskich w sposób interaktywny i
                        ekofriendly.<br></br><br></br> Redukujemy ilość spalanych zniczy o 1000 sztuk rocznie!
                    </h2>
                    {/* qrcode images */}
                    <div className="homepage__content__images">
                        <img src={qrcode} alt="qrcode" />
                        <img src={qrsticker} alt="qr sticker" />
                    </div>
                </div>
            </div>
        </div>
    );
}
