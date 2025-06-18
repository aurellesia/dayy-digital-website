import { useNavigate } from "react-router-dom";

const ButtonGetStarted = () => {
    const navigate = useNavigate();
    const handleGoToPricing = () => navigate("pricing");

    return (
        <>
            <button className="btn-get-started" onClick={handleGoToPricing}>Get Started</button>
        </>
    )
}

export default ButtonGetStarted;