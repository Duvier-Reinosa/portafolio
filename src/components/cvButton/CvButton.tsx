import './cvButton.css'

function CvButton() {
    const handleDownload = () => {
        window.open('/cv.pdf')
    }

    return (
        <button className="cvButton" onClick={handleDownload}>
            Download CV
        </button>
    )
}

export default CvButton